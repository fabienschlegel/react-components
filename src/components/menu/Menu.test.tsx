import React from 'react';

import { render, screen } from '@testing-library/react';

import Menu from './Menu';

describe('Test Menu', () => {
  it('Mount the component', () => {
    render(<Menu>Menu Content</Menu>);
    expect(screen).toBeDefined();
  });
});
