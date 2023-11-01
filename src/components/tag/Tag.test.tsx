import React from 'react';

import { render, screen } from '@testing-library/react';

import Tag from './Tag';

describe('Test Tag', () => {
  it('Mount the component', () => {
    render(<Tag>Text Tag</Tag>);

    expect(screen).toBeDefined();
  });

  it('is small', () => {
    render(
      <Tag size="is-medium" data-testid="tag">
        Text Tag
      </Tag>
    );

    const tag = screen.getByTestId('tag').classList.contains('is-medium');

    expect(tag).toBeTruthy();
  });

  it('color is primary', () => {
    render(
      <Tag color="is-primary" data-testid="tag">
        Text Tag
      </Tag>
    );

    const tag = screen.getByTestId('tag').classList.contains('is-primary');

    expect(tag).toBeTruthy();
  });

  it('is rounded', () => {
    render(
      <Tag isRounded data-testid="tag">
        Text Tag
      </Tag>
    );

    const tag = screen.getByTestId('tag').classList.contains('is-rounded');

    expect(tag).toBeTruthy();
  });

  it('is delete', () => {
    render(
      <Tag isDelete data-testid="tag">
        Text Tag
      </Tag>
    );

    const tag = screen.getByTestId('tag').classList.contains('is-delete');

    expect(tag).toBeTruthy();
  });
});
