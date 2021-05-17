/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Container from './Container';

describe('Test Container', () => {
  it('Mount Container', () => {
    const wrapper = mount(<Container>Text Container</Container>);
    expect(wrapper.length).toEqual(1);
  });
});
