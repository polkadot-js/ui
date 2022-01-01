// Copyright 2017-2022 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Options } from '@polkadot/ui-shared/icons/types';

import Vue from 'vue';

import { beachballIcon } from '@polkadot/ui-shared';

interface Data {
  html: string;
}

/**
 * @name Beachball
 * @description The Beachball identicon
 */
export const Beachball = Vue.extend({
  created: function (): void {
    this.createHtml();
  },
  data: function (): Data {
    return {
      // eslint-disable-next-line quotes
      html: `<div />`
    };
  },
  methods: {
    createHtml: function (): void {
      this.html = beachballIcon(this.address as string, this.size as Options).outerHTML;
    }
  },
  props: ['address', 'size'],
  // eslint-disable-next-line quotes
  template: `<div v-html="html" />`
});
