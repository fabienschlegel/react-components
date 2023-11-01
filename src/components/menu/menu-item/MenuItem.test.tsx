import React from 'react';

import { render, screen } from '@testing-library/react';

import MenuItem from './MenuItem';

describe('Test MenuItem', () => {
  it('Mount the component', () => {
    render(<MenuItem>Menu Item Content</MenuItem>);

    expect(screen).toBeDefined();
  });

  it('Mount the component as div', () => {
    render(<MenuItem as="div">Menu Item Content</MenuItem>);

    expect(screen).toBeDefined();
  });
});
