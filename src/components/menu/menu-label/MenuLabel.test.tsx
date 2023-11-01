import React from 'react';

import { render, screen } from '@testing-library/react';

import MenuLabel from './MenuLabel';

describe('Test MenuLabel', () => {
  it('Mount the component', () => {
    render(<MenuLabel>Menu Label Content</MenuLabel>);
    expect(screen).toBeDefined();
  });
});
