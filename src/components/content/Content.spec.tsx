/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Content from './Content';

import Size from './types';

describe('Test Content', () => {
  it('Mount Content', () => {
    const wrapper = mount(<Content>Text Content</Content>);
    expect(wrapper.length).toEqual(1);
  });

  it('Content is small', () => {
    const wrapper = mount(<Content size={Size.Small}>Text Content</Content>);

    const content = wrapper.find('.content').hasClass('is-small');
    expect(content).toBeTruthy();
  });
});
