/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Footer from './Footer';

describe('Test Footer', () => {
  it('Mount Footer', () => {
    const wrapper = mount(<Footer>Text Footer</Footer>);
    expect(wrapper.length).toEqual(1);
  });
});
