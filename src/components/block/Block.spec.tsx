/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Block from './Block';

describe('Test Block', () => {
  it('Mount the component', () => {
    const wrapper = mount(<Block>Text Block</Block>);
    expect(wrapper.length).toEqual(1);
  });
});
