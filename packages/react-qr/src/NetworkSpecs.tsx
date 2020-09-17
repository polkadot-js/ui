// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { NetworkSpecsStruct } from '@polkadot/ui-settings';

import React, { useMemo } from 'react';
import QrDisplay from './Display';

import { encodeString } from './util';

interface Props {
  className?: string;
  networkSpecs: NetworkSpecsStruct;
  size?: string | number;
  style?: React.CSSProperties;
}

function DisplayNetworkSpecs ({ className, networkSpecs, size, style }: Props): React.ReactElement<Props> | null {
  const data = useMemo(
    () => encodeString(JSON.stringify(networkSpecs)),
    [networkSpecs]
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

export default React.memo(DisplayNetworkSpecs);
