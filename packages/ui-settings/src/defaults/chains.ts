// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

type ChainDef = string[];

const chains: Record<string, ChainDef> = {
  kusama: [
    '0x3fd7b9eb6a00376e5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf', // Kusama CC1
    '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636', // Kusama CC2
    '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe' // Kusama CC3
  ],
  polkadot: [
    '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3' // Polkadot CC1
  ]
};

export default chains;
