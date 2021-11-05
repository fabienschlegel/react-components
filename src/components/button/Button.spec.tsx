/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Button from './Button';

describe('Test Button', () => {
  it('Mount the component', () => {
    const wrapper = mount(<Button>Text Button</Button>);
    expect(wrapper.length).toEqual(1);
  });

  it('is small', () => {
    const wrapper = mount(<Button size="is-small">Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-small');
    expect(button).toBeTruthy();
  });

  it('is full width', () => {
    const wrapper = mount(<Button isFullWidth>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-fullwidth');
    expect(button).toBeTruthy();
  });

  it('is outlined', () => {
    const wrapper = mount(<Button styles={{ 'is-outlined': true }}>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-outlined');
    expect(button).toBeTruthy();
  });

  it('is inverted', () => {
    const wrapper = mount(<Button styles={{ 'is-inverted': true }}>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-inverted');
    expect(button).toBeTruthy();
  });

  it('is rounded', () => {
    const wrapper = mount(<Button styles={{ 'is-rounded': true }}>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-rounded');
    expect(button).toBeTruthy();
  });

  it('is hovered', () => {
    const wrapper = mount(<Button states={{ 'is-hovered': true }}>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-hovered');
    expect(button).toBeTruthy();
  });

  it('is focused', () => {
    const wrapper = mount(<Button states={{ 'is-focused': true }}>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-focused');
    expect(button).toBeTruthy();
  });

  it('is active', () => {
    const wrapper = mount(<Button states={{ 'is-active': true }}>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-active');
    expect(button).toBeTruthy();
  });

  it('is loading', () => {
    const wrapper = mount(<Button states={{ 'is-loading': true }}>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-loading');
    expect(button).toBeTruthy();
  });

  it('is static', () => {
    const wrapper = mount(<Button states={{ 'is-static': true }}>Text Button</Button>);

    const button = wrapper.find('.button').hasClass('is-static');
    expect(button).toBeTruthy();
  });

  it('click event', () => {
    const onClickEvent = jest.fn();
    const wrapper = mount(<Button onClick={onClickEvent}>Text Button</Button>);
    const button = wrapper.find('.button');
    button.simulate('click');
    expect(onClickEvent).toHaveBeenCalled();
  });
});
