// Copyright 2017-2019 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BaseProps } from './types';

import React from 'react';
import styled from 'styled-components';
import { xxhashAsHex } from '@polkadot/util-crypto';

import qrcode from './qrcode';
import { createFrames, createImgSize } from './util';

interface Props extends BaseProps {
  size?: number;
  skipEncoding?: boolean;
  value: Uint8Array;
}

interface State {
  frames: Uint8Array[];
  frameIdx: number;
  image: string | null;
  timerId: number | null;
  valueHash: string | null;
}

const FRAME_DELAY = 2100;

function getDataUrl (value: Uint8Array): string {
  const qr = qrcode(0, 'M');

  // HACK See out qrcode stringToBytes override as used internally. This
  // will only work for the case where we actuall pass `Bytes` in here
  // @ts-ignore
  qr.addData(value, 'Byte');
  qr.make();

  return qr.createDataURL(32, 0);
}

class Display extends React.PureComponent<Props, State> {
  public state: State = {
    frames: [],
    frameIdx: 0,
    image: null,
    timerId: null,
    valueHash: null
  };

  public static getDerivedStateFromProps ({ value, skipEncoding = false }: Props, prevState: State): Pick<State, never> | null {
    const valueHash = xxhashAsHex(value);

    if (valueHash === prevState.valueHash) {
      return null;
    }

    const frames: Uint8Array[] = skipEncoding
      ? [value]
      : createFrames(value);

    // encode on demand
    return {
      frames,
      frameIdx: 0,
      image: getDataUrl(frames[0]),
      valueHash
    };
  }

  public componentDidMount (): void {
    this.setState({
      timerId: window.setInterval(this.nextFrame, FRAME_DELAY)
    });
  }

  public componentWillUnmount (): void {
    const { timerId } = this.state;

    if (timerId) {
      clearInterval(timerId);
    }
  }

  public render (): React.ReactNode {
    const { className, size, style } = this.props;
    const { image } = this.state;

    if (!image) {
      return null;
    }

    return (
      <div
        className={className}
        style={createImgSize(size)}
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

  private nextFrame = (): void => {
    const { frames, frameIdx } = this.state;

    if (!frames || frames.length <= 1) {
      return;
    }

    const nextIdx = frameIdx === frames.length - 1
      ? 0
      : frameIdx + 1;

    // only encode the frames on demand, not above as part of the
    // state derivation - in the case of large payloads, this should
    // be slightly more responsive on initial load
    this.setState({
      frameIdx: nextIdx,
      image: getDataUrl(frames[nextIdx])
    });
  }
}

export default styled(Display as React.ComponentClass<Props>)`
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
`;
