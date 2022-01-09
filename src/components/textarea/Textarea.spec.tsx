/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Textarea from './Textarea';

describe('Test Textarea', () => {
  it('Mount the component', () => {
    const wrapper = mount(<Textarea />);
    expect(wrapper.length).toEqual(1);
  });

  it('is hovered', () => {
    const wrapper = mount(<Textarea isHovered />);

    const input = wrapper.find('.textarea').hasClass('is-hovered');
    expect(input).toBeTruthy();
  });

  it('is focused', () => {
    const wrapper = mount(<Textarea isFocused />);

    const input = wrapper.find('.textarea').hasClass('is-focused');
    expect(input).toBeTruthy();
  });

  it('is active', () => {
    const wrapper = mount(<Textarea isActive />);

    const input = wrapper.find('.textarea').hasClass('is-active');
    expect(input).toBeTruthy();
  });

  it('is static', () => {
    const wrapper = mount(<Textarea isStatic />);

    const input = wrapper.find('.textarea').hasClass('is-static');
    expect(input).toBeTruthy();
  });

  it('has fixed size', () => {
    const wrapper = mount(<Textarea hasFixedSize />);

    const input = wrapper.find('.textarea').hasClass('has-fixed-size');
    expect(input).toBeTruthy();
  });
});
