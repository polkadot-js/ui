// Copyright 2017-2024 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { VNode } from 'vue';

import * as jdenticon from 'jdenticon';
import { defineComponent, h } from 'vue';

interface PropsType {
  publicKey: string,
  size: number
}

/**
 * @name Jdenticon
 * @description The substrate default via Jdenticon
 */
export const Jdenticon = defineComponent({
  props: ['publicKey', 'size'],
  render (): VNode {
    const { publicKey, size } = this.$props as PropsType;

    return h({
      template: jdenticon.toSvg(publicKey.substring(2), size)
    });
  }
});
