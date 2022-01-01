// Copyright 2017-2022 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Props } from '../types';

import React from 'react';

function Identicon ({ className = '', size, style }: Props): React.ReactElement<Props> {
  return (
    <svg
      className={className}
      height={size}
      style={style}
      viewBox='0 0 64 64'
      width={size}
    />
  );
}

export const Empty = React.memo(Identicon);
