# @polkadot/vue-identicon

A generic identity icon that can render icons based on an address.

## Usage Examples

To install the component, do `yarn add @polkadot/vue-identicon`

Inside a Vue component, you can now render any account with the associated icon -

```javascript
import Identicon from '@polkadot/vu-identicon/Identicon.vue';

...
  <Identicon
    :value="ss-58 address"
    :size="size in pixels, 64 default"
    :theme="theme, polkadot, substrate or jdenticon"
  />
...
```
