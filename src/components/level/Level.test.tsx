import React from 'react';

import { render, screen } from '@testing-library/react';

import Level from './Level';

describe('Test Level', () => {
  const leftItems = (
    <Level.Left>
      <Level.Item>Link 1</Level.Item>
      <Level.Item>Link 2</Level.Item>
      <Level.Item>Link 3</Level.Item>
    </Level.Left>
  );

  const rightItems = (
    <Level.Right>
      <Level.Item>Link 1</Level.Item>
      <Level.Item>Link 2</Level.Item>
      <Level.Item>Link 3</Level.Item>
    </Level.Right>
  );

  it('Mount the component', () => {
    render(
      <Level>
        {leftItems}
        {rightItems}
      </Level>
    );

    expect(screen).toBeDefined();
  });

  it('Mount the component with level items', () => {
    render(
      <Level isMobile>
        <Level.Item>Link 1</Level.Item>
        <Level.Item>Link 2</Level.Item>
        <Level.Item>Link 3</Level.Item>
      </Level>
    );
    expect(screen).toBeDefined();
  });
});
