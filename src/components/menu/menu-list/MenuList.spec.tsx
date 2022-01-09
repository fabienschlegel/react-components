/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import MenuList from './MenuList';

describe('Test MenuList', () => {
  it('Mount the component', () => {
    const wrapper = mount(<MenuList>Menu List Content</MenuList>);
    expect(wrapper.length).toEqual(1);
  });
});
