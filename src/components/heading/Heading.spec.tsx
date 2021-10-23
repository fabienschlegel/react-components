/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Heading from './Heading';

describe('Test Heading', () => {
  it('Mount Heading', () => {
    const wrapper = mount(<Heading>Text Heading</Heading>);
    expect(wrapper.length).toEqual(1);
  });
});
