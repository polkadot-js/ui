// Copyright 2017-2022 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Prefix } from '@polkadot/util-crypto/address/types';

import Vue, { VNode } from 'vue';

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
  isAlternativeIcon: boolean;
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
      isAlternativeIcon: false,
      publicKey: '0x',
      type: 'empty'
    };
  },
  methods: {
    createData: function (): void {
      this.iconSize = this.size as number || DEFAULT_SIZE;
      this.type = this.theme as 'empty';
      this.isAlternativeIcon = this.isAlternative as boolean || false;
      this.recodeAddress();
    },
    recodeAddress: function (): void {
      const { address, publicKey } = encodeAccount(this.value as string);

      this.address = address;
      this.publicKey = publicKey;
    }
  },
  props: ['prefix', 'isAlternative', 'size', 'theme', 'value'],
  render (h): VNode {
    const { address, iconSize, isAlternativeIcon, publicKey, type } = this.$data as Data;

    if (type === 'empty') {
      return h('Empty', { attrs: { key: address, size: iconSize } }, []);
    } else if (type === 'jdenticon') {
      return h('Jdenticon', { attrs: { key: address, publicKey, size: iconSize } }, []);
    } else {
      // handles: beachball and polkadot
      // TODO: substrate
      const cmp = type.charAt(0).toUpperCase() + type.slice(1);

      return h(cmp, { attrs: { address, isAlternative: isAlternativeIcon, key: address, size: iconSize } }, []);
    }
  },
  watch: {
    value: function (): void {
      this.recodeAddress();
    }
  }
});
