/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import NavbarDivider from './NavbarDivider';

describe('Test NavbarDivider', () => {
  it('Mount the component', () => {
    const wrapper = mount(<NavbarDivider />);
    expect(wrapper.length).toEqual(1);
  });
});
