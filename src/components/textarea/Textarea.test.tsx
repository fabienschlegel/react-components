import React from 'react';

import { render, screen } from '@testing-library/react';

import Textarea from './Textarea';

describe('Test Textarea', () => {
  it('Mount the component', () => {
    render(<Textarea />);

    expect(screen).toBeDefined();
  });

  it('is hovered', () => {
    render(<Textarea isHovered />);

    const input = screen.getByRole('textbox').classList.contains('is-hovered');

    expect(input).toBeTruthy();
  });

  it('is focused', () => {
    render(<Textarea isFocused />);

    const input = screen.getByRole('textbox').classList.contains('is-focused');

    expect(input).toBeTruthy();
  });

  it('is active', () => {
    render(<Textarea isActive />);

    const input = screen.getByRole('textbox').classList.contains('is-active');

    expect(input).toBeTruthy();
  });

  it('is static', () => {
    render(<Textarea isStatic />);

    const input = screen.getByRole('textbox').classList.contains('is-static');

    expect(input).toBeTruthy();
  });

  it('has fixed size', () => {
    render(<Textarea hasFixedSize />);

    const input = screen.getByRole('textbox').classList.contains('has-fixed-size');

    expect(input).toBeTruthy();
  });
});
