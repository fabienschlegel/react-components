import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Navbar, { NavbarContext } from './Navbar';

describe('Test Navbar', () => {
  it('Mount the component', () => {
    render(
      <Navbar label="My Navbar" dataTarget="myNavbar">
        <p>Navbar Content</p>
      </Navbar>
    );

    expect(screen).toBeDefined();
  });

  it('is transparent', () => {
    render(
      <Navbar label="My Navbar" dataTarget="myNavbar" isTransparent>
        <Navbar.Menu>
          <p>Navbar Content</p>
        </Navbar.Menu>
      </Navbar>
    );

    const navbar = screen.getByRole('navigation').classList.contains('is-transparent');

    expect(navbar).toBeTruthy();
  });

  it('is fixed to top', () => {
    render(
      <Navbar label="My Navbar" dataTarget="myNavbar" isFixed="top">
        <Navbar.Menu>
          <p>Navbar Content</p>
        </Navbar.Menu>
      </Navbar>
    );

    const navbar = screen.getByRole('navigation').classList.contains('is-fixed-top');

    expect(navbar).toBeTruthy();
  });

  it('is spaced', () => {
    render(
      <Navbar label="My Navbar" dataTarget="myNavbar" isSpaced>
        <Navbar.Menu>
          <p>Navbar Content</p>
        </Navbar.Menu>
      </Navbar>
    );

    const navbar = screen.getByRole('navigation').classList.contains('is-spaced');

    expect(navbar).toBeTruthy();
  });

  it('has shadow', () => {
    render(
      <Navbar label="My Navbar" dataTarget="myNavbar" hasShadow>
        <Navbar.Menu>
          <p>Navbar Content</p>
        </Navbar.Menu>
      </Navbar>
    );

    const navbar = screen.getByRole('navigation').classList.contains('has-shadow');

    expect(navbar).toBeTruthy();
  });

  it('menu is open', () => {
    render(
      <Navbar label="My Navbar" dataTarget="myNavbar">
        <Navbar.Brand>
          <Navbar.Item>The Sleeping Dog</Navbar.Item>
        </Navbar.Brand>
        <Navbar.Menu data-testid="navbarMenu">
          <p>Navbar Content</p>
        </Navbar.Menu>
      </Navbar>
    );

    const navbarLink = screen.getByRole('button');

    fireEvent.click(navbarLink);

    const navbarMenu = screen.getByTestId('navbarMenu').classList.contains('is-active');

    expect(navbarMenu).toBeTruthy();
  });

  it('fire context function', () => {
    render(
      <NavbarContext.Consumer>
        {(context) => (
          <button role="button" tabIndex={0} onClick={() => context.toggleMenu()}>
            TestButton
          </button>
        )}
      </NavbarContext.Consumer>
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(button).toBeTruthy();
  });
});
