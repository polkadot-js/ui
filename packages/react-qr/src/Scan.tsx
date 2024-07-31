// Copyright 2017-2024 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BrowserQRCodeReader, type IScannerControls } from '@zxing/browser';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';

import { styled } from './styled.js';
import { createImgSize } from './util.js';

interface Props {
  className?: string | undefined;
  delay?: number;
  onError?: undefined | ((error: Error) => void);
  onScan: (data: string) => void;
  size?: string | number | undefined;
  style?: React.CSSProperties | undefined;
}

const DEFAULT_DELAY = 150;

const DEFAULT_ERROR = (error: Error): void => {
  console.error('@polkadot/react-qr:Scan', error.message);
};

function Scan ({ className = '', delay = DEFAULT_DELAY, onError = DEFAULT_ERROR, onScan, size, style = {} }: Props): React.ReactElement<Props> {
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsRef = useRef<IScannerControls | null>(null);

  const containerStyle = useMemo(
    () => createImgSize(size),
    [size]
  );

  const _onError = useCallback(
    (error: Error) => onError(error),
    [onError]
  );

  useEffect(() => {
    const codeReader = new BrowserQRCodeReader();

    const startScanning = async () => {
      try {
        const videoInputDevices = await BrowserQRCodeReader.listVideoInputDevices();
        const selectedDeviceId = videoInputDevices[0].deviceId;

        controlsRef.current = await codeReader.decodeFromVideoDevice(
          selectedDeviceId,
          videoRef.current ?? undefined,
          (result, error) => {
            if (result) {
              onScan(result.getText());
            }

            if (error && !(error instanceof Error)) {
              _onError(new Error(error));
            }
          }
        );
      } catch (error) {
        _onError(error instanceof Error ? error : new Error('Unknown error occurred'));
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const timeoutId = setTimeout(startScanning, delay);

    return () => {
      clearTimeout(timeoutId);

      if (controlsRef.current) {
        controlsRef.current.stop();
      }
    };
  }, [onScan, _onError, delay]);

  return (
    <StyledDiv
      className={className}
      style={containerStyle}
    >
      <video
        ref={videoRef}
        className='ui--qr-Scan'
        style={style}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  .ui--qr-Scan {
    display: inline-block;
    height: 100%;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    width: 100%;
  }
`;

export const QrScan = React.memo(Scan);
