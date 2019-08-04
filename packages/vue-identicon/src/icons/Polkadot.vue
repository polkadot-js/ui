<!--
  Copyright 2017-2019 @polkadot/vue-identicon authors & contributors
  This software may be modified and distributed under the terms
  of the Apache-2.0 license. See the LICENSE file for details.
-->

<template>
  <div v-html="svgHtml"></div>
</template>

<script>
import generateIcon from '@polkadot/ui-shared/polkadotIcon';

const viewBox = '0 0 64 64';
const defaultHtml = `<svg viewBox='${viewBox}' />`;

export default {
  props: ['address', 'size'],
  data: function() {
    return {
      svgHtml: defaultHtml
    }
  },
  created: function () {
    this.createSvgHtml();
  },
  methods: {
    createSvgHtml: function () {
      const circles = generateIcon(this.address).map(({ cx, cy, fill, r }) =>
        `<circle cx=${cx} cy=${cy} fill="${fill}" r=${r} />`
      ).join('');

      this.svgHtml = `<svg height=${this.size} viewBox='${viewBox}' width=${this.size}>${circles}</svg>`
    },
  }
}
</script>
