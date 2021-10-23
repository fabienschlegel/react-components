/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import NavbarDropdown from './NavbarDropdown';

describe('Test NavbarDropdown', () => {
  it('mount component', () => {
    const wrapper = mount(
      <NavbarDropdown label="Dropdown">
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('NavbarDropdown is hoverable', () => {
    const wrapper = mount(
      <NavbarDropdown label="Dropdown" isHoverable>
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );

    const dropdown = wrapper.find('.has-dropdown').hasClass('is-hoverable');

    expect(dropdown).toBeTruthy();
  });

  it('NavbarDropdown is right', () => {
    const wrapper = mount(
      <NavbarDropdown label="Dropdown" isRight>
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );

    const dropdown = wrapper.find('.has-dropdown').hasClass('is-right');

    expect(dropdown).toBeTruthy();
  });

  it('NavbarDropdown is arrowless', () => {
    const wrapper = mount(
      <NavbarDropdown label="Dropdown" isArrowLess>
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );

    const dropdown = wrapper.find('.has-dropdown').hasClass('is-arrowless');

    expect(dropdown).toBeTruthy();
  });

  it('NavbarDropdown is boxed', () => {
    const wrapper = mount(
      <NavbarDropdown label="Dropdown" isBoxed>
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );

    const dropdown = wrapper.find('.has-dropdown').hasClass('is-boxed');

    expect(dropdown).toBeTruthy();
  });

  it('NavbarDropdown is has dropdown up', () => {
    const wrapper = mount(
      <NavbarDropdown label="Dropdown" hasDropdownUp>
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );

    const dropdown = wrapper.find('.has-dropdown').hasClass('has-dropdown-up');

    expect(dropdown).toBeTruthy();
  });

  it('NavbarDropdown click event', () => {
    const wrapper = mount(
      <NavbarDropdown label="Dropdown">
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );

    const navbarLink = wrapper.find('.navbar-link');

    navbarLink.simulate('click');

    const dropdown = wrapper.find('.has-dropdown').hasClass('is-active');
    const navbarDropdown = wrapper.find('.navbar-dropdown').hasClass('is-active');

    expect(dropdown).toBeTruthy();
    expect(navbarDropdown).toBeTruthy();
  });

  it('NavbarDropdown click event not fired if hoverable', () => {
    const wrapper = mount(
      <NavbarDropdown label="Dropdown" isHoverable>
        <p>NavbarDropdown Content</p>
      </NavbarDropdown>
    );

    const navbarLink = wrapper.find('.navbar-link');

    navbarLink.simulate('click');

    const dropdown = wrapper.find('.has-dropdown').hasClass('is-active');
    const navbarDropdown = wrapper.find('.navbar-dropdown').hasClass('is-active');

    expect(dropdown).toBeFalsy();
    expect(navbarDropdown).toBeFalsy();
  });
});
