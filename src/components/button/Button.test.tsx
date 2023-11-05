import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

describe('Test Button', () => {
  const buttonLabel = 'Text Button';
  it('Mount the component', () => {
    render(<Button>{buttonLabel}</Button>);

    expect(screen.getByText(buttonLabel)).toBeDefined();
  });

  it('is small', () => {
    render(<Button size="is-small">{buttonLabel}</Button>);

    const button = screen.getByRole('button').classList.contains('is-small');

    expect(button).toBeTruthy();
  });

  it('is full width', () => {
    render(<Button isFullWidth>{buttonLabel}</Button>);

    const button = screen.getByRole('button').classList.contains('is-fullwidth');

    expect(button).toBeTruthy();
  });

  it('is outlined', () => {
    render(<Button isOutlined>{buttonLabel}</Button>);

    const button = screen.getByRole('button').classList.contains('is-outlined');

    expect(button).toBeTruthy();
  });

  it('is inverted', () => {
    render(<Button isInverted>{buttonLabel}</Button>);

    const button = screen.getByRole('button').classList.contains('is-inverted');

    expect(button).toBeTruthy();
  });

  it('is rounded', () => {
    render(<Button isRounded>{buttonLabel}</Button>);

    const button = screen.getByRole('button').classList.contains('is-rounded');

    expect(button).toBeTruthy();
  });

  it('is hovered', () => {
    render(<Button isHovered>{buttonLabel}</Button>);

    const button = screen.getByRole('button').classList.contains('is-hovered');

    expect(button).toBeTruthy();
  });

  it('is focused', () => {
    render(<Button isFocused>{buttonLabel}</Button>);

    const button = screen.getByRole('button').classList.contains('is-focused');

    expect(button).toBeTruthy();
  });

  it('is active', () => {
    render(<Button isActive>{buttonLabel}</Button>);

    const button = screen.getByRole('button').classList.contains('is-active');

    expect(button).toBeTruthy();
  });

  it('is loading', () => {
    render(<Button isLoading>{buttonLabel}</Button>);

    const button = screen.getByRole('button').classList.contains('is-loading');

    expect(button).toBeTruthy();
  });

  it('is static', () => {
    render(<Button isStatic>{buttonLabel}</Button>);

    const button = screen.getByRole('button').classList.contains('is-static');

    expect(button).toBeTruthy();
  });

  it('is responsive', () => {
    render(<Button isResponsive>{buttonLabel}</Button>);

    const button = screen.getByRole('button').classList.contains('is-responsive');

    expect(button).toBeTruthy();
  });

  it('click event', () => {
    const onClickEvent = jest.fn();

    render(<Button onClick={onClickEvent}>{buttonLabel}</Button>);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onClickEvent).toHaveBeenCalledTimes(1);
  });
});
