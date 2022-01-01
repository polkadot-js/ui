// Copyright 2017-2022 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0

// matches https://polkadot.js.org & https://*.polkadot.io
export const isPolkadot = typeof window !== 'undefined' && window.location.host.includes('polkadot');
