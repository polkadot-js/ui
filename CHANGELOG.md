# 0.32.1

- Add createUri to create an account from a path uri
- Add createExternal as an alias for createAccountExternal
- Deprecate createAccount, createAccountExternal and createAccountMnemonic

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
