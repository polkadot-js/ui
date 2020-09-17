// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useMemo } from 'react';

import { createAddressPayload } from './util';
import QrDisplay from './Display';

interface Props {
  address: string;
  genesisHash: string;
  className?: string;
  size?: string | number;
  style?: React.CSSProperties;
}

function DisplayExtrinsic ({ address, className, genesisHash, size, style }: Props): React.ReactElement<Props> | null {
  const data = useMemo(
    () => createAddressPayload(address, genesisHash),
    [address, genesisHash]
  );

  if (!data) {
    return null;
  }

  return (
    <QrDisplay
      className={className}
      size={size}
      skipEncoding
      style={style}
      value={data}
    />
  );
}

export default React.memo(DisplayExtrinsic);
