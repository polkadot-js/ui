/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const getWorkspaces = require('get-yarn-workspaces');
const workspaces = getWorkspaces(__dirname).filter(item => {
  return path.normalize(item) !== path.normalize(__dirname);
});
let workspacesBuildDirs = workspaces.map(workspace => path.join(workspace, 'build/'));
workspacesBuildDirs = workspacesBuildDirs.filter(item => item !== path.join(__dirname, '../reactnative-identicon/build/'));

module.exports = {

  // watch other packages as well as root node_modules
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    ...workspacesBuildDirs
  ],

  // remap node packages to react-native packages
  resolver: {
    extraNodeModules: {
      crypto: require.resolve('react-native-crypto'),
      stream: require.resolve('stream-http'),
      vm: require.resolve('vm-browserify'),
      process: require.resolve('process'),
      os: require.resolve('os-browserify')
    }
  },

  transformer: {
    getTransformOptions: () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  }
};
