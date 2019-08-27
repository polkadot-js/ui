// Copyright 2017-2019 @polkadot/vue-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Vue from 'vue';
import generate from '@polkadot/ui-shared/beachballIcon';

interface Data {
  html: string;
}

/**
 * @name Beachball
 * @description The Beachball identicon
 */
export const Beachball = Vue.extend({
  // eslint-disable-next-line quotes
  template: `<div v-html="html" />`,
  props: ['address', 'size'],
  data: function (): Data {
    return {
      // eslint-disable-next-line quotes
      html: `<div />`
    };
  },
  created: function (): void {
    this.createHtml();
  },
  methods: {
    createHtml: function (): void {
      this.html = generate(this.address, this.size).outerHTML;
    }
  }
});
