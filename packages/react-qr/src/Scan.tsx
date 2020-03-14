// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BaseProps } from './types';

import React, { useCallback } from 'react';
import Reader from 'react-qr-reader';
import styled from 'styled-components';

import { createImgSize } from './util';

interface Props extends BaseProps {
  delay?: number;
  onError?: (error: Error) => void;
  onScan?: (data: string) => void;
}

const DEFAULT_DELAY = 150;
const DEFAULT_ERROR = (error: Error): void => {
  console.error('@polkadot/react-qr:Scan', error.message);
};

function Scan ({ className, delay = DEFAULT_DELAY, onError = DEFAULT_ERROR, onScan, size, style }: Props): React.ReactElement<Props> {
  const _onError = useCallback(
    (error: Error): void => onError(error),
    [onError]
  );

  const _onScan = useCallback(
    (data: string | null): void => {
      if (!data || !onScan) {
        return;
      }

      onScan(data);
    },
    [onScan]
  );

  return (
    <div
      className={className}
      style={createImgSize(size)}
    >
      <Reader
        className='ui--qr-Scan'
        delay={delay}
        onError={_onError}
        onScan={_onScan}
        style={style}
      />
    </div>
  );
}

export default React.memo(styled(Scan)`
  .ui--qr-Scan {
    display: inline-block;
    height: 100%;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    width: 100%;

    video {
      margin: 0;
    }
  }
`);
