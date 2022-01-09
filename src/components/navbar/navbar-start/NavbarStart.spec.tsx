/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import NavbarStart from './NavbarStart';

describe('Test NavbarStart', () => {
  it('Mount the component', () => {
    const wrapper = mount(
      <NavbarStart>
        <p>NavbarStart Content</p>
      </NavbarStart>
    );
    expect(wrapper.length).toEqual(1);
  });
});
