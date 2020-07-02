// Copyright 2018-2020 @polkadot/reactnative-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Circle as CircleType } from '@polkadot/ui-shared/icons/types';
import { Props } from '../types';

import React from 'react';
import { View } from 'react-native';
import Svg, { Circle as SvgCircle } from 'react-native-svg';
import { polkadotIcon } from '@polkadot/ui-shared';

function renderCircle ({ cx, cy, fill, r }: CircleType, key: number): React.ReactNode {
  return (
    <SvgCircle
      cx={cx}
      cy={cy}
      fill={fill}
      key={key}
      r={r}
    />
  );
}

export default function Identicon ({ address, isAlternative = false, size }: Props): React.ReactElement<Props> {
  return (
    <View>
      <Svg
        height={size}
        id={address}
        viewBox='0 0 64 64'
        width={size}
      >
        {polkadotIcon(address, { isAlternative }).map(renderCircle)}
      </Svg>
    </View>
  );
}
