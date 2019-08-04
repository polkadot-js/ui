<!--
  Copyright 2017-2019 @polkadot/vue-identicon authors & contributors
  This software may be modified and distributed under the terms
  of the Apache-2.0 license. See the LICENSE file for details.
-->

<template>
  <div v-html="svgHtml"></div>
</template>

<script>
import jdenticon from 'jdenticon';

const defaultHtml = `<svg viewBox='0 0 64 64' />`;

export default {
  props: ['publicKey', 'size'],
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
      this.svgHtml = jdenticon.toSvg(this.publicKey.substr(2), this.size);
    },
  }
}
</script>
