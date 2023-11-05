import React from 'react';

import { render, screen } from '@testing-library/react';

import Content from './Content';

describe('Test Content', () => {
  const contentLabel = 'Text Content';
  it('Mount the component', () => {
    render(<Content>{contentLabel}</Content>);

    expect(screen.getByText(contentLabel)).toBeDefined();
  });

  it('is small', () => {
    render(
      <Content data-testid="contentElement" size="is-small">
        {contentLabel}
      </Content>
    );

    const content = screen.getByTestId('contentElement').classList.contains('is-small');

    expect(content).toBeTruthy();
  });
});
