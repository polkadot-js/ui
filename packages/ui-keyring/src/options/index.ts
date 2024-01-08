// Copyright 2017-2024 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Subscription } from 'rxjs';
import type { SingleAddress } from '../observable/types.js';
import type { KeyringStruct } from '../types.js';
import type { KeyringOptionInstance, KeyringOptions, KeyringSectionOption, KeyringSectionOptions } from './types.js';

import { BehaviorSubject } from 'rxjs';

import { obervableAll } from '../observable/index.js';

let hasCalledInitOptions = false;

const sortByName = (a: SingleAddress, b: SingleAddress): number => {
  const valueA = a.option.name;
  const valueB = b.option.name;

  return valueA.localeCompare(valueB);
};

const sortByCreated = (a: SingleAddress, b: SingleAddress): number => {
  const valueA = a.json.meta.whenCreated || 0;
  const valueB = b.json.meta.whenCreated || 0;

  if (valueA < valueB) {
    return 1;
  }

  if (valueA > valueB) {
    return -1;
  }

  return 0;
};

export class KeyringOption implements KeyringOptionInstance {
  #allSub: Subscription | null = null;

  public readonly optionsSubject = new BehaviorSubject<KeyringOptions>(this.emptyOptions());

  public createOptionHeader (name: string): KeyringSectionOption {
    return {
      key: `header-${name.toLowerCase()}`,
      name,
      value: null
    };
  }

  public init (keyring: KeyringStruct): void {
    if (hasCalledInitOptions) {
      throw new Error('Unable to initialise options more than once');
    }

    this.#allSub = obervableAll.subscribe((): void => {
      const opts = this.emptyOptions();

      this.addAccounts(keyring, opts);
      this.addAddresses(keyring, opts);
      this.addContracts(keyring, opts);

      opts.address = this.linkItems({ Addresses: opts.address, Recent: opts.recent });
      opts.account = this.linkItems({ Accounts: opts.account, Development: opts.testing });
      opts.contract = this.linkItems({ Contracts: opts.contract });
      opts.all = ([] as KeyringSectionOptions).concat(opts.account, opts.address);
      opts.allPlus = ([] as KeyringSectionOptions).concat(opts.account, opts.address, opts.contract);

      this.optionsSubject.next(opts);
    });

    hasCalledInitOptions = true;
  }

  public clear (): void {
    if (this.#allSub) {
      this.#allSub.unsubscribe();
    }
  }

  private linkItems (items: Record<string, KeyringSectionOptions>): KeyringSectionOptions {
    return Object.keys(items).reduce((result, header): KeyringSectionOptions => {
      const options = items[header];

      return result.concat(
        options.length
          ? [this.createOptionHeader(header)]
          : [],
        options
      );
    }, [] as KeyringSectionOptions);
  }

  private addAccounts (keyring: KeyringStruct, options: KeyringOptions): void {
    const available = keyring.accounts.subject.getValue();

    Object
      .values(available)
      .sort(sortByName)
      .forEach(({ json: { meta: { isTesting = false } }, option }: SingleAddress): void => {
        if (!isTesting) {
          options.account.push(option);
        } else {
          options.testing.push(option);
        }
      });
  }

  private addAddresses (keyring: KeyringStruct, options: KeyringOptions): void {
    const available = keyring.addresses.subject.getValue();

    Object
      .values(available)
      .filter(({ json }: SingleAddress): boolean => !!json.meta.isRecent)
      .sort(sortByCreated)
      .forEach(({ option }: SingleAddress): void => {
        options.recent.push(option);
      });

    Object
      .values(available)
      .filter(({ json }: SingleAddress): boolean => !json.meta.isRecent)
      .sort(sortByName)
      .forEach(({ option }: SingleAddress): void => {
        options.address.push(option);
      });
  }

  private addContracts (keyring: KeyringStruct, options: KeyringOptions): void {
    const available = keyring.contracts.subject.getValue();

    Object
      .values(available)
      .sort(sortByName)
      .forEach(({ option }: SingleAddress): void => {
        options.contract.push(option);
      });
  }

  private emptyOptions (): KeyringOptions {
    return {
      account: [],
      address: [],
      all: [],
      allPlus: [],
      contract: [],
      recent: [],
      testing: []
    };
  }
}
