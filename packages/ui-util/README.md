# @polkadot/ui-util

Various utility and formatting functions

## formatBalance

```js
const props = await api.rpc.system.properties();

formatBalance.setDefaults({
  decimals: props.tokenDecimals,
  unit: props.tokenSymbol
});

formatBalance('12345'); // 12.345z DOT
```
