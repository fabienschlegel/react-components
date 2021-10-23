/* eslint-disable no-undef */
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { mount } from 'enzyme';

import NavbarBrand from './NavbarBrand';

describe('Test NavbarBrand', () => {
  const toggleMenu = jest.fn();

  it('mount component', () => {
    const wrapper = mount(
      <Router>
        <NavbarBrand brandUrl="/" dataTarget="myNavbar" isOpen={false} toggleMenu={toggleMenu}>
          <p>NavbarBrand Content</p>
        </NavbarBrand>
      </Router>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('navbar menu is open', () => {
    const wrapper = mount(
      <Router>
        <NavbarBrand brandUrl="/" dataTarget="myNavbar" isOpen toggleMenu={toggleMenu}>
          <p>NavbarBrand Content</p>
        </NavbarBrand>
      </Router>
    );

    const burger = wrapper.find('.navbar-burger').hasClass('is-active');

    expect(burger).toBeTruthy();
  });
});
