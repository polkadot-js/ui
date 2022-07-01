// Copyright 2017-2022 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Vue, { VNode } from 'vue';

import { beachballIcon } from '@polkadot/ui-shared';

type propsType = {
  address: string;
  size: number;
  isAlternative: boolean;
}

/**
 * @name Beachball
 * @description The Beachball identicon
 */
export const Beachball = Vue.extend({
  props: ['address', 'size', 'isAlternative'],
  // eslint-disable-next-line quotes
  render (h): VNode {
    const { address, isAlternative, size } = this.$props as propsType;
    const bb = beachballIcon(address, { isAlternative, size });

    return h(Vue.component('VCBeachball', { template: bb.outerHTML }));
  }
});
