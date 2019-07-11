// Copyright 2017-2019 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Props } from '../types';

import React from 'react';

import identicon from '../beachball';

export default class Beachball extends React.PureComponent<Props> {
  public render (): React.ReactNode {
    const { className, style } = this.props;

    return (
      <div
        className={`container ${className}`}
        ref={this.appendIcon}
        style={style}
      />
    );
  }

  private appendIcon = (node: Element | null): void => {
    const { address, size } = this.props;

    if (node) {
      node.appendChild(
        identicon(address, size)
      );
    }
  }
}
