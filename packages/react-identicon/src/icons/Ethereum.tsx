// Copyright 2017-2023 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Props } from '../types.js';

import makeBlockie from 'ethereum-blockies-base64';
import React, { useMemo } from 'react';
import styledComponents, { StyledInterface } from 'styled-components';

// In styled-components v6, there is a named export which can be used
// directly, i.e. "import { styled } from ..." with no more magic. Until
// such time the cjs vs esm import here is problematic, so we hack around
// the various shapes below
const styled = (
  (styledComponents as unknown as { styled: StyledInterface }).styled ||
  (styledComponents as unknown as { default: StyledInterface }).default ||
  styledComponents as unknown as StyledInterface
);

interface ImgProps {
  size: number;
}

function Identicon ({ address, className = '', size, style }: Props): React.ReactElement<Props> {
  const imgSrc = useMemo(
    () => makeBlockie(address),
    [address]
  );

  return (
    <StyledImg
      className={className}
      size={size}
      src={imgSrc}
      style={style}
    />
  );
}

const StyledImg = styled.img(({ size }: ImgProps) => `
  display: block;
  height: ${size}px;
  width: ${size}px;
`);

export const Ethereum = React.memo(Identicon);
