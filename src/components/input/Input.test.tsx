import React from 'react';

import { render, screen } from '@testing-library/react';

import Input from './Input';

describe('Test Input', () => {
  it('Mount the component', () => {
    render(<Input />);

    expect(screen).toBeDefined();
  });

  it('is rounded', () => {
    const { container } = render(<Input isRounded />);

    const input = container.getElementsByClassName('is-rounded');
    expect(input).toBeTruthy();
  });

  it('is hovered', () => {
    const { container } = render(<Input isHovered />);

    const input = container.getElementsByClassName('is-hovered');
    expect(input).toBeTruthy();
  });

  it('is focused', () => {
    const { container } = render(<Input isFocused />);

    const input = container.getElementsByClassName('is-focused');
    expect(input).toBeTruthy();
  });

  it('is loading', () => {
    const { container } = render(<Input isLoading />);

    const input = container.getElementsByClassName('is-loading');
    expect(input).toBeTruthy();
  });

  it('is static', () => {
    const { container } = render(<Input isStatic />);

    const input = container.getElementsByClassName('is-static');
    expect(input).toBeTruthy();
  });
});
