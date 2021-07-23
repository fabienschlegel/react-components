/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Button from './Button';

describe('Test Button', () => {
  it('Mount Button', () => {
    const wrapper = mount(<Button>Text Button</Button>);
    expect(wrapper.length).toEqual(1);
  });

  it('Button is small', () => {
    const wrapper = mount(<Button size="is-small">Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-small');
    expect(button).toBeTruthy();
  });

  it('Button is full width', () => {
    const wrapper = mount(<Button isFullWidth>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-fullwidth');
    expect(button).toBeTruthy();
  });

  it('Button  is outlined', () => {
    const wrapper = mount(<Button isOutlined>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-outlined');
    expect(button).toBeTruthy();
  });

  it('Button  is inverted', () => {
    const wrapper = mount(<Button isInverted>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-inverted');
    expect(button).toBeTruthy();
  });

  it('Button  is rounded', () => {
    const wrapper = mount(<Button isRounded>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-rounded');
    expect(button).toBeTruthy();
  });

  it('Button  is hovered', () => {
    const wrapper = mount(<Button isHovered>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-hovered');
    expect(button).toBeTruthy();
  });

  it('Button  is focused', () => {
    const wrapper = mount(<Button isFocused>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-focused');
    expect(button).toBeTruthy();
  });

  it('Button  is active', () => {
    const wrapper = mount(<Button isActive>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-active');
    expect(button).toBeTruthy();
  });

  it('Button  is loading', () => {
    const wrapper = mount(<Button isLoading>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-loading');
    expect(button).toBeTruthy();
  });

  it('Button  is static', () => {
    const wrapper = mount(<Button isStatic>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-static');
    expect(button).toBeTruthy();
  });

  it('Test Button click event', () => {
    const onClickEvent = jest.fn();
    const wrapper = mount(<Button onClick={onClickEvent}>Text Button</Button>);
    const button = wrapper.find('.button');
    button.simulate('click');
    expect(onClickEvent).toHaveBeenCalled();
  });
});
