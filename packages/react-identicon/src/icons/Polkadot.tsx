// Copyright 2018-2022 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Copyright 2018 Paritytech via paritytech/oo7/polkadot-identicon

// This has been converted from the original version that can be found at
//
// https://github.com/paritytech/oo7/blob/251ba2b7c45503b68eab4320c270b5afa9bccb60/packages/polkadot-identicon/src/index.jsx
//
// Here we have done the following to convert the component -
//   - Converted the code to TypeScript
//   - Removed the oo7 dependencies (since not initialised properly, it makes calls to wrong endpoints)
//   - Remove encoding functionality, these are catered for in the base
//   - Remove copy functionality (this is catered from in the base components)
//   - Split calculations into relevant functions
//   - Move constants to file-level
//   - Overall it is now just a static component, expecting an address as an input value

import type { Circle } from '@polkadot/ui-shared/icons/types';
import type { Props } from '../types';

import React, { useMemo } from 'react';

import { polkadotIcon } from '@polkadot/ui-shared';

function renderCircle ({ cx, cy, fill, r }: Circle, key: number): React.ReactNode {
  return (
    <circle
      cx={cx}
      cy={cy}
      fill={fill}
      key={key}
      r={r}
    />
  );
}

function Identicon ({ address, className = '', isAlternative = false, size, style }: Props): React.ReactElement<Props> {
  const circles = useMemo(
    () => polkadotIcon(address, { isAlternative }),
    [address, isAlternative]
  );

  return (
    <svg
      className={className}
      height={size}
      id={address}
      name={address}
      style={style}
      viewBox='0 0 64 64'
      width={size}
    >
      {circles.map(renderCircle)}
    </svg>
  );
}

export const Polkadot = React.memo(Identicon);
