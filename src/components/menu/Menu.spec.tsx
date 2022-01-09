/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Menu from './Menu';

describe('Test Menu', () => {
  it('Mount the component', () => {
    const wrapper = mount(<Menu>Menu Content</Menu>);
    expect(wrapper.length).toEqual(1);
  });
});
