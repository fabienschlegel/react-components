/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Box from './Box';

describe('Test Box', () => {
  it('Mount Box', () => {
    const wrapper = mount(<Box>Text Box</Box>);
    expect(wrapper.length).toEqual(1);
  });
});
