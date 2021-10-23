/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Checkbox from './Checkbox';

describe('Test Checkbox', () => {
  it('Mount Checkbox', () => {
    const wrapper = mount(<Checkbox>Checkbox Content</Checkbox>);
    expect(wrapper.length).toEqual(1);
  });

  it('Test Checkbox is disabled', () => {
    const wrapper = mount(<Checkbox isDisabled>Text Content</Checkbox>);

    const disabledInput = wrapper.find({ disabled: true });

    expect(disabledInput).toBeTruthy();
  });
});
