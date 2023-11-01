import React from 'react';

import { render, screen } from '@testing-library/react';

import MenuList from './MenuList';

describe('Test MenuList', () => {
  it('Mount the component', () => {
    render(<MenuList>Menu List Content</MenuList>);
    expect(screen).toBeDefined();
  });
});
