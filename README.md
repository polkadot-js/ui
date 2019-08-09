[![polkadotjs](https://img.shields.io/badge/polkadot-js-orange.svg?style=flat-square)](https://polkadot.js.org)
![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)
[![npm](https://img.shields.io/npm/v/@polkadot/ui-identicon.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/ui-identicon)
[![travisci](https://img.shields.io/travis/com/polkadot-js/ui?label=travisci&style=flat-square)](https://travis-ci.com/polkadot-js/ui)
[![circleci](https://img.shields.io/circleci/build/github/polkadot-js/ui/master?label=circleci&style=flat-square)](https://circleci.com/gh/polkadot-js/ui)
[![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/ui.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/ui)
[![coverage](https://img.shields.io/codeclimate/coverage/polkadot-js/ui.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/ui)
[![greenkeeper](https://img.shields.io/badge/greenkeeper-enabled-brightgreen.svg?style=flat-square)](https://greenkeeper.io/)

# @polkadot/ui

Basic browser and UI components for creating apps using the polkadot{.js} libraries

## overview

The following UI components are currently available -

- [react-identicon](packages/react-identicon/) React identity icon generator with address as input
- [reactnative-identicon](packages/reactnative-identicon/) React Native identity icon generator with address as input
- [vue-identicon](packages/vue-identicon/) Vue identity icon generator with address as input
- [react-qr](packages/react-qr/) QR code generator/reader for [uos](https://github.com/maciejhirsz/uos) (Substrate/Polkadot only)

Additionally some shared libraries -

- [ui-assets](packages/ui-assets/) Static assets, images and others, shared accross projects
- [ui-keyring](packages/ui-keyring/) A browser-specific wrapper around the base [@polkadot/util-keyring](https://github.com/polkadot-js/util/) library
- [ui-settings](packages/ui-settings/) A browser local storage wrapper for app settings & configuration
- [ui-shared](packages/ui-shared) Shared logic that is used accross UI components, e.g. for icon generation
