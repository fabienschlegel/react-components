import React from 'react';

import { render, screen } from '@testing-library/react';

import NavbarBrand from './NavbarBrand';

describe('Test NavbarBrand', () => {
  it('Mount the component', () => {
    render(
      <NavbarBrand>
        <p>NavbarBrand Content</p>
      </NavbarBrand>
    );

    expect(screen).toBeDefined();
  });
});
