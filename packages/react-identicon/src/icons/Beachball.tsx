// Copyright 2017-2024 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Props } from '../types.js';

import React, { useCallback } from 'react';

import { beachballIcon } from '@polkadot/ui-shared';

function Identicon ({ address, className = '', size, style = {} }: Props): React.ReactElement<Props> {
  const updateElem = useCallback(
    (node: HTMLDivElement): void => {
      node?.appendChild(
        beachballIcon(address, { isAlternative: false, size })
      );
    },
    [address, size]
  );

  return (
    <div
      className={className}
      ref={updateElem}
      style={style}
    />
  );
}

export const Beachball = React.memo(Identicon);
