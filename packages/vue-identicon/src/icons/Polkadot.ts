// Copyright 2017-2022 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Vue, {VNode} from 'vue';

import { polkadotIcon } from '@polkadot/ui-shared';

interface Data {
  circles: string;
}

interface This {
  address: string;
  isAlternative?: boolean;
}

/**
 * @name Polkadot
 * @description The Polkadot default identicon
 */
export const Polkadot = Vue.extend({
  props: ['address', 'isAlternative', 'size'],
  // eslint-disable-next-line quotes
  render(h, context): VNode {
    var {address, isAlternative, size} = this.$props
    const circles = polkadotIcon(address, {
      isAlternative: isAlternative || false
    }).map( ({
      cx,
      cy,
      fill,
      r
    } ) => {
      return h('circle', {attrs: {cx:cx, cy:cy, fill:fill, r:r}}, []) }
    )
    return h('svg', {attrs: {width:size, height:size, viewBox: "0 0 64 64"}}, circles)
  }
});
