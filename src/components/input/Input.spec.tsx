/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Input from './Input';

describe('Test Input', () => {
  it('Mount the component', () => {
    const wrapper = mount(<Input />);
    expect(wrapper.length).toEqual(1);
  });

  it('is rounded', () => {
    const wrapper = mount(<Input isRounded />);

    const input = wrapper.find('.input').hasClass('is-rounded');
    expect(input).toBeTruthy();
  });

  it('is hovered', () => {
    const wrapper = mount(<Input isHovered />);

    const input = wrapper.find('.input').hasClass('is-hovered');
    expect(input).toBeTruthy();
  });

  it('is focused', () => {
    const wrapper = mount(<Input isFocused />);

    const input = wrapper.find('.input').hasClass('is-focused');
    expect(input).toBeTruthy();
  });

  it('is loading', () => {
    const wrapper = mount(<Input isLoading />);

    const input = wrapper.find('.input').hasClass('is-loading');
    expect(input).toBeTruthy();
  });

  it('is static', () => {
    const wrapper = mount(<Input isStatic />);

    const input = wrapper.find('.input').hasClass('is-static');
    expect(input).toBeTruthy();
  });
});
