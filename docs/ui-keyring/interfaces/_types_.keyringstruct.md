

# Hierarchy

**KeyringStruct**

# Implemented by

* [Keyring](../classes/_keyring_.keyring.md)

# Properties

<a id="accounts"></a>

##  accounts

**● accounts**: *[AddressSubject](../modules/_observable_types_.md#addresssubject)*

*Defined in [types.ts:35](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L35)*

___
<a id="addaccountpair"></a>

##  addAccountPair

**● addAccountPair**: *`function`*

*Defined in [types.ts:39](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L39)*

#### Type declaration
▸(pair: *`KeyringPair`*, password: *`string`*): `KeyringPair`

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| password | `string` |

**Returns:** `KeyringPair`

___
<a id="addresses"></a>

##  addresses

**● addresses**: *[AddressSubject](../modules/_observable_types_.md#addresssubject)*

*Defined in [types.ts:36](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L36)*

___
<a id="backupaccount"></a>

##  backupAccount

**● backupAccount**: *`function`*

*Defined in [types.ts:40](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L40)*

#### Type declaration
▸(pair: *`KeyringPair`*, password: *`string`*): `KeyringPair$Json`

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| password | `string` |

**Returns:** `KeyringPair$Json`

___
<a id="createaccount"></a>

##  createAccount

**● createAccount**: *`function`*

*Defined in [types.ts:41](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L41)*

#### Type declaration
▸(seed: *`Uint8Array`*, password?: *`undefined` \| `string`*, meta?: *`KeyringPair$Meta`*): `KeyringPair`

**Parameters:**

| Name | Type |
| ------ | ------ |
| seed | `Uint8Array` |
| `Optional` password | `undefined` \| `string` |
| `Optional` meta | `KeyringPair$Meta` |

**Returns:** `KeyringPair`

___
<a id="createaccountexternal"></a>

##  createAccountExternal

**● createAccountExternal**: *`function`*

*Defined in [types.ts:42](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L42)*

#### Type declaration
▸(publicKey: *`Uint8Array`*, meta?: *`KeyringPair$Meta`*): `KeyringPair`

**Parameters:**

| Name | Type |
| ------ | ------ |
| publicKey | `Uint8Array` |
| `Optional` meta | `KeyringPair$Meta` |

**Returns:** `KeyringPair`

___
<a id="createaccountmnemonic"></a>

##  createAccountMnemonic

**● createAccountMnemonic**: *`function`*

*Defined in [types.ts:43](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L43)*

#### Type declaration
▸(seed: *`string`*, password?: *`undefined` \| `string`*, meta?: *`KeyringPair$Meta`*): `KeyringPair`

**Parameters:**

| Name | Type |
| ------ | ------ |
| seed | `string` |
| `Optional` password | `undefined` \| `string` |
| `Optional` meta | `KeyringPair$Meta` |

**Returns:** `KeyringPair`

___
<a id="decodeaddress"></a>

##  decodeAddress

**● decodeAddress**: *`function`*

*Defined in [types.ts:44](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L44)*

#### Type declaration
▸(key: *`string` \| `Uint8Array`*): `Uint8Array`

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="encodeaddress"></a>

##  encodeAddress

**● encodeAddress**: *`function`*

*Defined in [types.ts:45](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L45)*

#### Type declaration
▸(key: *`string` \| `Uint8Array`*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `Uint8Array` |

**Returns:** `string`

___
<a id="encryptaccount"></a>

##  encryptAccount

**● encryptAccount**: *`function`*

*Defined in [types.ts:46](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L46)*

#### Type declaration
▸(pair: *`KeyringPair`*, password: *`string`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| password | `string` |

**Returns:** `void`

___
<a id="forgetaccount"></a>

##  forgetAccount

**● forgetAccount**: *`function`*

*Defined in [types.ts:47](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L47)*

#### Type declaration
▸(address: *`string`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `void`

___
<a id="forgetaddress"></a>

##  forgetAddress

**● forgetAddress**: *`function`*

*Defined in [types.ts:48](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L48)*

#### Type declaration
▸(address: *`string`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** `void`

___
<a id="getaccount"></a>

##  getAccount

**● getAccount**: *`function`*

*Defined in [types.ts:49](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L49)*

#### Type declaration
▸(address: *`string` \| `Uint8Array`*): [KeyringAddress](../modules/_types_.md#keyringaddress)

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** [KeyringAddress](../modules/_types_.md#keyringaddress)

___
<a id="getaccounts"></a>

##  getAccounts

**● getAccounts**: *`function`*

*Defined in [types.ts:50](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L50)*

#### Type declaration
▸(): `Array`<[KeyringAddress](../modules/_types_.md#keyringaddress)>

**Returns:** `Array`<[KeyringAddress](../modules/_types_.md#keyringaddress)>

___
<a id="getaddress"></a>

##  getAddress

**● getAddress**: *`function`*

*Defined in [types.ts:51](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L51)*

#### Type declaration
▸(address: *`string` \| `Uint8Array`*): [KeyringAddress](../modules/_types_.md#keyringaddress)

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** [KeyringAddress](../modules/_types_.md#keyringaddress)

___
<a id="getaddresses"></a>

##  getAddresses

**● getAddresses**: *`function`*

*Defined in [types.ts:52](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L52)*

#### Type declaration
▸(): `Array`<[KeyringAddress](../modules/_types_.md#keyringaddress)>

**Returns:** `Array`<[KeyringAddress](../modules/_types_.md#keyringaddress)>

___
<a id="getpair"></a>

##  getPair

**● getPair**: *`function`*

*Defined in [types.ts:53](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L53)*

#### Type declaration
▸(address: *`string` \| `Uint8Array`*): `KeyringPair`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** `KeyringPair`

___
<a id="getpairs"></a>

##  getPairs

**● getPairs**: *`function`*

*Defined in [types.ts:54](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L54)*

#### Type declaration
▸(): `Array`<`KeyringPair`>

**Returns:** `Array`<`KeyringPair`>

___
<a id="isavailable"></a>

##  isAvailable

**● isAvailable**: *`function`*

*Defined in [types.ts:55](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L55)*

#### Type declaration
▸(address: *`string` \| `Uint8Array`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` \| `Uint8Array` |

**Returns:** `boolean`

___
<a id="ispassvalid"></a>

##  isPassValid

**● isPassValid**: *`function`*

*Defined in [types.ts:56](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L56)*

#### Type declaration
▸(password: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| password | `string` |

**Returns:** `boolean`

___
<a id="keyring"></a>

##  keyring

**● keyring**: *`BaseKeyringInstance` \| `undefined`*

*Defined in [types.ts:37](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L37)*

___
<a id="loadall"></a>

##  loadAll

**● loadAll**: *`function`*

*Defined in [types.ts:57](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L57)*

#### Type declaration
▸(options: *[KeyringOptions](../modules/_types_.md#keyringoptions)*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [KeyringOptions](../modules/_types_.md#keyringoptions) |

**Returns:** `void`

___
<a id="restoreaccount"></a>

##  restoreAccount

**● restoreAccount**: *`function`*

*Defined in [types.ts:58](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L58)*

#### Type declaration
▸(json: *`KeyringPair$Json`*, password: *`string`*): `KeyringPair`

**Parameters:**

| Name | Type |
| ------ | ------ |
| json | `KeyringPair$Json` |
| password | `string` |

**Returns:** `KeyringPair`

___
<a id="saveaccount"></a>

##  saveAccount

**● saveAccount**: *`function`*

*Defined in [types.ts:59](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L59)*

#### Type declaration
▸(pair: *`KeyringPair`*, password?: *`undefined` \| `string`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| `Optional` password | `undefined` \| `string` |

**Returns:** `void`

___
<a id="saveaccountmeta"></a>

##  saveAccountMeta

**● saveAccountMeta**: *`function`*

*Defined in [types.ts:60](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L60)*

#### Type declaration
▸(pair: *`KeyringPair`*, meta: *`KeyringPair$Meta`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| pair | `KeyringPair` |
| meta | `KeyringPair$Meta` |

**Returns:** `void`

___
<a id="saveaddress"></a>

##  saveAddress

**● saveAddress**: *`function`*

*Defined in [types.ts:61](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L61)*

#### Type declaration
▸(address: *`string`*, meta: *`KeyringPair$Meta`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |
| meta | `KeyringPair$Meta` |

**Returns:** `void`

___
<a id="saverecent"></a>

##  saveRecent

**● saveRecent**: *`function`*

*Defined in [types.ts:62](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L62)*

#### Type declaration
▸(address: *`string`*): [SingleAddress](../modules/_observable_types_.md#singleaddress)

**Parameters:**

| Name | Type |
| ------ | ------ |
| address | `string` |

**Returns:** [SingleAddress](../modules/_observable_types_.md#singleaddress)

___
<a id="setdevmode"></a>

##  setDevMode

**● setDevMode**: *`function`*

*Defined in [types.ts:63](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-keyring/src/types.ts#L63)*

#### Type declaration
▸(isDevelopment: *`boolean`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| isDevelopment | `boolean` |

**Returns:** `void`

___

