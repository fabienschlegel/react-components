import React from 'react';

import { render, screen } from '@testing-library/react';

import Content from './Content';

describe('Test Content', () => {
  it('Mount the component', () => {
    render(<Content>Text Content</Content>);

    expect(screen).toBeDefined();
  });

  it('is small', () => {
    const { container } = render(<Content size="is-small">Text Content</Content>);

    const content = container.getElementsByClassName('is-small');

    expect(content).toBeTruthy();
  });
});
