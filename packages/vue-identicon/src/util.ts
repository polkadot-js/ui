// Copyright 2017-2023 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { version } from 'vue';

export function adaptVNodeAttrs (data: Record<string, any>) {
  if (version.startsWith('3.')) {
    return data;
  } else {
    return {
      attrs: data
    };
  }
}
