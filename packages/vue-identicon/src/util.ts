// Copyright 2017-2023 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { version } from 'vue';

const isV3 = version.startsWith('3.');

/**
 * @internal
 *
 * Adjust attributes to be usable in both Vue 2 and Vue 3 components.
 */
export function adaptVNodeAttrs (data: Record<string, unknown>): Record<string, unknown> {
  return isV3
    ? data
    : { attrs: data };
}
