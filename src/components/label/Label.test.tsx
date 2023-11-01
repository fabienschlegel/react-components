import React from 'react';

import { render, screen } from '@testing-library/react';

import Label from './Label';

describe('Test Label', () => {
  it('Mount the component', () => {
    render(<Label />);

    expect(screen).toBeDefined();
  });
});
