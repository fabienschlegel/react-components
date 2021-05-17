/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Input from './Input';

describe('Test Input', () => {
  it('Mount Input', () => {
    const wrapper = mount(<Input />);
    expect(wrapper.length).toEqual(1);
  });

  it('Test Input is rounded', () => {
    const wrapper = mount(<Input isRounded />);

    const input = wrapper.find('.input').hasClass('is-rounded');
    expect(input).toBeTruthy();
  });

  it('Test Input is hovered', () => {
    const wrapper = mount(<Input isHovered />);

    const input = wrapper.find('.input').hasClass('is-hovered');
    expect(input).toBeTruthy();
  });

  it('Test Input is focused', () => {
    const wrapper = mount(<Input isFocused />);

    const input = wrapper.find('.input').hasClass('is-focused');
    expect(input).toBeTruthy();
  });

  it('Test Input is loading', () => {
    const wrapper = mount(<Input isLoading />);

    const input = wrapper.find('.input').hasClass('is-loading');
    expect(input).toBeTruthy();
  });

  it('Test Input is static', () => {
    const wrapper = mount(<Input isStatic />);

    const input = wrapper.find('.input').hasClass('is-static');
    expect(input).toBeTruthy();
  });
});
