/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Notification from './Notification';

import Color from './types';

describe('Test Notification', () => {
  it('Mount Notification', () => {
    const wrapper = mount(<Notification>Text Notification</Notification>);
    expect(wrapper.length).toEqual(1);
  });

  it('Notification is light', () => {
    const wrapper = mount(<Notification isLight>Text Notification</Notification>);

    const notification = wrapper.find('.notification').hasClass('is-light');
    expect(notification).toBeTruthy();
  });

  it('Notification is primary', () => {
    const wrapper = mount(
      <Notification color={Color.Primary}>Text Notification</Notification>
    );

    const notification = wrapper.find('.notification').hasClass('is-primary');
    expect(notification).toBeTruthy();
  });

  it('Test Notification click event', () => {
    const onClickEvent = jest.fn();
    const wrapper = mount(
      <Notification onClick={onClickEvent}>Text Notification</Notification>
    );
    const button = wrapper.find('.delete');
    button.simulate('click');
    expect(onClickEvent).toHaveBeenCalled();
  });
});
