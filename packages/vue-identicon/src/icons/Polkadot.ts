// Copyright 2017-2022 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Vue, { VNode } from 'vue';

import { polkadotIcon } from '@polkadot/ui-shared';

type propsType = {
  address: string;
  isAlternative: boolean;
  size: number;
}

/**
 * @name Polkadot
 * @description The Polkadot default identicon
 */
export const Polkadot = Vue.extend({
  props: ['address', 'isAlternative', 'size'],
  // eslint-disable-next-line quotes
  render (h): VNode {
    const { address, isAlternative, size } = this.$props as propsType;
    const circles = polkadotIcon(address, {
      isAlternative: isAlternative || false
    }).map(({ cx,
      cy,
      fill,
      r }) => {
      return h('circle', { attrs: { cx, cy, fill, r } }, []);
    }
    );

    return h('svg', { attrs: { height: size, viewBox: '0 0 64 64', width: size } }, circles);
  }
});
