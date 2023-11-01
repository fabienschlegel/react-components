import React from 'react';

import { render, screen } from '@testing-library/react';

import Title from './Title';

describe('Test Title', () => {
  it('Mount the component', () => {
    render(<Title size="is-1">Text Title</Title>);

    expect(screen).toBeDefined();
  });

  it('is h2', () => {
    render(
      <Title size="is-2" headingLevel="h2">
        Text Title
      </Title>
    );

    expect(screen).toBeDefined();
  });

  it('is subtitle', () => {
    render(
      <Title size="is-1" isSubtitle>
        Text Title
      </Title>
    );

    const title = screen.getByRole('heading').classList.contains('subtitle');

    expect(title).toBeTruthy();
  });

  it('is spaced', () => {
    render(
      <Title size="is-1" isSpaced>
        Text Title
      </Title>
    );

    const title = screen.getByRole('heading').classList.contains('is-spaced');

    expect(title).toBeTruthy();
  });

  it('use paragraph', () => {
    render(
      <Title size="is-1" useParagraph data-testid="title">
        Text Title
      </Title>
    );

    const title = screen.getByTestId('title').classList.contains('title');
    expect(title).toBeTruthy();
  });
});
