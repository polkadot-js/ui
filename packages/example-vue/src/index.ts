// Copyright 2017-2022 @polkadot/example-vue authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Prefix } from '@polkadot/util-crypto/address/types';

import Vue, { VNode } from 'vue';

import { keyring } from '@polkadot/ui-keyring';
import { settings } from '@polkadot/ui-settings';
import { cryptoWaitReady, mnemonicGenerate } from '@polkadot/util-crypto';
import Identicon from '@polkadot/vue-identicon';

interface Account {
  address: string;
  phrase: string;
}

interface Data extends Account {
  ss58Format: Prefix;
  ss58Options: { text: string; value: string | number }[];
}

const ss58Options = settings.availablePrefixes.filter((_, index): boolean => index !== 0);

function generateAccount (ss58Format: Prefix = 42): Account {
  const phrase = mnemonicGenerate(12);
  const { address } = keyring.createFromUri(phrase);

  return {
    address: keyring.encodeAddress(address, ss58Format),
    phrase
  };
}

const Example = Vue.extend({
  components: {
    Identicon
  },
  data: function (): Data {
    return {
      ...generateAccount(),
      ss58Format: 42,
      ss58Options
    };
  },
  methods: {
    onClickNew: function (): void {
      const { address, phrase } = generateAccount(this.ss58Format);

      this.address = address;
      this.phrase = phrase;
    }
  },
  name: 'Example',
  template: `
    <div id="example">
      <section>
        <button v-on:click="onClickNew">another random address</button>
      </section>
      <section>
        <label>phrase</label>
        <textarea :cols="40" :rows="4" readonly v-model="phrase" />
      </section>
      <section>
        <label>icons</label>
        <Identicon class='icon' :value="address" />
        <Identicon class='icon' :value="address" :theme="'polkadot'" />
        <Identicon class='icon' :value="address" :theme="'beachball'" />
      </section>
      <section>
        <label>address</label>
        {{ address }}
      </section>
      <section>
        <label>ss58 format</label>
        <select v-model="ss58Format">
          <option v-for="option in ss58Options" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
      </section>
    </div>
  `,
  watch: {
    ss58Format: function (): void {
      this.address = keyring.encodeAddress(this.address, this.ss58Format);
    }
  }
});

cryptoWaitReady()
  .then((): void => {
    keyring.loadAll({ ss58Format: 42, type: 'sr25519' });

    new Vue({
      render: (h): VNode => h(Example)
    }).$mount('#example');
  })
  .catch(console.error);
