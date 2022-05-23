// Copyright 2017-2022 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as jdenticon from 'jdenticon';
import Vue, { VNode } from 'vue';

type propsType = {
  publicKey: string,
  size: number
}

/**
 * @name Jdenticon
 * @description The substrate default via Jdenticon
 */
export const Jdenticon = Vue.extend({
  props: ['publicKey', 'size'],
  // eslint-disable-next-line quotes
  render (h): VNode {
    const { publicKey, size } = this.$props as propsType;
    const cmp = Vue.component('CJdenticon', { template: jdenticon.toSvg(publicKey.substring(2), size) });

    return h(cmp);
  }
});
