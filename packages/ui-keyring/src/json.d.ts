// Copyright 2017-2025 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Be able to import json in TS
// https://stackoverflow.com/questions/49996456/importing-json-file-in-typescript
declare module '*.json' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any;

  export default value;
}
