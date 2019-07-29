// Copyright 2017-2019 @polkadot/react-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export type Seeder = () => number;

export interface ColorGen {
  (alpha?: number): string;
}
