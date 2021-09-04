/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import MenuLabel from './MenuLabel';

describe('Test MenuLabel', () => {
  it('mount component', () => {
    const wrapper = mount(<MenuLabel>Menu Label Content</MenuLabel>);
    expect(wrapper.length).toEqual(1);
  });
});
