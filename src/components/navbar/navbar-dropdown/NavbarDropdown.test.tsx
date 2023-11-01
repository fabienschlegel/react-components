import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import NavbarDropdown from './NavbarDropdown';

describe('Test NavbarDropdown', () => {
  it('Mount the component', () => {
    render(
      <NavbarDropdown label="Dropdown">
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );

    expect(screen).toBeDefined();
  });

  it('is hoverable', () => {
    const { container } = render(
      <NavbarDropdown label="Dropdown" isHoverable>
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );

    const dropdown = container.getElementsByClassName('.is-hoverable');

    expect(dropdown).toBeTruthy();
  });

  it('is right', () => {
    const { container } = render(
      <NavbarDropdown label="Dropdown" isRight>
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );

    const dropdown = container.getElementsByClassName('.is-right');

    expect(dropdown).toBeTruthy();
  });

  it('is arrowless', () => {
    const { container } = render(
      <NavbarDropdown label="Dropdown" isArrowLess>
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );

    const dropdown = container.getElementsByClassName('.is-arrowless');

    expect(dropdown).toBeTruthy();
  });

  it('is boxed', () => {
    const { container } = render(
      <NavbarDropdown label="Dropdown" isBoxed>
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );

    const dropdown = container.getElementsByClassName('.is-boxed');

    expect(dropdown).toBeTruthy();
  });

  it('is has dropdown up', () => {
    const { container } = render(
      <NavbarDropdown label="Dropdown" hasDropdownUp>
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );

    const dropdown = container.getElementsByClassName('.has-dropdown-up');

    expect(dropdown).toBeTruthy();
  });

  it('click event', () => {
    render(
      <NavbarDropdown label="Dropdown" data-testid="itemWithDropdown">
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );

    const navbarLink = screen.getByRole('button');

    fireEvent.click(navbarLink);

    const dropdown = screen.getByTestId('itemWithDropdown').classList.contains('is-active');

    expect(dropdown).toBeTruthy();
  });

  it('click event not fired if hoverable', () => {
    render(
      <NavbarDropdown label="Dropdown" isHoverable data-testid="itemWithDropdown">
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );

    const navbarLink = screen.getByRole('button');

    fireEvent.click(navbarLink);

    const dropdown = screen.getByTestId('itemWithDropdown').classList.contains('is-active');

    expect(dropdown).toBeFalsy();
  });
});
