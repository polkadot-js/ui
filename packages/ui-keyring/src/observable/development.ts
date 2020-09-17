// Copyright 2017-2020 @polkadot/ui-keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(false);

export default {
  isDevelopment: (): boolean =>
    subject.getValue(),
  set: (isDevelopment: boolean): void => {
    subject.next(isDevelopment);
  },
  subject
};
