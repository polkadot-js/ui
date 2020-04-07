// Copyright 2017-2020 @polkadot/ui authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const config = require('@polkadot/dev/config/jest');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/react-(identicon|qr)(.*)$': '<rootDir>/packages/react-$1/src/$2',
    '@polkadot/reactnative-(identicon)(.*)$': '<rootDir>/packages/reactnative-$1/src/$2',
    '@polkadot/ui-(assets|keyring|settings|shared)(.*)$': '<rootDir>/packages/ui-$1/src/$2',
    '\\.(css|less)$': 'empty/object',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'empty/object'
  },
  resolver: './jest.resolver.js'
});
