// Copyright 2017-2020 @polkadot/vue-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Vue from 'vue';
import jdenticon from 'jdenticon';

interface Data {
  svgHtml: string;
}

/**
 * @name Jdenticon
 * @description The substrate default via Jdenticon
 */
export const Jdenticon = Vue.extend({
  // eslint-disable-next-line quotes
  template: `<div v-html="svgHtml" />`,
  props: ['publicKey', 'size'],
  data: function (): Data {
    return {
      // eslint-disable-next-line quotes
      svgHtml: `<svg viewBox="0 0 64 64" />`
    };
  },
  created: function (): void {
    this.createSvgHtml();
  },
  methods: {
    createSvgHtml: function (): void {
      this.svgHtml = jdenticon.toSvg(this.publicKey.substr(2), this.size);
    }
  }
});
