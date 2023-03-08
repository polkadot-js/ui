// Copyright 2017-2023 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback, useMemo } from 'react';
import Reader from 'react-qr-reader';
import styledComponents, { StyledInterface } from 'styled-components';

import { createImgSize } from './util.js';

// In styled-components v6, there is a named export which can be used
// directly, i.e. "import { styled } from ..." with no more magic. Until
// such time the cjs vs esm import here is problematic, so we hack around
// the various shapes below
const styled = (
  (styledComponents as unknown as { styled: StyledInterface }).styled ||
  (styledComponents as unknown as { default: StyledInterface }).default ||
  styledComponents as unknown as StyledInterface
);

interface Props {
  className?: string;
  delay?: number;
  onError?: (error: Error) => void;
  onScan: (data: string) => void;
  size?: string | number;
  style?: React.CSSProperties;
}

const DEFAULT_DELAY = 150;

const DEFAULT_ERROR = (error: Error): void => {
  console.error('@polkadot/react-qr:Scan', error.message);
};

function Scan ({ className, delay = DEFAULT_DELAY, onError = DEFAULT_ERROR, onScan, size, style }: Props): React.ReactElement<Props> {
  const containerStyle = useMemo(
    () => createImgSize(size),
    [size]
  );

  const _onError = useCallback(
    (error: Error) => onError(error),
    [onError]
  );

  const _onScan = useCallback(
    (data: string | null) => data && onScan(data),
    [onScan]
  );

  return (
    <StyledDiv
      className={className}
      style={containerStyle}
    >
      <Reader
        className='ui--qr-Scan'
        delay={delay}
        onError={_onError}
        onScan={_onScan}
        style={style}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  .ui--qr-Scan {
    display: inline-block;
    height: 100%;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    width: 100%;

    video {
      margin: 0;
    }
  }
`;

export const QrScan = React.memo(Scan);
