// Copyright 2017-2020 @polkadot/vue-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Vue from 'vue';
import generateIcon from '@polkadot/ui-shared/polkadotIcon';

interface Data {
  svgHtml: string;
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
      const circles = generateIcon(this.address, { isSixPoint: this.isAlternative || false }).map(({ cx, cy, fill, r }) =>
        `<circle cx=${cx} cy=${cy} fill="${fill}" r=${r} />`
      ).join('');

      this.svgHtml = `<svg height=${this.size} viewBox='0 0 64 64' width=${this.size}>${circles}</svg>`;
    }
  },
  props: ['address', 'isAlternative', 'size'],
  // eslint-disable-next-line quotes
  template: `<div v-html="svgHtml" />`
});
