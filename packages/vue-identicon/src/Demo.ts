// Copyright 2017-2019 @polkadot/vue-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Vue, { VNode } from 'vue';

import Identicon from './index';

interface Data {
  address: string;
  size: number;
}

const template = `
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
`;

const Demo = Vue.extend({
  template,
  name: 'Demo',
  data: function (): Data {
    return {
      address: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
      size: 128
    };
  },
  components: {
    Identicon
  }
});

new Vue({
  render: (h): VNode => h(Demo)
}).$mount('#demo');
