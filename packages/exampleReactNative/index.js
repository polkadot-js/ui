// Copyright 2017-2020 @polkadot/example-react authors & contributors
// SPDX-License-Identifier: Apache-2.0

import './nodeGlobalsShim.js';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
