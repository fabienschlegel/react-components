/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import MenuList from './MenuList';

describe('Test MenuList', () => {
  it('mount component', () => {
    const wrapper = mount(<MenuList>Menu List Content</MenuList>);
    expect(wrapper.length).toEqual(1);
  });
});
