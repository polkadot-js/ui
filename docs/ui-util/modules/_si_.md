

# Type aliases

<a id="sidef"></a>

##  SiDef

**Ƭ SiDef**: *`object`*

*Defined in [si.ts:5](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-util/src/si.ts#L5)*

#### Type declaration

___

# Variables

<a id="si"></a>

## `<Const>` SI

**● SI**: *`Array`<[SiDef](_si_.md#sidef)>* =  [
  { power: -24, value: 'y', text: 'yocto' },
  { power: -21, value: 'z', text: 'zepto' },
  { power: -18, value: 'a', text: 'atto' },
  { power: -15, value: 'f', text: 'femto' },
  { power: -12, value: 'p', text: 'pico' },
  { power: -9, value: 'n', text: 'nano' },
  { power: -6, value: 'µ', text: 'micro' },
  { power: -3, value: 'm', text: 'milli' },
  { power: 0, value: '-', text: 'Unit' }, // position 8
  { power: 3, value: 'k', text: 'Kilo' },
  { power: 6, value: 'M', text: 'Mega' },
  { power: 9, value: 'G', text: 'Giga' },
  { power: 12, value: 'T', text: 'Tera' },
  { power: 15, value: 'P', text: 'Peta' },
  { power: 18, value: 'E', text: 'Exa' },
  { power: 21, value: 'Z', text: 'Zeta' },
  { power: 24, value: 'Y', text: 'Yotta' }
]

*Defined in [si.ts:13](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-util/src/si.ts#L13)*

___
<a id="si_mid"></a>

## `<Const>` SI_MID

**● SI_MID**: *`8`* = 8

*Defined in [si.ts:11](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-util/src/si.ts#L11)*

___

# Functions

<a id="calcsi"></a>

##  calcSi

▸ **calcSi**(text: *`string`*, decimals: *`number`*): [SiDef](_si_.md#sidef)

*Defined in [si.ts:33](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-util/src/si.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |
| decimals | `number` |

**Returns:** [SiDef](_si_.md#sidef)

___
<a id="findsi"></a>

##  findSi

▸ **findSi**(type: *`string`*): [SiDef](_si_.md#sidef)

*Defined in [si.ts:38](https://github.com/polkadot-js/ui/blob/0dbdc7e/packages/ui-util/src/si.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** [SiDef](_si_.md#sidef)

___

