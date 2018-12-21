# @polkadot/ui-keyring

A wrapper extending the base @polkadot/keyring interface for usage in the browser:
Key management of user accounts including generation and retrieval of keyring pairs from a variety of input combinations.

## Usage Example
All module methods are exposed through a single default export.
```
import keyring from @polkadot/ui-keyring

render () {
  // encode publicKey to ss58 address
  const address = keyring.encodeAddress(publicKey);

  // get keyring pair from ss58 address
  const pair = keyring.getPair(address);

  // ask questions about that particular keyring pair
  const isLocked = pair.isLocked();
  const meta = pair.getMeta();

  // save account from pair
  keyring.saveAccount(pair, password);
}
```

## Users
Keyring is core to many polkadot/substrate apps.

* [polkadot-js/apps](https://github.com/polkadot-js/apps)
* [polkadot-js/api](https://github.com/polkadot-js/api)
* [paritytech/substrate-light-ui](https://github.com/paritytech/substrate-light-ui)
