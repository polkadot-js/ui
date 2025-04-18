// Copyright 2017-2025 @polkadot/reactnative-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Props } from '../types.js';

import React from 'react';
import { View } from 'react-native';
import { Circle, Svg } from 'react-native-svg';

export default function Empty ({ size }: Props): React.ReactElement<Props> {
  return (
    <View>
      <Svg
        height={size}
        viewBox='0 0 64 64'
        width={size}
      >
        <Circle
          cx='32'
          cy='32'
          fill='#eee'
          r='32'
        />
      </Svg>
    </View>
  );
}
