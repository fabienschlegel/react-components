/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Content from './Content';

describe('Test Content', () => {
  it('Mount the component', () => {
    const wrapper = mount(<Content>Text Content</Content>);
    expect(wrapper.length).toEqual(1);
  });

  it('is small', () => {
    const wrapper = mount(<Content size="is-small">Text Content</Content>);

    const content = wrapper.find('.content').hasClass('is-small');
    expect(content).toBeTruthy();
  });
});
