// Copyright 2017-2023 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { VNode } from 'vue';

import { defineComponent, h } from 'vue';

import { beachballIcon } from '@polkadot/ui-shared';

interface PropsType {
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
  render (): VNode {
    const { address, isAlternative, size } = this.$props as PropsType;

    return h({
      template: beachballIcon(address, {
        isAlternative,
        size
      }).outerHTML
    });
  }
});
