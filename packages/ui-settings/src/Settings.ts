// Copyright 2017-2019 @polkadot/ui-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import store from 'store';
import { isUndefined } from '@polkadot/util';

import { CRYPTOS, ENDPOINT_DEFAULT, ENDPOINTS, LANGUAGE_DEFAULT, LANGUAGES, LOCKING_DEFAULT, LOCKING, PREFIX_DEFAULT, PREFIXES, UIMODE_DEFAULT, UIMODES, UITHEME_DEFAULT, UITHEMES } from './defaults';
import { Option, SettingsStruct } from './types';

export class Settings implements SettingsStruct {
  private _apiUrl: string;

  private _i18nLang: string;

  private _locking: string;

  private _prefix: number;

  private _uiMode: string;

  private _uiTheme: string;

  public constructor () {
    const settings = store.get('settings') || {};

    this._apiUrl = settings.apiUrl || process.env.WS_URL || ENDPOINT_DEFAULT;
    this._i18nLang = settings.i18nLang || LANGUAGE_DEFAULT;
    this._locking = settings.locking || LOCKING_DEFAULT;
    this._prefix = isUndefined(settings.prefix) ? PREFIX_DEFAULT : settings.prefix;
    this._uiMode = settings.uiMode || UIMODE_DEFAULT;
    this._uiTheme = settings.uiTheme || UITHEME_DEFAULT;
  }

  public get apiUrl (): string {
    return this._apiUrl;
  }

  public get i18nLang (): string {
    return this._i18nLang;
  }

  public get locking (): string {
    return this._locking;
  }

  public get prefix (): number {
    return this._prefix;
  }

  public get uiMode (): string {
    return this._uiMode;
  }

  public get uiTheme (): string {
    return this._uiTheme;
  }

  public get availableNodes (): Option[] {
    return ENDPOINTS;
  }

  public get availableCryptos (): Option[] {
    return CRYPTOS;
  }

  public get availableLanguages (): Option[] {
    return LANGUAGES;
  }

  public get availableLocking (): Option[] {
    return LOCKING;
  }

  public get availablePrefixes (): Option[] {
    return PREFIXES;
  }

  public get availableUIModes (): Option[] {
    return UIMODES;
  }

  public get availableUIThemes (): Option[] {
    return UITHEMES;
  }

  public get (): SettingsStruct {
    return {
      apiUrl: this._apiUrl,
      i18nLang: this._i18nLang,
      locking: this._locking,
      prefix: this._prefix,
      uiMode: this._uiMode,
      uiTheme: this._uiTheme
    };
  }

  public set (settings: Partial<SettingsStruct>): void {
    this._apiUrl = settings.apiUrl || this._apiUrl;
    this._i18nLang = settings.i18nLang || this._i18nLang;
    this._locking = settings.locking || this._locking;
    this._prefix = isUndefined(settings.prefix) ? this._prefix : settings.prefix;
    this._uiMode = settings.uiMode || this._uiMode;
    this._uiTheme = settings.uiTheme || this._uiTheme;

    store.set('settings', this.get());
  }
}

const settings = new Settings();

export default settings;
