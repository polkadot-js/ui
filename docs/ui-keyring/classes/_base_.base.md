

# Hierarchy

**Base**

↳  [Keyring](_keyring_.keyring.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Base**(): [Base](_base_.base.md)

*Defined in [Base.ts:22](https://github.com/polkadot-js/ui/blob/28b991d/packages/ui-keyring/src/Base.ts#L22)*

**Returns:** [Base](_base_.base.md)

___

# Accessors

<a id="accounts"></a>

##  accounts

**get accounts**(): `object`

*Defined in [Base.ts:30](https://github.com/polkadot-js/ui/blob/28b991d/packages/ui-keyring/src/Base.ts#L30)*

**Returns:** `object`

___
<a id="addresses"></a>

##  addresses

**get addresses**(): `object`

*Defined in [Base.ts:34](https://github.com/polkadot-js/ui/blob/28b991d/packages/ui-keyring/src/Base.ts#L34)*

**Returns:** `object`

___
<a id="keyring"></a>

##  keyring

**get keyring**(): `KeyringInstance`

*Defined in [Base.ts:38](https://github.com/polkadot-js/ui/blob/28b991d/packages/ui-keyring/src/Base.ts#L38)*

**Returns:** `KeyringInstance`

___

# Methods

<a id="decodeaddress"></a>

##  decodeAddress

▸ **decodeAddress**(key: *`string` \| `Uint8Array`*): `Uint8Array`

*Defined in [Base.ts:46](https://github.com/polkadot-js/ui/blob/28b991d/packages/ui-keyring/src/Base.ts#L46)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="encodeaddress"></a>

##  encodeAddress

▸ **encodeAddress**(key: *`string` \| `Uint8Array`*): `string`

*Defined in [Base.ts:50](https://github.com/polkadot-js/ui/blob/28b991d/packages/ui-keyring/src/Base.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `Uint8Array` |

**Returns:** `string`

___
<a id="getpair"></a>

##  getPair

▸ **getPair**(address: *`string` \| `Uint8Array`*): `KeyringPair`

*Defined in [Base.ts:54](https://github.com/polkadot-js/ui/blob/28b991d/packages/ui-keyring/src/Base.ts#L54)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** `KeyringPair`

___
<a id="getpairs"></a>

##  getPairs

▸ **getPairs**(): `Array`<`KeyringPair`>

*Defined in [Base.ts:58](https://github.com/polkadot-js/ui/blob/28b991d/packages/ui-keyring/src/Base.ts#L58)*

**Returns:** `Array`<`KeyringPair`>

___
<a id="isavailable"></a>

##  isAvailable

▸ **isAvailable**(_address: *`Uint8Array` \| `string`*): `boolean`

*Defined in [Base.ts:64](https://github.com/polkadot-js/ui/blob/28b991d/packages/ui-keyring/src/Base.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| _address | `Uint8Array` \| `string` |

**Returns:** `boolean`

___
<a id="ispassvalid"></a>

##  isPassValid

▸ **isPassValid**(password: *`string`*): `boolean`

*Defined in [Base.ts:74](https://github.com/polkadot-js/ui/blob/28b991d/packages/ui-keyring/src/Base.ts#L74)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| password | `string` |

**Returns:** `boolean`

___
<a id="setaddressprefix"></a>

##  setAddressPrefix

▸ **setAddressPrefix**(prefix: *`number`*): `void`

*Defined in [Base.ts:78](https://github.com/polkadot-js/ui/blob/28b991d/packages/ui-keyring/src/Base.ts#L78)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| prefix | `number` |

**Returns:** `void`

___
<a id="setdevmode"></a>

##  setDevMode

▸ **setDevMode**(isDevelopment: *`boolean`*): `void`

*Defined in [Base.ts:82](https://github.com/polkadot-js/ui/blob/28b991d/packages/ui-keyring/src/Base.ts#L82)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| isDevelopment | `boolean` |

**Returns:** `void`

___

