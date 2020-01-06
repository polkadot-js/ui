// Copyright 2017-2020 @polkadot/example-react authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Identicon from '@polkadot/react-identicon';
import keyring from '@polkadot/ui-keyring';
import settings from '@polkadot/ui-settings';
import { mnemonicGenerate, cryptoWaitReady } from '@polkadot/util-crypto';

interface Props {
  className?: string;
}

const rootElement = document.getElementById('example');

if (!rootElement) {
  throw new Error('Unable to find element with id \'example\'');
}

function App ({ className }: Props): React.ReactElement<Props> | null {
  const [address, setAddress] = useState<string | null>(null);
  const [phrase, setPhrase] = useState<string | null>(null);
  const [ss58Format, setSS58Format] = useState(42);

  const _onClickNew = (): void => {
    const phrase = mnemonicGenerate(12);
    const { address } = keyring.createFromUri(phrase);

    setAddress(keyring.encodeAddress(address, ss58Format));
    setPhrase(phrase);
  };
  const _onChangeSS58Format = ({ currentTarget: { value } }: React.SyntheticEvent<HTMLSelectElement>): void => {
    setSS58Format(parseInt(value, 10));
  };

  useEffect((): void => {
    _onClickNew();
  }, []);

  useEffect((): void => {
    address && setAddress(keyring.encodeAddress(address, ss58Format));
  }, [address, ss58Format]);

  if (!address || !phrase) {
    return null;
  }

  return (
    <div className={className}>
      <section>
        <button onClick={_onClickNew}>another random address</button>
      </section>
      <section>
        <label>phrase</label>
        <textarea cols={40} rows={4} readOnly value={phrase} />
      </section>
      <section>
        <label>icons</label>
        <Identicon className='icon' value={address} />
        <Identicon className='icon' value={address} theme='polkadot' />
        <Identicon className='icon' value={address} theme='beachball' />
      </section>
      <section>
        <label>address</label>
        {address}
      </section>
      <section>
        <label>ss58 format</label>
        <select onChange={_onChangeSS58Format} value={ss58Format}>
          {settings.availablePrefixes
            .filter((_, index): boolean => index !== 0)
            .map(({ text, value }): React.ReactNode => (
              <option key={value} value={value}>{text}</option>
            ))
          }
        </select>
      </section>
    </div>
  );
}

cryptoWaitReady().then((): void => {
  keyring.loadAll({ ss58Format: 42, type: 'sr25519' });
  ReactDOM.render(<App />, rootElement);
});
