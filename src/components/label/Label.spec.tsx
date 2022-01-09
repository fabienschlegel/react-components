/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Label from './Label';

describe('Test Label', () => {
  it('Mount the component', () => {
    const wrapper = mount(<Label />);
    expect(wrapper.length).toEqual(1);
  });
});
