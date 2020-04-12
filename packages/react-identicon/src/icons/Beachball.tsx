// Copyright 2017-2020 @polkadot/react-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Props } from '../types';

import React, { useCallback } from 'react';
import generate from '@polkadot/ui-shared/beachballIcon';

function Beachball ({ address, className, size, style }: Props): React.ReactElement<Props> {
  const updateElem = useCallback(
    (node: HTMLDivElement): void => {
      node && node.appendChild(
        generate(address, size)
      );
    },
    [address, size]
  );

  return (
    <div
      className={`container ${className}`}
      ref={updateElem}
      style={style}
    />
  );
}

export default React.memo(Beachball);
