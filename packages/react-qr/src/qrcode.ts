// Copyright 2017-2019 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import qrcode from 'qrcode-generator';

// HACK The default function take string -> number[], the Uint8array is compatible
// with that signature and the use thereof
// @ts-ignore
qrcode.stringToBytes = (data: Uint8Array): Uint8Array =>
  data;

export default qrcode;
