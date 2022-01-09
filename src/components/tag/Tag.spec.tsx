/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Tag from './Tag';

describe('Test Tag', () => {
  it('Mount the component', () => {
    const wrapper = mount(<Tag>Text Tag</Tag>);
    expect(wrapper.length).toEqual(1);
  });

  it('is small', () => {
    const wrapper = mount(<Tag size="is-medium">Text Tag</Tag>);

    const tag = wrapper.find('.tag').hasClass('is-medium');
    expect(tag).toBeTruthy();
  });

  it('color is primary', () => {
    const wrapper = mount(<Tag color="is-primary">Text Tag</Tag>);

    const tag = wrapper.find('.tag').hasClass('is-primary');
    expect(tag).toBeTruthy();
  });

  it('is rounded', () => {
    const wrapper = mount(<Tag isRounded>Text Tag</Tag>);

    const tag = wrapper.find('.tag').hasClass('is-rounded');
    expect(tag).toBeTruthy();
  });

  it('is delete', () => {
    const wrapper = mount(<Tag isDelete>Text Tag</Tag>);

    const tag = wrapper.find('.tag').hasClass('is-delete');
    expect(tag).toBeTruthy();
  });
});
