// Copyright 2017-2021 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

export type Seeder = () => number;

export interface ColorGen {
  (alpha?: number): string;
}
