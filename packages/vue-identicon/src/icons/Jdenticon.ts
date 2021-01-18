// Copyright 2017-2021 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as jdenticon from 'jdenticon';
import Vue from 'vue';

interface Data {
  svgHtml: string;
}

/**
 * @name Jdenticon
 * @description The substrate default via Jdenticon
 */
export const Jdenticon = Vue.extend({
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
      this.svgHtml = jdenticon.toSvg((this.publicKey as string).substr(2), this.size);
    }
  },
  props: ['publicKey', 'size'],
  // eslint-disable-next-line quotes
  template: `<div v-html="svgHtml" />`
});
