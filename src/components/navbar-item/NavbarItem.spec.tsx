/* eslint-disable no-undef */
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import '../../setupTests';

import { mount } from 'enzyme';

import NavbarItem from './NavbarItem';

describe('Test NavbarItem', () => {
  it('mount component as Link', () => {
    const wrapper = mount(
      <Router>
        <NavbarItem to="/">NavbarItem Content</NavbarItem>
      </Router>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('mount component as div', () => {
    const wrapper = mount(<NavbarItem asDiv>NavbarItem Content</NavbarItem>);
    expect(wrapper.length).toEqual(1);
  });
});
