// Copyright 2017-2020 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Props } from '../types';

import React from 'react';
import jdenticon from 'jdenticon';

function Jdenticon ({ className = '', publicKey, size, style }: Props): React.ReactElement<Props> {
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

export default React.memo(Jdenticon);
