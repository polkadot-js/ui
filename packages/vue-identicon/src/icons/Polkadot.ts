// Copyright 2017-2023 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { defineComponent, VNode } from 'vue';

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
export const Polkadot = defineComponent({
  props: ['address', 'isAlternative', 'size'],
  render (h): VNode {
    const { address, isAlternative, size } = this.$props as propsType;
    const circles = polkadotIcon(address, { isAlternative }).map(({ cx, cy, fill, r }) =>
      h('circle', { attrs: { cx, cy, fill, r } }, [])
    );

    return h('svg', {
      attrs: {
        height: size,
        viewBox: '0 0 64 64',
        width: size
      }
    }, circles);
  }
});
