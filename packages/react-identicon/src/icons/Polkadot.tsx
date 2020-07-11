// Copyright 2018 Paritytech via paritytech/oo7/polkadot-identicon
// Copyright 2018-2020 @polkadot/react-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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

import { Circle } from '@polkadot/ui-shared/icons/types';
import { Props } from '../types';

import React from 'react';
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
      {polkadotIcon(address, { isAlternative }).map(renderCircle)}
    </svg>
  );
}

export default React.memo(Identicon);
