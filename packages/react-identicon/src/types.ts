// Copyright 2018-2024 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type React from 'react';
import type { Prefix } from '@polkadot/util-crypto/address/types';

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface Props extends BaseProps {
  address: string;
  isAlternative?: boolean | undefined;
  publicKey: string;
  size: number;
}

export interface IdentityProps extends BaseProps {
  Custom?: React.ComponentType<Props>;
  isAlternative?: boolean;
  isHighlight?: boolean;
  onCopy?: (value: string) => void;
  prefix?: Prefix;
  size?: number;
  theme?: IconTheme;
  value?: string | Uint8Array | null;
}

export type IconTheme = 'beachball' | 'empty' | 'ethereum' | 'jdenticon' | 'polkadot' | 'substrate';
