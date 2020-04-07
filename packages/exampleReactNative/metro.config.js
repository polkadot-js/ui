// Copyright 2017-2020 @polkadot/example-reactnative authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const path = require('path');
const getWorkspaces = require('get-yarn-workspaces');
const workspaces = getWorkspaces(__dirname).filter((item) =>
  path.normalize(item) !== path.normalize(__dirname)
);
let workspacesBuildDirs = workspaces.map((workspace) => path.join(workspace, 'build/'));

workspacesBuildDirs = workspacesBuildDirs.filter((item) => item !== path.join(__dirname, '../reactnative-identicon/build/'));

module.exports = {
  // remap node packages to react-native packages
  resolver: {
    extraNodeModules: {
      crypto: require.resolve('react-native-crypto'),
      os: require.resolve('os-browserify'),
      process: require.resolve('process'),
      stream: require.resolve('stream-http'),
      vm: require.resolve('vm-browserify')
    }
  },
  transformer: {
    getTransformOptions: () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  },
  // watch other packages as well as root node_modules
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    ...workspacesBuildDirs
  ]
};
