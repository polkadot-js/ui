// Copyright 2017-2022 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Vue from 'vue';

/**
 * @name Empty
 * @description An empty identicon
 */
export const Empty = Vue.extend({
  props: ['size'],
  template: `
    <svg :height="size" :width="size" viewBox="0 0 64 64">
      <circle cx="50%" cy="50%" fill="#eee" r="50%" />
    </svg>
  `
});
