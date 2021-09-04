/* eslint-disable no-undef */
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import '../../setupTests';

import { mount } from 'enzyme';

import Navbar from './Navbar';

describe('Test Navbar', () => {
  it('mount component', () => {
    const wrapper = mount(
      <Router>
        <Navbar label="My Navbar" dataTarget="myNavbar" navbarBrand="My Navbar" brandUrl="/">
          <p>Navbar Content</p>
        </Navbar>
      </Router>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Navbar is transparent', () => {
    const wrapper = mount(
      <Router>
        <Navbar
          label="My Navbar"
          dataTarget="myNavbar"
          navbarBrand="My Navbar"
          brandUrl="/"
          isTransparent
        >
          <p>Navbar Content</p>
        </Navbar>
      </Router>
    );

    const navbar = wrapper.find('.navbar').hasClass('is-transparent');

    expect(navbar).toBeTruthy();
  });

  it('Navbar is fixed to top', () => {
    const wrapper = mount(
      <Router>
        <Navbar
          label="My Navbar"
          dataTarget="myNavbar"
          navbarBrand="My Navbar"
          brandUrl="/"
          isFixed="top"
        >
          <p>Navbar Content</p>
        </Navbar>
      </Router>
    );

    const navbar = wrapper.find('.navbar').hasClass('is-fixed-top');

    expect(navbar).toBeTruthy();
  });

  it('Navbar is spaced', () => {
    const wrapper = mount(
      <Router>
        <Navbar
          label="My Navbar"
          dataTarget="myNavbar"
          navbarBrand="My Navbar"
          brandUrl="/"
          isSpaced
        >
          <p>Navbar Content</p>
        </Navbar>
      </Router>
    );

    const navbar = wrapper.find('.navbar').hasClass('is-spaced');

    expect(navbar).toBeTruthy();
  });

  it('Navbar has shadow', () => {
    const wrapper = mount(
      <Router>
        <Navbar
          label="My Navbar"
          dataTarget="myNavbar"
          navbarBrand="My Navbar"
          brandUrl="/"
          hasShadow
        >
          <p>Navbar Content</p>
        </Navbar>
      </Router>
    );

    const navbar = wrapper.find('.navbar').hasClass('has-shadow');

    expect(navbar).toBeTruthy();
  });

  it('Navbar menu is open', () => {
    const wrapper = mount(
      <Router>
        <Navbar label="My Navbar" dataTarget="myNavbar" navbarBrand="My Navbar" brandUrl="/">
          <p>Navbar Content</p>
        </Navbar>
      </Router>
    );

    const navbarLink = wrapper.find('.navbar-burger');

    navbarLink.simulate('click');

    const navbarMenu = wrapper.find('.navbar-menu').hasClass('is-active');

    expect(navbarMenu).toBeTruthy();
  });
});
