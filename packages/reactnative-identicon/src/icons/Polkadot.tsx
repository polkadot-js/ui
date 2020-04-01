// Copyright 2018 @polkadot/reactnative-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Props as BaseProps } from '../types';

import React from 'react';
import { View } from 'react-native';
import Svg, { Circle as SvgCircle } from 'react-native-svg';
import generateIcon, { Circle as CircleType } from '@polkadot/ui-shared/polkadotIcon';

interface Props extends BaseProps {
  sixPoint?: boolean;
}

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

export default function Identicon ({ address, sixPoint, size }: Props): React.ReactElement<Props> {
  return (
    <View>
      <Svg
        height={size}
        id={address}
        viewBox='0 0 64 64'
        width={size}
      >
        {generateIcon(address, sixPoint).map(renderCircle)}
      </Svg>
    </View>
  );
}
