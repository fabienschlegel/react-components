/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import NavbarEnd from './NavbarEnd';

describe('Test NavbarEnd', () => {
  it('mount component', () => {
    const wrapper = mount(
      <NavbarEnd>
        <p>NavbarEnd Content</p>
      </NavbarEnd>
    );
    expect(wrapper.length).toEqual(1);
  });
});
