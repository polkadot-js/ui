// Copyright 2017-2021 @polkadot/example-reactnative authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable no-global-assign */

import 'fast-text-encoding';

import AsyncStorage from '@react-native-community/async-storage';

class Storage {
  constructor () {
    this.dataMap = new Map();
    this.loading = true;
  }

  init = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const data = await AsyncStorage.multiGet(keys);

    data.forEach(this.saveItem.bind(this));
    this.loading = false;

    return [...data];
  }

  getItem = (key) => {
    return this.dataMap.get(key);
  }

  setItem = (key, value) => {
    this.dataMap.set(key, value);

    return AsyncStorage.setItem(key, value);
  }

  remove = (key) => {
    this.dataMap.delete(key);

    return AsyncStorage.removeItem(key);
  }

  saveItem = (item) => {
    this.dataMap.set(item[0], item[1]);
  }
}

// Set global process variable expected by some classes.
global.process = require('process');
global.navigator.userAgent = '';
window = { location: { host: '' } };
global.localStorage = new Storage();
