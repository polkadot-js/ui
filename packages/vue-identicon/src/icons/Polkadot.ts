// Copyright 2017-2020 @polkadot/vue-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Vue from 'vue';
import { polkadotIcon } from '@polkadot/ui-shared';

interface Data {
  svgHtml: string;
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
  created: function (): void {
    this.createSvgHtml();
  },
  data: function (): Data {
    return {
      // eslint-disable-next-line quotes
      svgHtml: `<svg viewBox="0 0 64 64" />`
    };
  },
  methods: {
    createSvgHtml: function (): void {
      const circles = polkadotIcon(this.address, { isAlternative: (this as This).isAlternative || false }).map(({ cx, cy, fill, r }) =>
        `<circle cx=${cx} cy=${cy} fill="${fill}" r=${r} />`
      ).join('');

      this.svgHtml = `<svg height=${this.size as number} viewBox='0 0 64 64' width=${this.size as number}>${circles}</svg>`;
    }
  },
  props: ['address', 'isAlternative', 'size'],
  // eslint-disable-next-line quotes
  template: `<div v-html="svgHtml" />`
});
