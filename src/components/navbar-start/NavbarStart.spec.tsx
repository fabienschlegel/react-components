/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import NavbarStart from './NavbarStart';

describe('Test NavbarStart', () => {
  it('mount component', () => {
    const wrapper = mount(
      <NavbarStart>
        <p>NavbarStart Content</p>
      </NavbarStart>
    );
    expect(wrapper.length).toEqual(1);
  });
});
