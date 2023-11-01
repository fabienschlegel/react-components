import React from 'react';

import { render, screen } from '@testing-library/react';

import NavbarEnd from './NavbarEnd';

describe('Test NavbarEnd', () => {
  it('Mount the component', () => {
    render(
      <NavbarEnd>
        <p>NavbarEnd Content</p>
      </NavbarEnd>
    );

    expect(screen).toBeDefined();
  });
});
