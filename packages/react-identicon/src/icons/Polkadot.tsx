// Copyright 2018 Paritytech via paritytech/oo7/polkadot-identicon
// Copyright 2018 @polkadot/react-identicon authors & contributors
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

import { Props as BaseProps } from '../types';

import React from 'react';
import generateIcon, { Circle } from '@polkadot/ui-shared/polkadotIcon';

interface Props extends BaseProps {
  sixPoint?: boolean;
}

export default class Identicon extends React.PureComponent<Props> {
  public render (): React.ReactNode {
    const { address, className, sixPoint, size, style } = this.props;

    return (
      <div
        className={`container ${className}`}
        style={style}
      >
        <svg
          id={address}
          name={address}
          width={size}
          height={size}
          viewBox='0 0 64 64'
        >
          {generateIcon(address, sixPoint).map(this.renderCircle)}
        </svg>
      </div>
    );
  }

  private renderCircle = ({ cx, cy, r, fill }: Circle, key: number): React.ReactNode => {
    return (
      <circle
        key={key}
        cx={cx}
        cy={cy}
        r={r}
        fill={fill}
      />
    );
  }
}
