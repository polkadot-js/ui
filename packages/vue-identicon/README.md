# @polkadot/vue-identicon

A generic identity icon that can render icons based on an address.

## Usage Examples

To install the component, do `yarn add @polkadot/vue-identicon` and then use it with `import Identicon from '@polkadot/vu-identicon';`

Inside a Vue component, you can now render any account with the associated icon, with associated props -

- `value` - the address you wish to display
- `size` (optional, defaults to `64`) - the size in pixels
- `theme` (optional, defaults to `substrate`) - the theme to use, one of `polkadot`, `substrate` (equivalent to `jdenticon`) of `empty` (displaying nothing)
