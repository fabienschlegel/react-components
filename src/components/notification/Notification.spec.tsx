/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Notification from './Notification';

describe('Test Notification', () => {
  it('Mount the component', () => {
    const wrapper = mount(<Notification>Text Notification</Notification>);
    expect(wrapper.length).toEqual(1);
  });

  it('is light', () => {
    const wrapper = mount(<Notification isLight>Text Notification</Notification>);

    const notification = wrapper.find('.notification').hasClass('is-light');
    expect(notification).toBeTruthy();
  });

  it('is primary', () => {
    const wrapper = mount(<Notification color="is-primary">Text Notification</Notification>);

    const notification = wrapper.find('.notification').hasClass('is-primary');
    expect(notification).toBeTruthy();
  });

  it('click event', () => {
    const onClickEvent = jest.fn();
    const wrapper = mount(<Notification onClick={onClickEvent}>Text Notification</Notification>);
    const button = wrapper.find('.delete');
    button.simulate('click');
    expect(onClickEvent).toHaveBeenCalled();
  });
});
