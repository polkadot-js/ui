// Copyright 2017-2024 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Endpoint, EndpointType, Option, SettingsStruct } from './types.js';

import { EventEmitter } from 'eventemitter3';
import store from 'store';

import { hasProcess, isUndefined } from '@polkadot/util';

import { CAMERA, CAMERA_DEFAULT, CRYPTOS, CRYPTOS_ETH, CRYPTOS_LEDGER, ENDPOINT_DEFAULT, ENDPOINTS, ICON_DEFAULT, ICONS, LANGUAGE_DEFAULT, LEDGER_APP, LEDGER_APP_DEFAULT, LEDGER_CONN, LEDGER_CONN_DEFAULT, LOCKING, LOCKING_DEFAULT, METADATA_UP, METADATA_UP_DEFAULT, NOTIFICATION_DEFAULT, PREFIX_DEFAULT, PREFIXES, STORAGE, STORAGE_DEFAULT, UIMODE_DEFAULT, UIMODES, UITHEME_DEFAULT, UITHEMES } from './defaults/index.js';

type ChangeCallback = (settings: SettingsStruct) => void;
type OnTypes = 'change';

function withDefault (options: Option[], option: string | undefined, fallback: string): string {
  const _option = option || fallback;

  return options.some(({ value }) => value === _option)
    ? _option
    : fallback;
}

export class Settings implements SettingsStruct {
  readonly #emitter: EventEmitter;

  #apiType: Endpoint;

  // will become deprecated for supporting substrate connect light clients. apiType structure should be used instead
  #apiUrl: string;

  #camera: string;

  #i18nLang: string;

  #icon: string;

  #ledgerApp: string;

  #ledgerConn: string;

  #locking: string;

  #metadataUp: string;

  #prefix: number;

  #storage: string;

  #uiMode: string;

  #uiTheme: string;

  #notification: string;

  constructor () {
    const settings = (store.get('settings') as SettingsStruct) || {};

    this.#emitter = new EventEmitter();

    // will become deprecated for supporting substrate connect light clients. apiType structure should be used instead
    this.#apiUrl = (typeof settings.apiUrl === 'string' && settings.apiUrl) || (hasProcess && process.env?.['WS_URL']) || (ENDPOINT_DEFAULT.value as string);
    this.#apiType = { param: this.#apiUrl, type: 'json-rpc' as EndpointType };
    this.#camera = withDefault(CAMERA, settings.camera, CAMERA_DEFAULT);
    this.#ledgerApp = withDefault(LEDGER_APP, settings.ledgerApp, LEDGER_APP_DEFAULT);
    this.#ledgerConn = withDefault(LEDGER_CONN, settings.ledgerConn, LEDGER_CONN_DEFAULT);
    this.#i18nLang = settings.i18nLang || LANGUAGE_DEFAULT;
    this.#icon = settings.icon || ICON_DEFAULT;
    this.#locking = settings.locking || LOCKING_DEFAULT;
    this.#metadataUp = withDefault(METADATA_UP, settings.storage, METADATA_UP_DEFAULT);
    this.#notification = settings.notification || NOTIFICATION_DEFAULT;
    this.#prefix = isUndefined(settings.prefix) ? PREFIX_DEFAULT : settings.prefix;
    this.#storage = withDefault(STORAGE, settings.storage, STORAGE_DEFAULT);
    this.#uiMode = settings.uiMode || UIMODE_DEFAULT;
    this.#uiTheme = settings.uiTheme || UITHEME_DEFAULT;
  }

  public get camera (): string {
    return this.#camera;
  }

  public get apiType (): Endpoint {
    return this.#apiType;
  }

  public get apiUrl (): string {
    return this.#apiUrl;
  }

  public get i18nLang (): string {
    return this.#i18nLang;
  }

  public get icon (): string {
    return this.#icon;
  }

  public get notification (): string {
    return this.#notification;
  }

  public get ledgerApp (): string {
    return this.#ledgerApp;
  }

  public get ledgerConn (): string {
    return this.#ledgerConn;
  }

  public get locking (): string {
    return this.#locking;
  }

  public get metadataUp (): string {
    return this.#metadataUp;
  }

  public get prefix (): number {
    return this.#prefix;
  }

  public get storage (): string {
    return this.#storage;
  }

  public get uiMode (): string {
    return this.#uiMode;
  }

  public get uiTheme (): string {
    return this.#uiTheme;
  }

  public get availableCamera (): Option[] {
    return CAMERA;
  }

  public get availableCryptos (): Option[] {
    return CRYPTOS;
  }

  public get availableCryptosEth (): Option[] {
    return CRYPTOS_ETH;
  }

  public get availableCryptosLedger (): Option[] {
    return CRYPTOS_LEDGER;
  }

  public get availableIcons (): Option[] {
    return ICONS;
  }

  public get availableLedgerApp (): Option[] {
    return LEDGER_APP;
  }

  public get availableLedgerConn (): Option[] {
    return LEDGER_CONN;
  }

  public get availableLocking (): Option[] {
    return LOCKING;
  }

  public get availableMetadataUp (): Option[] {
    return METADATA_UP;
  }

  public get availableNodes (): Option[] {
    return ENDPOINTS;
  }

  public get availablePrefixes (): Option[] {
    return PREFIXES;
  }

  public get availableStorage (): Option[] {
    return STORAGE;
  }

  public get availableUIModes (): Option[] {
    return UIMODES;
  }

  public get availableUIThemes (): Option[] {
    return UITHEMES;
  }

  public get (): SettingsStruct {
    return {
      apiType: this.#apiType,
      apiUrl: this.#apiUrl,
      camera: this.#camera,
      i18nLang: this.#i18nLang,
      icon: this.#icon,
      ledgerApp: this.#ledgerApp,
      ledgerConn: this.#ledgerConn,
      locking: this.#locking,
      metadataUp: this.#metadataUp,
      notification: this.#notification,
      prefix: this.#prefix,
      storage: this.#storage,
      uiMode: this.#uiMode,
      uiTheme: this.#uiTheme
    };
  }

  public set (settings: Partial<SettingsStruct>): void {
    this.#apiType = settings.apiType || this.#apiType;
    this.#apiUrl = settings.apiUrl || this.#apiUrl;
    this.#camera = settings.camera || this.#camera;
    this.#ledgerConn = settings.ledgerConn || this.#ledgerConn;
    this.#ledgerApp = settings.ledgerApp || this.#ledgerApp;
    this.#i18nLang = settings.i18nLang || this.#i18nLang;
    this.#icon = settings.icon || this.#icon;
    this.#locking = settings.locking || this.#locking;
    this.#metadataUp = settings.metadataUp || this.#metadataUp;
    this.#notification = settings.notification || this.#notification;
    this.#prefix = isUndefined(settings.prefix) ? this.#prefix : settings.prefix;
    this.#storage = settings.storage || this.#storage;
    this.#uiMode = settings.uiMode || this.#uiMode;
    this.#uiTheme = settings.uiTheme || this.#uiTheme;

    const newValues = this.get();

    store.set('settings', newValues);
    this.#emitter.emit('change', newValues);
  }

  public on (type: OnTypes, cb: ChangeCallback): void {
    this.#emitter.on(type, cb);
  }
}

export const settings = new Settings();
