// Copyright 2017-2022 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Vue, { VNode } from 'vue';

import Identicon from './index';

interface Data {
  address: string;
  size: number;
}

/**
 * @name Demo
 * @description Demo component
 */
const Demo = Vue.extend({
  components: {
    Identicon
  },
  data: function (): Data {
    return {
      address: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
      size: 128
    };
  },
  name: 'Demo',
  template: `
    <div id="demo">
      <Identicon :size="size" :theme="'polkadot'" :value="address" />
      <Identicon :size="size" :theme="'substrate'" :value="address" />
      <Identicon :size="size" :theme="'beachball'" :value="address" />
      <Identicon :size="size" :theme="'empty'" />
    </div>
  `
});

new Vue({
  render: (h): VNode => h(Demo)
}).$mount('#demo');
