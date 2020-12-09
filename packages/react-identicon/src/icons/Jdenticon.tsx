// Copyright 2017-2020 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Props } from '../types';

import jdenticon from 'jdenticon';
import React from 'react';

function Identicon ({ className = '', publicKey, size, style }: Props): React.ReactElement<Props> {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: jdenticon.toSvg(publicKey.substr(2), size)
      }}
      style={style}
    />
  );
}

export const Jdenticon = React.memo(Identicon);
