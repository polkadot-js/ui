// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

type ChainDef = string[];

const chains: Record<string, ChainDef> = {
  kusama: [
    '0x3fd7b9eb6a00376e5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf', // Kusama CC1
    '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636', // Kusama CC2
    '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe' // Kusama CC3
  ]
};

export default chains;
