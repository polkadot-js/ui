// Copyright 2017-2020 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { NetworkSpecsStruct } from '@polkadot/ui-settings';
import { BaseProps } from './types';

import React, { useEffect, useState } from 'react';

import {encodeString} from './util';
import QrDisplay from './Display';

interface Props extends BaseProps {
	networkSpecs: NetworkSpecsStruct
}

function DisplayNetworkSpecs ({ className, networkSpecs, size, style }: Props): React.ReactElement<Props> | null {
	const [data, setData] = useState<Uint8Array | null>(null);

	useEffect((): void => {
		setData(encodeString(JSON.stringify(networkSpecs)));
	}, [networkSpecs]);

	if (!data) {
		return null;
	}

	return (
		<QrDisplay
			className={className}
			skipEncoding={true}
			size={size}
			style={style}
			value={data}
		/>
	);
}

export default React.memo(DisplayNetworkSpecs);
