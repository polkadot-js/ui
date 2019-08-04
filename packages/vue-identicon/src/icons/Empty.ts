// Copyright 2017-2019 @polkadot/vue-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Vue from 'vue';

const template = `
  <svg
    :height="size"
    :width="size"
    viewBox='0 0 64 64'
  >
    <circle
      cx='32'
      cy='32'
      r='32'
      fill='#eee'
    />
  </svg>
`;

export default Vue.extend({
  template,
  props: ['publicKey', 'size']
});
