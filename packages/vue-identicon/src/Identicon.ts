// Copyright 2017-2019 @polkadot/vue-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Vue from 'vue';
import { isHex, isU8a, u8aToHex } from '@polkadot/util';
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';

// TODO Add Beachball, the creation logic of that should move to ui-shared
import { Empty, Jdenticon, Polkadot } from './icons';

interface Data {
  address: string;
  iconSize: number;
  publicKey: string;
  type: 'empty' | 'jdenticon' | 'polkadot' | 'substrate';
}

const DEFAULT_SIZE = 64;

/**
 * @name Identicon
 * @description The main Identicon component, taking a number of properties
 * @example
 * ```html
 * <Identicon :size="128" :theme="polkadot" :value="..." />
 * ```
 */
export const Identicon = Vue.extend({
  // FIXME These nested divs are not correct, would like a different way
  // here so we don't create a div wrapped for the div wrapper of the icon
  template: `
    <div v-if="type === 'empty' || address === ''">
      <Empty :size="iconSize" />
    </div>
    <div v-else-if="type === 'polkadot'">
      <Polkadot :address="address" :size="iconSize" />
    </div>
    <div v-else>
      <Jdenticon :publicKey="publicKey" :size="iconSize" />
    </div>
  `,
  props: ['prefix', 'size', 'theme', 'value'],
  components: {
    Empty,
    Jdenticon,
    Polkadot
  },
  data: function (): Data {
    return {
      address: '',
      iconSize: DEFAULT_SIZE,
      publicKey: '0x',
      type: 'empty'
    };
  },
  created: function (): void {
    this.createData();
  },
  methods: {
    createData: function (): void {
      this.iconSize = this.size || DEFAULT_SIZE;

      try {
        this.address = isU8a(this.value) || isHex(this.value)
          ? encodeAddress(this.value as string, this.prefix)
          : this.value;
        this.publicKey = u8aToHex(decodeAddress(this.address, false, this.prefix));
        this.type = this.theme;
      } catch (error) {
        this.address = '';
      }
    }
  }
});
