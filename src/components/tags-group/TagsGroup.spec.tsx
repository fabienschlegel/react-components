/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Tag from 'components/tag/Tag';

import TagsGroup from './TagsGroup';

describe('Test TagsGroup', () => {
  it('Mount TagsGroup', () => {
    const wrapper = mount(
      <TagsGroup>
        <Tag>It&apos;s a tag</Tag>
      </TagsGroup>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('TagsGroup has addons', () => {
    const wrapper = mount(
      <TagsGroup hasAddons>
        <Tag>It&apos;s a tag</Tag>
        <Tag isDelete />
      </TagsGroup>
    );

    const tagsGroup = wrapper.find('.tags').hasClass('has-addons');
    expect(tagsGroup).toBeTruthy();
  });
});
