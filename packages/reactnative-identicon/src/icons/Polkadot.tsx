// Copyright 2018-2022 @polkadot/reactnative-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Circle as CircleType } from '@polkadot/ui-shared/icons/types';
import type { Props } from '../types';

import React, { useMemo } from 'react';
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
  const circles = useMemo(
    () => polkadotIcon(address, { isAlternative }),
    [address, isAlternative]
  );

  return (
    <View>
      <Svg
        height={size}
        id={address}
        viewBox='0 0 64 64'
        width={size}
      >
        {circles.map(renderCircle)}
      </Svg>
    </View>
  );
}
