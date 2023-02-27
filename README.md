# @polkadot/ui

Basic browser and framework agnostic UI components for creating apps using the polkadot{.js} libraries

## overview

The following UI components are currently available -

- [react-identicon](packages/react-identicon/) React identity icon generator with address as input
- [reactnative-identicon](packages/reactnative-identicon/) React Native identity icon generator with address as input
- [vue-identicon](packages/vue-identicon/) Vue identity icon generator with address as input
- [react-qr](packages/react-qr/) QR code generator/reader for [uos](https://github.com/maciejhirsz/uos) (Substrate/Polkadot only)

Additionally some shared libraries, that are not dependent on any framework -

- [ui-keyring](packages/ui-keyring/) A browser-specific wrapper around the base [@polkadot/util-keyring](https://github.com/polkadot-js/util/) library
- [ui-settings](packages/ui-settings/) A browser local storage wrapper for app settings & configuration
- [ui-shared](packages/ui-shared) Shared logic that is used across UI components, e.g. for icon generation

## examples

In addition to the above packages, there are examples available for integration of `ui-keyring`, `ui-settings` & the relevant `*-identicon` package. These are

- [example-react](packages/example-react) - start with `yarn example:react` and view on `http://localhost:8080`
- [example-vue](packages/example-vue) - start with `yarn example:vue` and view on `http://localhost:8080`
