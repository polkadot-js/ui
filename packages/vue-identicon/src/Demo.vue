<!--
  Copyright 2017-2019 @polkadot/vue-identicon authors & contributors
  This software may be modified and distributed under the terms
  of the Apache-2.0 license. See the LICENSE file for details.
-->

<template>
  <div id="demo">
    <Identicon
      :value="address"
      :size="size"
      :theme="'polkadot'"
    />
    <Identicon
      :value="address"
      :size="size"
      :theme="'substrate'"
    />
    <Identicon
      :value="address"
      :size="size"
      :theme="'empty'"
    />
  </div>
</template>

<script>
import Identicon from './Identicon.vue';

export default {
  name: 'demo',
  data: function() {
    return {
      address: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
      size: 128
    }
  },
  components: {
    Identicon
  }
}
</script>
