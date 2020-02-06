# 0.49.1

- Add resolver for jest requires (tests from src)

# 0.48.1

- Add Westend & Kulupulu, remove Alexander
- Update Edgeware wss uri
- Change display name for Kusama
- Mirror QR scanning display

# 0.47.1

- Support for Kusama CC3 (network endpoints)
- Genesis hashes for accounts can now lookup against a range (so CC2-locked accounts will show on CC3)
- Language options have been removed from settings (these will be app-specific)
- QR display loops now have a timeout decay (slower as it loops)

# 0.46.1

- Add an example for using React Native (thanks to https://github.com/cameronfr)
- Add base documentation for getting started
- Add camera access to the setting structure

# 0.45.1

- Support for Kusama CC2
- **Breaking change** The subscription subject for `ui-keyring` does not return a pre-formatted React object anymore. This is SUI-specific, so had limited use and therefore should not even be split into a `react-keyring` component. Rather users of this functionality should construct their own options for their framework.
- Experimental support for signing via Ledger HW
- Add specific settings for the icon type to `ui-settings`
- Add Edgeware live RPC endpoints to `ui-settings`
- Adjust `react-identicon` highlights (validators)
- Add `example-{react, vue}` highlighting simple use with `ui-keyring`, `ui-settings` & `*-identicon` components

# 0.44.1

- Update `@polkadot/util` to 1.4.1
- Upddate to Babel 7.6

# 0.43.1

- Add W3F Node for Kusama
- Add extended info to ui-settings, i.e. info on each option
- Adjust logos in ui-assets (incl. updated Substrate logo)
- ui-keyring now check the genesisHash on  all load operations (if supplied)
- react-qr is now operational and integrated in the polkadot-js/extension and apps repos

# 0.42.1

- **Breaking Change** The `@polkadot/ui-identicon` package has been renamed to `@polkadot/react-identicon`
- **Breaking change** For `@polkadot/ui-keyring` the stores are now not exported from the index, imports should be changed to either `ui-keyring/stores` or explicitly to `ui-keyring/stores/Extension`
- Support for Kusama with endpoints and settings
- The `@polkadot/reactnative-identicon` package has been added (only Polkadot support atm)
- The `@polkadot/react-qr` package has been added to display/scan QR codes
- `@polkadot/ui-settings` has UNfrastructure added as an RPC provider for Alex
- `@polkadot/ui-settings` exposes a dropdown with address prefix options

# 0.41.1

- Adapt interface to cater for new `@polkadot/keyring`, where pairs -
  - expose `address` getter instead of `address()`
  - expose `publicKey` getter instead of `publicKey()`
  - expose `meta` getter instead of `getMeta()`
- The functions `getAccount` `getAddress` `getContract` in `@polkadot/ui-keyring` now return either undefined or an object with the above properties.
- Add support for the saving of contracts to the keyring
- Use the injection of stores, providing an additional `ExtensionStore` for saving to Chrome/FF extensions (in addition to the standard localStorage saving)
- Remove previously deprecated kering functions, `createAccount`, `createAccountExternal` & `createAccountMnemonic`
- Remove (previously deprecated), `@polkadot/ui-util`, all these functions have been incorporated in `@polkadot/util`

# 0.40.1

- Address encoding changes, use encoded address instead of supplied

# 0.39.1

- Allow for externally injected accounts
- @polkadot/util 0.91.1 & @polkadot/api 0.79.1

# 0.38.1

- Sorting of keyring addresses
- Fix JSON import defaults (previously detection was not working for old accounts)
- Display icons using publicKey (not the encoded address)
- Ensure only a single instance of ui-keyring is loaded
- Adjust short address option display (keyring options)

# 0.37.1

- Add Emberic Elm (Dried Danta discontinued)
- @polkadot/util & @polkadot/api 0.75.1

# 0.36.1

- Small fixes, latest @polkadot/wasm-* packages

# 0.35.1

- @polkadot/util & @polkadot/api 0.75.1

# 0.34.1

- Fix for blake2 in Polkadot identicon generation

# 0.33.1

- Rename createUri and createExternal to addExternal and addUri
- Rename addAccountPair to addPair
- Add additional createFromUri function to create pair, but not add it
- Latest api, util & util-crypto (this with WASM and JS fallbacks)

# 0.32.1

- Add createUri to create an account from a path uri
- Add createExternal as an alias for createAccountExternal
- Deprecate createAccount, createAccountExternal and createAccountMnemonic
- Fix styled-component dependencies when used in a non-@polkadot project

# 0.31.1

- Allow for latest keyring with sr25519 derived support
- When using dev mode, it assumes the substrate node has sr25519 derived keys

# 0.30.1

- Swap to publishing -beta.x on merge (non-breaking testing)

# 0.29.1

Swap to using a dev HDKD keyring (only available on latest substrate master, only affects nodes running with --dev, normal operation unaffected)

# 0.28.1

Default Substrate icon is Jdenticon

# 0.27.1

Replace Charred Cherry with Dried Danta, remove old decimals and token name configs

# 0.26.1

Add keyring support for sd25519 (schnorrkel)

# 0.25.1

Add `@polkadot/{keyring,util,util-crypto,types}` as peerDependencies for the various packages as used. Thie should allow less churn on this repo with version bumps, although it does add some extra effort onto the users of these libraries. (But the assumption is that they use these anyway)
