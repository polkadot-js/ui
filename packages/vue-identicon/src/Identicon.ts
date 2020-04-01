// Copyright 2017-2020 @polkadot/vue-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Prefix } from '@polkadot/util-crypto/address/types';

import Vue from 'vue';
import { isHex, isU8a, u8aToHex } from '@polkadot/util';
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';

import { Beachball, Empty, Jdenticon, Polkadot } from './icons';

interface Account {
  address: string;
  publicKey: string;
}

interface Data {
  address: string;
  iconSize: number;
  publicKey: string;
  type: 'beachball' | 'empty' | 'jdenticon' | 'polkadot' | 'substrate';
}

const DEFAULT_SIZE = 64;

function encodeAccount (value: string | Uint8Array, prefix?: Prefix): Account {
  try {
    const address = isU8a(value) || isHex(value)
      ? encodeAddress(value as string, prefix)
      : value;
    const publicKey = u8aToHex(decodeAddress(address, false, prefix));

    return { address, publicKey };
  } catch (error) {
    return { address: '', publicKey: '0x' };
  }
}

/**
 * @name Identicon
 * @description The main Identicon component, taking a number of properties
 * @example
 * ```html
 * <Identicon :size="128" :theme="polkadot" :value="..." />
 * ```
 */
export const Identicon = Vue.extend({
  components: {
    Beachball,
    Empty,
    Jdenticon,
    Polkadot
  },
  created: function (): void {
    this.createData();
  },
  data: function (): Data {
    return {
      address: '',
      iconSize: DEFAULT_SIZE,
      publicKey: '0x',
      type: 'empty'
    };
  },
  methods: {
    createData: function (): void {
      this.iconSize = this.size || DEFAULT_SIZE;
      this.type = this.theme;

      this.recodeAddress();
    },
    recodeAddress: function (): void {
      const { address, publicKey } = encodeAccount(this.value);

      this.address = address;
      this.publicKey = publicKey;
    }
  },
  props: ['prefix', 'size', 'theme', 'value'],
  // FIXME These nested divs are not correct, would like a different way
  // here so we don't create a div wrapped for the div wrapper of the icon
  template: `
    <div v-if="type === 'empty' || address === ''">
      <Empty :key="address" :size="iconSize" />
    </div>
    <div v-else-if="type === 'beachball'">
      <Beachball :key="address" :address="address" :size="iconSize" />
    </div>
    <div v-else-if="type === 'polkadot'">
      <Polkadot :key="address"  :address="address" :size="iconSize" />
    </div>
    <div v-else>
      <Jdenticon :key="address" :publicKey="publicKey" :size="iconSize" />
    </div>
  `,
  watch: {
    value: function (): void {
      this.recodeAddress();
    }
  }
});
