// Copyright 2017-2023 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { defineComponent, VNode } from 'vue';

import { beachballIcon } from '@polkadot/ui-shared';

type PropsType = {
  address: string;
  size: number;
  isAlternative: boolean;
}

/**
 * @name Beachball
 * @description The Beachball identicon
 */
export const Beachball = defineComponent({
  props: ['address', 'size', 'isAlternative'],
  // eslint-disable-next-line quotes
  render (h): VNode {
    const { address, isAlternative, size } = this.$props as PropsType;

    return h({
      template: beachballIcon(address, {
        isAlternative,
        size
      }).outerHTML
    });
  }
});
