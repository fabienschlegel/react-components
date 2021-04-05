/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Tag from './Tag';
import { Color, Size } from './types';

describe('Test Tag', () => {
  it('Mount Tag', () => {
    const wrapper = mount(<Tag>Text Tag</Tag>);
    expect(wrapper.length).toEqual(1);
  });

  it('Tag is small', () => {
    const wrapper = mount(<Tag size={Size.Medium}>Text Tag</Tag>);

    const tag = wrapper.find('.tag').hasClass('is-medium');
    expect(tag).toBeTruthy();
  });

  it('Tag color is primary', () => {
    const wrapper = mount(<Tag color={Color.Primary}>Text Tag</Tag>);

    const tag = wrapper.find('.tag').hasClass('is-primary');
    expect(tag).toBeTruthy();
  });

  it('Tag  is rounded', () => {
    const wrapper = mount(<Tag isRounded>Text Tag</Tag>);

    const tag = wrapper.find('.tag').hasClass('is-rounded');
    expect(tag).toBeTruthy();
  });

  it('Tag  is delete', () => {
    const wrapper = mount(<Tag isDelete />);

    const tag = wrapper.find('.tag').hasClass('is-delete');
    expect(tag).toBeTruthy();
  });
});
