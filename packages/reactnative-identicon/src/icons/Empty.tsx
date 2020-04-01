// Copyright 2017-2020 @polkadot/reactnative-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Props } from '../types';

import React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

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
