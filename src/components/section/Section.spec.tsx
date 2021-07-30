/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Section from './Section';

describe('Test Section', () => {
  it('Mount Section', () => {
    const wrapper = mount(<Section>Text Section</Section>);
    expect(wrapper.length).toEqual(1);
  });
});
