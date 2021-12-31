// Copyright 2017-2022 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Copyright 2016 Dan Finlay

export function container (diameter: number, background = 'white', className = '', _style: { [index: string]: string } = {}): HTMLElement {
  const element = document.createElement('div');
  const style = Object.assign({
    background,
    borderRadius: `${diameter / 2}px`,
    display: 'inline-block',
    height: `${diameter}px`,
    margin: '0px',
    overflow: 'hidden',
    padding: '0px',
    width: `${diameter}px`
  }, _style);

  element.className = className;
  element.style.background = background;

  Object.keys(style).forEach((key: unknown): void => {
    element.style[key as number] = style[key as number];
  });

  return element;
}
