// Copyright 2017-2020 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Props } from '../types';

import makeBlockie from 'ethereum-blockies-base64';
import React, { useMemo } from 'react';
import styled from 'styled-components';

function Ethereum ({ address, className = '', style }: Props): React.ReactElement<Props> {
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

export default React.memo(styled(Ethereum)(({ size }: Props) => `
  display: block;
  height: ${size}px;
  width: ${size}px;
`));
