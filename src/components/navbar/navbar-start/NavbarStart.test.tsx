import React from 'react';

import { render, screen } from '@testing-library/react';

import NavbarStart from './NavbarStart';

describe('Test NavbarStart', () => {
  it('Mount the component', () => {
    render(
      <NavbarStart>
        <p>NavbarStart Content</p>
      </NavbarStart>
    );

    expect(screen).toBeDefined();
  });
});
