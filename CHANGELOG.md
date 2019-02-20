# 0.27.1

Replace Charred Cherry with Dried Danta, remove old decimals and token name configs

# 0.26.1

Add keyring support for sd25519 (schnorrkel)

# 0.25.1

Add `@polkadot/{keyring,util,util-crypto,types}` as peerDependencies for the various packages as used. Thie should allow less churn on this repo with version bumps, although it does add some extra effort onto the users of these libraries. (But the assumption is that they use these anyway)
