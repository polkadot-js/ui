// Copyright 2017-2021 @polkadot/react-qr authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import { xxhashAsHex } from '@polkadot/util-crypto';

import { qrcode } from './qrcode';
import { createFrames, createImgSize } from './util';

interface Props {
  className?: string;
  size?: string | number;
  skipEncoding?: boolean;
  style?: React.CSSProperties;
  value: Uint8Array;
}

interface FrameState {
  frames: Uint8Array[];
  frameIdx: number;
  image: string | null;
  valueHash: string | null;
}

interface TimerState {
  timerDelay: number;
  timerId: number | null;
}

const FRAME_DELAY = 2500;
const TIMER_INC = 500;

function getDataUrl (value: Uint8Array): string {
  const qr = qrcode(0, 'M');

  // HACK See our qrcode stringToBytes override as used internally. This
  // will only work for the case where we actually pass `Bytes` in here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  qr.addData(value as any, 'Byte');
  qr.make();

  return qr.createDataURL(16, 0);
}

function Display ({ className, size, skipEncoding, style, value }: Props): React.ReactElement<Props> | null {
  const [{ image }, setFrameState] = useState<FrameState>({ frameIdx: 0, frames: [], image: null, valueHash: null });
  const timerRef = useRef<TimerState>({ timerDelay: FRAME_DELAY, timerId: null });

  const containerStyle = useMemo(
    () => createImgSize(size),
    [size]
  );

  // run on initial load to setup the global timer and provide and unsubscribe
  useEffect((): () => void => {
    const nextFrame = () => setFrameState((state): FrameState => {
      // when we have a single frame, we only ever fire once
      if (state.frames.length <= 1) {
        return state;
      }

      let frameIdx = state.frameIdx + 1;

      // when we overflow, skip to the first and slightly increase the delay between frames
      if (frameIdx === state.frames.length) {
        frameIdx = 0;
        timerRef.current.timerDelay = timerRef.current.timerDelay + TIMER_INC;
      }

      timerRef.current.timerId = setTimeout(nextFrame, timerRef.current.timerDelay);

      // only encode the frames on demand, not above as part of the
      // state derivation - in the case of large payloads, this should
      // be slightly more responsive on initial load
      return {
        ...state,
        frameIdx,
        image: getDataUrl(state.frames[frameIdx])
      };
    });

    timerRef.current.timerId = window.setTimeout(nextFrame, FRAME_DELAY);

    return (): void => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timerRef.current.timerId && clearTimeout(timerRef.current.timerId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect((): void => {
    setFrameState((state): FrameState => {
      const valueHash = xxhashAsHex(value);

      if (valueHash === state.valueHash) {
        return state;
      }

      const frames: Uint8Array[] = skipEncoding
        ? [value]
        : createFrames(value);

      // encode on demand
      return {
        frameIdx: 0,
        frames,
        image: getDataUrl(frames[0]),
        valueHash
      };
    });
  }, [skipEncoding, value]);

  if (!image) {
    return null;
  }

  return (
    <div
      className={className}
      style={containerStyle}
    >
      <div
        className='ui--qr-Display'
        style={style}
      >
        <img src={image} />
      </div>
    </div>
  );
}

export const QrDisplay = React.memo(styled(Display)`
  .ui--qr-Display {
    height: 100%;
    width: 100%;

    img,
    svg {
      background: white;
      height: auto !important;
      max-height: 100%;
      max-width: 100%;
      width: auto !important;
    }
  }
`);
