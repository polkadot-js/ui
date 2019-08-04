// Copyright 2017-2019 @polkadot/vue-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Vue from 'vue';
import generateIcon from '@polkadot/ui-shared/polkadotIcon';

interface Data {
  svgHtml: string;
}

const viewBox = '0 0 64 64';

export default Vue.extend({
  template: '<div v-html="svgHtml" />',
  props: ['address', 'size'],
  data: function (): Data {
    return {
      svgHtml: `<svg viewBox='${viewBox}' />`
    };
  },
  created: function (): void {
    this.createSvgHtml();
  },
  methods: {
    createSvgHtml: function (): void {
      const circles = generateIcon(this.address).map(({ cx, cy, fill, r }): string =>
        `<circle cx=${cx} cy=${cy} fill="${fill}" r=${r} />`
      ).join('');

      this.svgHtml = `<svg height=${this.size} viewBox='${viewBox}' width=${this.size}>${circles}</svg>`;
    }
  }
});
