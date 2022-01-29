[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange?style=flat-square)](https://polkadot.js.org)
![license](https://img.shields.io/badge/License-Apache%202.0-blue?logo=apache&style=flat-square)
[![npm](https://img.shields.io/npm/v/@polkadot/react-identicon?logo=npm&style=flat-square)](https://www.npmjs.com/package/@polkadot/react-identicon)
[![beta](https://img.shields.io/npm/v/@polkadot/react-identicon/beta?label=beta&logo=npm&style=flat-square)](https://www.npmjs.com/package/@polkadot/react-identicon)
[![maintainability](https://img.shields.io/codeclimate/maintainability-percentage/polkadot-js/ui?logo=code-climate&style=flat-square)](https://codeclimate.com/github/polkadot-js/ui)
[![coverage](https://img.shields.io/codeclimate/coverage/polkadot-js/ui?logo=code-climate&style=flat-square)](https://codeclimate.com/github/polkadot-js/ui)

# @polkadot/ui

Basic browser and framework agnostic UI components for creating apps using the polkadot{.js} libraries

## overview

The following UI components are currently available -

- [react-identicon](packages/react-identicon/) React identity icon generator with address as input
- [reactnative-identicon](packages/reactnative-identicon/) React Native identity icon generator with address as input
- [vue-identicon](packages/vue-identicon/) Vue identity icon generator with address as input
- [react-qr](packages/react-qr/) QR code generator/reader for [uos](https://github.com/maciejhirsz/uos) (Substrate/Polkadot only)

Additionally some shared libraries, that is not dependent on any framework -

- [ui-assets](packages/ui-assets/) Static assets, images and others, shared accross projects
- [ui-keyring](packages/ui-keyring/) A browser-specific wrapper around the base [@polkadot/util-keyring](https://github.com/polkadot-js/util/) library
- [ui-settings](packages/ui-settings/) A browser local storage wrapper for app settings & configuration
- [ui-shared](packages/ui-shared) Shared logic that is used accross UI components, e.g. for icon generation

## examples

In addition to the above packages, there are examples available for intergation  of `ui-keyring`, `ui-settings` & the relevant `*-identicon` package. These are

- [example-react](packages/example-react) - start with `yarn example:react` and view on `http://localhost:8080`
- [example-vue](packages/example-vue) - start with `yarn example:vue` and view on `http://localhost:8080`
