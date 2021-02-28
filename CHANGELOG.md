# CHANGELOG

## 0.70.1 Feb 28, 2021

Changes:

- Use `detectPackage` with `packageInfo` & check for monorepo dependencies
- Remove `mkdirp` resolution to ensure local views work with Webpack
- Updated to `@polkadot/{hw-ledger, keyring, util, util-crypto}` 5.9.2


## 0.69.1 Feb 7, 2021

Changes:

- Updated to `@polkadot/{hw-ledger, keyring, util, util-crypto}` 5.6.1


## 0.68.1 Feb 1, 2021

Changes:

- Updated to `@polkadot/{hw-ledger, keyring, util, util-crypto}` 5.5.1
- Added `ed25519-ledger` option for `hdLedger` from `@polkadot/util-crypto`


## 0.67.1 Jan 24, 2021

Contributed:

- Store hardware accounts (Thanks to https://github.com/Tbaut)

Changes:

- Updated to `@polkadot/{hw-ledger, keyring, util, util-crypto}` 5.4.4
- Cleanup dependencies to only have common (no api repo)


## 0.66.1 Jan 17, 2021

- **Important** Users of the `@polkadot/ledger` package should now import `@polkadot/hw-wallet`

Contributed:

- Dock Ledger integration (Thanks to https://github.com/lovesh, moved to common)
- Polymesh Ledger integration (https://github.com/adamdossa, moved to common)

Changes:

- Remove `@polkadot/ledger` package (Moved to common as `@polkadot/hw-ledger`)
- Keyring options genesis allows a `string` | `Hash` (e.g. `api.genesisHash`) input
- Updated to `@polkadot/{hw-ledger, keyring, util, util-crypto}` 5.3.1
- Removed `@polkadot/types` dependencies (only interface needed, supplied)


## 0.65.1 Dec 28, 2020

Changes:

- Updated to `@polkadot/{keyring, util, util-crypto}` 5.2.2
- Updated to `@polkadot/api` 3.2.2


## 0.64.1 Dec 21, 2020

Changes:

- Don't re-export types from index (esm build compat)
- Correctly mark `detectPackage` as a side-effect
- Updated to `@polkadot/{keyring, util, util-crypto}` 5.1.1
- Updated to `@polkadot/api` 3.1.1


## 0.63.1 Dec 14, 2020

Contributed:

- Export types for icons (Thanks to https://github.com/Tbaut)

Changes:

- Bump to latest WebUSB from Ledger
- Swap Ledger functionality to dedicated packages
- Build esm packages alongside cjs
- Convert all imports/exports to named
- Pass pair type through to all creation actions
- Allow for transparent failures on account injection
- Swap to using `import type { ... }`
- Updated to `@polkadot/{keyring, util, util-crypto}` 5.0.1
- Updated to `@polkadot/api` 3.0.1


## 0.62.1 Nov 9, 2020

Changes:

- Update address checks to allow for Ethereum-compatible chains
- Add Ethereum icon type (uses blockies underneath)
- Updated to `@polkadot/{keyring, util, util-crypto}` 4.0.1
- Updated to `@polkadot/api` 2.6.1


## 0.61.1 Oct 19, 2020

Contributed:

- Add Darwinia ss58 (Thanks to https://github.com/WoeOm)
- Swap network identifiers to `@polkadot/networks` (Thanks to https://github.com/Tbaut)

Changes:

- Explicit deps versions (with peerDependencies as provided)
- Bump to `@polkadot/api` 2.3.1
- Bump to `@polkadot/util` 3.6.1


## 0.60.1 Oct 7, 2020

Changes:

- Allow for custom IdentityIcon overrides
- Move docs to docs repo
- Bump to `@polkadot/api` 2.1.1


## 0.59.1 Sep 28, 2020

Changes:

- Expose createFromJson on keyring to compliment createFromUri
- Support Account/address indexes for Ledger
- Bump to `@polkadot/api` 2.0.1
- Bump to `@polkadot/util` 3.5.1


## 0.58.1 Aug 31, 2020

Contributed:

- Add Subsocial to ss58 defaults (Thanks to https://github.com/F3Joule)

Changes:

- Support QR scanning where name contains ":"
- Support for Moonbeam ETH-compatible crypto types


## 0.57.3 Jul 27, 2020

Changes:

- Support for JSON v3 kdf-enabled format
- Adjust password validity checks (alongside v3)
- Bump to `@polkadot/api` 1.26.1
- Bump to `@polkadot/util` 3.0.1


## 0.56.1 Jul 20, 2020

Contributed:

- Add Kulupu to ss58 options (https://github.com/carumusan)

Changes:

- Remove CC1 naming for Polkadot (as applicable)
- Flatten React IdentityIcon (no extra wrapping)
- Bump to `@polkadot/api` 1.25.1
- Bump to `@polkadot/util` 2.18.1


## 0.55.1 Jul 2, 2020

Contributed:

- Better error-handling for invalid FileStore accounts (Thanks to https://github.com/yuhui1208)

Changes:

- Adjust react-qr `Scan*` making `onScan` callbacks required
- Rework the react-qr display to use functional components
- Bump to `@polkadot/api` 1.21.1
- Bump to `@polkadot/util` 2.15.1


## 0.54.1 Jun 16, 2020

Contributed:

- Add genesisHash to signer payload (Thanks to https://github.com/hanwencheng)
- Allow QR scanning to parse mini keys (Thanks to https://github.com/hanwencheng)

Changes:

- Adjust ordering of available crypto types (native first)
- Rename Substrate prefix entry (42) to "generic"
- Bump to `@polkadot/api` 1.19.1
- Bump to `@polkadot/util` 2.14.1


## 0.53.1 May 14, 2020

Contributed:

- Add Ecdsa to the supported crypto types options (Thanks to https://github.com/akru)
- Add Egedware to network prefix settings (Thanks to https://github.com/jnaviask)

Changes:

- Add `addMultisig` into keyring (with all options to re-create address)
- Bump to `@polkadot/api` 1.14.1
- Bump to `@polkadot/util` 2.10.1


## 0.52.1 Apr 15, 2020

- **Breaking change** (TypeScript only) The `*.d.ts` files now contain TypeScript 3.8 features, `#private`, which is not usable in older versions

Contributed:

- Allow for the encoding of chain-settings via QR (Thanks to https://github.com/hanwencheng)
- Enhance checks for ws url in settings (Thanks to https://github.com/kwingram25)

Changes:

- Start of `isAlternative` implementations for identicons to react, react-native & vue (currently only Polkadot sixPoint)
- Bump to `@polkadot/api` 1.10 & `@polkadot/util` 2.8
- Convert `private <field>` to `#<field>`
- Remove internal/duplicated ui-keyring ss58Format mapping, rather set it directly on wrapped keyring


## 0.51.1 Feb 18, 2020

Changes:

- Support formatting of addresses via createPair base on latest upstream keyring
- Bump to `@polkadot/api` 1.3.1
- Bump to `@polkadot/util` 2.4.1


## 0.50.1 Feb 16, 2020

Changes:

- ui-settings does not expose pre-configured endpoints by default (only local dev node)
- Bump to `@polkadot/api` 1.2.1
- Bump to `@polkadot/util` 2.3.1


## 0.49.1 Feb 06, 2020

Changes:

- Add resolver for jest requires (tests from src)


## 0.48.1 Jan 30, 2020

Changes:

- Add Westend & Kulupulu, remove Alexander
- Update Edgeware wss uri
- Change display name for Kusama
- Mirror QR scanning display


## 0.47.1 Nov 29, 2019

Changes:

- Support for Kusama CC3 (network endpoints)
- Genesis hashes for accounts can now lookup against a range (so CC2-locked accounts will show on CC3)
- Language options have been removed from settings (these will be app-specific)
- QR display loops now have a timeout decay (slower as it loops)


## 0.46.1 Oct 25, 2019

- Add an example for using React Native (thanks to https://github.com/cameronfr)

Changes:

- Add base documentation for getting started
- Add camera access to the setting structure


## 0.45.1 Sep 26, 2019

- **Breaking change** The subscription subject for `ui-keyring` does not return a pre-formatted React object anymore. This is SUI-specific, so had limited use and therefore should not even be split into a `react-keyring` component. Rather users of this functionality should construct their own options for their framework.

Changes:

- Support for Kusama CC2
- Experimental support for signing via Ledger HW
- Add specific settings for the icon type to `ui-settings`
- Add Edgeware live RPC endpoints to `ui-settings`
- Adjust `react-identicon` highlights (validators)
- Add `example-{react, vue}` highlighting simple use with `ui-keyring`, `ui-settings` & `*-identicon` components


## 0.44.1 Sep 12, 2019

Changes:

- Update `@polkadot/util` to 1.4.1
- Upddate to Babel 7.6


## 0.43.1 Sep 10, 2019

Changes:

- Add W3F Node for Kusama
- Add extended info to ui-settings, i.e. info on each option
- Adjust logos in ui-assets (incl. updated Substrate logo)
- ui-keyring now check the genesisHash on  all load operations (if supplied)
- react-qr is now operational and integrated in the polkadot-js/extension and apps repos


## 0.42.1 Aug 24, 2019

- **Breaking Change** The `@polkadot/ui-identicon` package has been renamed to `@polkadot/react-identicon`
- **Breaking change** For `@polkadot/ui-keyring` the stores are now not exported from the index, imports should be changed to either `ui-keyring/stores` or explicitly to `ui-keyring/stores/Extension`

Changes:

- Support for Kusama with endpoints and settings
- The `@polkadot/reactnative-identicon` package has been added (only Polkadot support atm)
- The `@polkadot/react-qr` package has been added to display/scan QR codes
- `@polkadot/ui-settings` has UNfrastructure added as an RPC provider for Alex
- `@polkadot/ui-settings` exposes a dropdown with address prefix options


## 0.41.1 Jun 14, 2019

Changes:

- Adapt interface to cater for new `@polkadot/keyring`, where pairs -
  - expose `address` getter instead of `address()`
  - expose `publicKey` getter instead of `publicKey()`
  - expose `meta` getter instead of `getMeta()`
- The functions `getAccount` `getAddress` `getContract` in `@polkadot/ui-keyring` now return either undefined or an object with the above properties.
- Add support for the saving of contracts to the keyring
- Use the injection of stores, providing an additional `ExtensionStore` for saving to Chrome/FF extensions (in addition to the standard localStorage saving)
- Remove previously deprecated kering functions, `createAccount`, `createAccountExternal` & `createAccountMnemonic`
- Remove (previously deprecated), `@polkadot/ui-util`, all these functions have been incorporated in `@polkadot/util`


## 0.40.1 Jun 04, 2019

Changes:

- Address encoding changes, use encoded address instead of supplied


## 0.39.1 May 22, 2019

Changes:

- Allow for externally injected accounts
- @polkadot/util 0.91.1 & @polkadot/api 0.79.1


## 0.38.1 May 08, 2019

Changes:

- Sorting of keyring addresses
- Fix JSON import defaults (previously detection was not working for old accounts)
- Display icons using publicKey (not the encoded address)
- Ensure only a single instance of ui-keyring is loaded
- Adjust short address option display (keyring options)


## 0.37.1 Apr 03, 2019

Changes:

- Add Emberic Elm (Dried Danta discontinued)
- @polkadot/util & @polkadot/api 0.75.1


## 0.36.1 Mar 29, 2019

Changes:

- Small fixes, latest @polkadot/wasm-* packages


## 0.35.1  Mar 29, 2019

Changes:

- @polkadot/util & @polkadot/api 0.75.1


## 0.34.1 Mar 28, 2019

Changes:

- Fix for blake2 in Polkadot identicon generation


## 0.33.1 Mar 23, 2019

Changes:

- Rename createUri and createExternal to addExternal and addUri
- Rename addAccountPair to addPair
- Add additional createFromUri function to create pair, but not add it
- Latest api, util & util-crypto (this with WASM and JS fallbacks)


## 0.32.1 Mar 20, 2019

Changes:

- Add createUri to create an account from a path uri
- Add createExternal as an alias for createAccountExternal
- Deprecate createAccount, createAccountExternal and createAccountMnemonic
- Fix styled-component dependencies when used in a non-@polkadot project


## 0.31.1 Mar 18, 2019

Changes:

- Allow for latest keyring with sr25519 derived support
- When using dev mode, it assumes the substrate node has sr25519 derived keys


## 0.30.1 Mar 14, 2019

Changes:

- Swap to publishing -beta.x on merge (non-breaking testing)


## 0.29.1 Mar 13, 2019

Changes:

Swap to using a dev HDKD keyring (only available on latest substrate master, only affects nodes running with --dev, normal operation unaffected)


## 0.28.1 Feb 21, 2019

Changes:

Default Substrate icon is Jdenticon


## 0.27.1 Feb 20, 2019

Changes:

Replace Charred Cherry with Dried Danta, remove old decimals and token name configs


## 0.26.1 Feb 14, 2019

Changes:

Add keyring support for sd25519 (schnorrkel)


## 0.25.1 Jan 09, 2019

Changes:

Add `@polkadot/{keyring,util,util-crypto,types}` as peerDependencies for the various packages as used. Thie should allow less churn on this repo with version bumps, although it does add some extra effort onto the users of these libraries. (But the assumption is that they use these anyway)


## 0.24.1 Dec 19, 2018

## 0.23.1 Dec 14, 2018

## 0.22.1 Dec 05, 2018

Changes:

- Split from apps
