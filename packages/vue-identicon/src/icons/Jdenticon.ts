// Copyright 2017-2022 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as jdenticon from 'jdenticon';
import Vue, {VNode} from 'vue';

/**
 * @name Jdenticon
 * @description The substrate default via Jdenticon
 */
export const Jdenticon = Vue.extend({
  props: ['publicKey', 'size'],
  // eslint-disable-next-line quotes
  render(h): VNode {
    let cmp = Vue.component('CJdenticon', {template: jdenticon.toSvg(this.publicKey.substr(2), this.size)})
    return h(cmp)
  }
});
