/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Block from './Block';

describe('Test Block', () => {
  it('Mount Block', () => {
    const wrapper = mount(<Block>Text Block</Block>);
    expect(wrapper.length).toEqual(1);
  });
});
