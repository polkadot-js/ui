// Copyright 2017-2022 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Options } from '@polkadot/ui-shared/icons/types';

import Vue, {VNode} from 'vue';

import { beachballIcon } from '@polkadot/ui-shared';

interface Data {
  html: string;
}

/**
 * @name Beachball
 * @description The Beachball identicon
 */
export const Beachball = Vue.extend({
  props: ['address', 'size', 'isAlternative'],
  // eslint-disable-next-line quotes
  render(h): VNode {
    let bb = beachballIcon(this.$props.address, {size: this.$props.size, isAlternative: this.$props.isAlternative})
    return h(Vue.component("VCBeachball", {template: bb.outerHTML}))
  }
});
