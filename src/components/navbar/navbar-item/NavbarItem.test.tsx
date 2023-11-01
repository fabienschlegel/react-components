import React from 'react';

import { render, screen } from '@testing-library/react';

import NavbarItem from './NavbarItem';

describe('Test NavbarItem', () => {
  it('Mount the component', () => {
    render(<NavbarItem>NavbarItem Content</NavbarItem>);

    expect(screen).toBeDefined();
  });

  it('Mount the component as div', () => {
    render(<NavbarItem as="div">NavbarItem Content</NavbarItem>);

    expect(screen).toBeDefined();
  });
});
