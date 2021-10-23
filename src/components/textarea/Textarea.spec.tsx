/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Textarea from './Textarea';

describe('Test Textarea', () => {
  it('Mount Textarea', () => {
    const wrapper = mount(<Textarea />);
    expect(wrapper.length).toEqual(1);
  });

  it('Test Textarea is hovered', () => {
    const wrapper = mount(<Textarea isHovered />);

    const input = wrapper.find('.textarea').hasClass('is-hovered');
    expect(input).toBeTruthy();
  });

  it('Test Textarea is focused', () => {
    const wrapper = mount(<Textarea isFocused />);

    const input = wrapper.find('.textarea').hasClass('is-focused');
    expect(input).toBeTruthy();
  });

  it('Test Textarea is active', () => {
    const wrapper = mount(<Textarea isActive />);

    const input = wrapper.find('.textarea').hasClass('is-active');
    expect(input).toBeTruthy();
  });

  it('Test Textarea is static', () => {
    const wrapper = mount(<Textarea isStatic />);

    const input = wrapper.find('.textarea').hasClass('is-static');
    expect(input).toBeTruthy();
  });

  it('Test Textarea has fixed size', () => {
    const wrapper = mount(<Textarea hasFixedSize />);

    const input = wrapper.find('.textarea').hasClass('has-fixed-size');
    expect(input).toBeTruthy();
  });
});
