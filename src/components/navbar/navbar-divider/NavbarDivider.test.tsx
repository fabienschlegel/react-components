import React from 'react';

import { render, screen } from '@testing-library/react';

import NavbarDivider from './NavbarDivider';

describe('Test NavbarDivider', () => {
  it('Mount the component', () => {
    render(<NavbarDivider />);

    expect(screen).toBeDefined();
  });
});
