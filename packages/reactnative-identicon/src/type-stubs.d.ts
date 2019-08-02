// Copyright 2018 @polkadot/react-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// NOTE This is not clean since we miss the proper RN typings. However it does
// conflict with everything else, so... well, stick with the minimum here

declare module 'react-native' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface GestureResponderHandlers {}
  type ImageProperties = Record<string, string>;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ViewProperties {}

  export const View: React.ComponentClass;
}
