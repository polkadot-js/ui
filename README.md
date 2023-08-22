# @polkadot/ui

Basic browser and framework agnostic UI components for creating apps using the polkadot{.js} libraries

## overview

The following UI components are currently available -

- [react-identicon](packages/react-identicon/) React identity icon generator with address as input
- [reactnative-identicon](packages/reactnative-identicon/) React Native identity icon generator with address as input
- [vue-identicon](packages/vue-identicon/) Vue identity icon generator with address as input
- [react-qr](packages/react-qr/) QR code generator/reader for [uos](https://github.com/maciejhirsz/uos) (Substrate/Polkadot only)

Additionally some shared libraries, that are not dependent on any framework -

- [ui-keyring](packages/ui-keyring/) A browser-specific wrapper around the base [@polkadot/keyring](https://github.com/polkadot-js/common/) library
- [ui-settings](packages/ui-settings/) A browser local storage wrapper for app settings & configuration
- [ui-shared](packages/ui-shared) Shared logic that is used across UI components, e.g. for icon generation
