import React from 'react';

import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Test Button', () => {
  it('Mount the component', () => {
    render(<Button>Text Button</Button>);

    expect(screen).toBeDefined();
  });

  it('is small', () => {
    render(<Button size="is-small">Text Button</Button>);

    const button = screen.getByRole('button').classList.contains('is-small');

    expect(button).toBeTruthy();
  });

  it('is full width', () => {
    render(<Button isFullWidth>Text Button</Button>);

    const button = screen.getByRole('button').classList.contains('is-fullwidth');

    expect(button).toBeTruthy();
  });

  it('is outlined', () => {
    render(<Button isOutlined>Text Button</Button>);

    const button = screen.getByRole('button').classList.contains('is-outlined');

    expect(button).toBeTruthy();
  });

  it('is inverted', () => {
    render(<Button isInverted>Text Button</Button>);

    const button = screen.getByRole('button').classList.contains('is-inverted');

    expect(button).toBeTruthy();
  });

  it('is rounded', () => {
    render(<Button isRounded>Text Button</Button>);

    const button = screen.getByRole('button').classList.contains('is-rounded');

    expect(button).toBeTruthy();
  });

  it('is hovered', () => {
    render(<Button isHovered>Text Button</Button>);

    const button = screen.getByRole('button').classList.contains('is-hovered');

    expect(button).toBeTruthy();
  });

  it('is focused', () => {
    render(<Button isFocused>Text Button</Button>);

    const button = screen.getByRole('button').classList.contains('is-focused');

    expect(button).toBeTruthy();
  });

  it('is active', () => {
    render(<Button isActive>Text Button</Button>);

    const button = screen.getByRole('button').classList.contains('is-active');

    expect(button).toBeTruthy();
  });

  it('is loading', () => {
    render(<Button isLoading>Text Button</Button>);

    const button = screen.getByRole('button').classList.contains('is-loading');

    expect(button).toBeTruthy();
  });

  it('is static', () => {
    render(<Button isStatic>Text Button</Button>);

    const button = screen.getByRole('button').classList.contains('is-static');

    expect(button).toBeTruthy();
  });

  it('is responsive', () => {
    render(<Button isResponsive>Text Button</Button>);

    const button = screen.getByRole('button').classList.contains('is-responsive');

    expect(button).toBeTruthy();
  });

  it('click event', () => {
    const onClickEvent = jest.fn();

    render(<Button onClick={onClickEvent}>Text Button</Button>);

    const button = screen.getByRole('button');

    button.click();

    expect(onClickEvent).toHaveBeenCalled();
  });
});
