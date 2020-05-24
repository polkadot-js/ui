// Copyright 2017-2020 @polkadot/react-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Props } from '../types';

import React from 'react';

function Empty ({ className = '', size, style }: Props): React.ReactElement<Props> {
  return (
    <div
      className={`container ${className}`}
      style={style}
    >
      <svg
        height={size}
        viewBox='0 0 64 64'
        width={size}
      />
    </div>
  );
}

export default React.memo(Empty);
