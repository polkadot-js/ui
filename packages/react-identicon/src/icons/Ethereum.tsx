// Copyright 2017-2022 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Props } from '../types';

import makeBlockie from 'ethereum-blockies-base64';
import React, { useMemo } from 'react';
import styled from 'styled-components';

function Identicon ({ address, className = '', style }: Props): React.ReactElement<Props> {
  const imgSrc = useMemo(
    () => makeBlockie(address),
    [address]
  );

  return (
    <img
      className={className}
      src={imgSrc}
      style={style}
    />
  );
}

export const Ethereum = React.memo(styled(Identicon)(({ size }: Props) => `
  display: block;
  height: ${size}px;
  width: ${size}px;
`));
