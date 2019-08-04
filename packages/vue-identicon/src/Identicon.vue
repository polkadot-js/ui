<!--
  Copyright 2017-2019 @polkadot/vue-identicon authors & contributors
  This software may be modified and distributed under the terms
  of the Apache-2.0 license. See the LICENSE file for details.
-->

<!--
  I really think these nested divs are not correct, would like a different
  way here so we don't create a div wrapped for the div wrapper of the icon
-->
<template>
  <div v-if="type === 'empty' || address === ''">
    <Empty :size="iconSize" />
  </div>
  <div v-else-if="type === 'polkadot'">
    <Polkadot
      :address="address"
      :size="iconSize"
    />
  </div>
  <div v-else>
    <Jdenticon
      :publicKey="publicKey"
      :size="iconSize"
    />
  </div>
</template>

<script>
import { isHex, isU8a, isUndefined, u8aToHex } from '@polkadot/util';
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';

import Empty from './icons/Empty.vue';
import Jdenticon from './icons/Jdenticon.vue';
import Polkadot from './icons/Polkadot.vue';

// TODO Add Beachball, the creation logic of that should move to ui-shared

const DEFAULT_SIZE = 64;

export default {
  props: ['prefix', 'size', 'theme', 'value'],
  components: {
    Empty,
    Jdenticon,
    Polkadot
  },
  data: function() {
    return {
      address: '',
      iconSize: DEFAULT_SIZE,
      publicKey: '0x',
      type: 'empty'
    }
  },
  created: function () {
    this.createData();
  },
  methods: {
    createData: function () {
      this.iconSize = this.size || DEFAULT_SIZE;

      try {
        this.address = isU8a(this.value) || isHex(this.value)
          ? encodeAddress(this.value, isUndefined(this.prefix) ? 42 : this.prefix)
          : (this.value || '');
        this.publicKey = u8aToHex(decodeAddress(this.address, false, this.prefix));
        this.type = this.theme;
      } catch (error) {
        this.type = '';
      }
    }
  }
}
</script>
