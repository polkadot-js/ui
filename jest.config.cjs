// Copyright 2017-2021 @polkadot/ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

const config = require('@polkadot/dev/config/jest.cjs');

module.exports = {
  ...config,
  moduleNameMapper: {
    '@polkadot/react-(identicon|qr)(.*)$': '<rootDir>/packages/react-$1/src/$2',
    '@polkadot/reactnative-(identicon)(.*)$': '<rootDir>/packages/reactnative-$1/src/$2',
    '@polkadot/ui-(assets|keyring|settings|shared)(.*)$': '<rootDir>/packages/ui-$1/src/$2',
    '\\.(css|less)$': 'empty/object',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'empty/object'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/packages/example-react/build',
    '<rootDir>/packages/example-vue/build',
    '<rootDir>/packages/exampleReactNative/build',
    '<rootDir>/packages/react-identicon/build',
    '<rootDir>/packages/react-qr/build',
    '<rootDir>/packages/reactnative-identicon/build',
    '<rootDir>/packages/ui-assets/build',
    '<rootDir>/packages/ui-keyring/build',
    '<rootDir>/packages/ui-settings/build',
    '<rootDir>/packages/ui-shared/build',
    '<rootDir>/packages/vue-identicon/build'
  ],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/(?!@polkadot|@babel/runtime/helpers/esm/)']
};
