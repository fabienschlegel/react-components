/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Tag from '../tag/Tag';

import TagsGroup from './TagsGroup';
import Delete from '../delete/Delete';

describe('Test TagsGroup', () => {
  it('Mount the component', () => {
    const wrapper = mount(
      <TagsGroup>
        <Tag>It&apos;s a tag</Tag>
      </TagsGroup>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('has addons', () => {
    const wrapper = mount(
      <TagsGroup hasAddons>
        <Tag>It&apos;s a tag</Tag>
        <Tag isDelete>
          It&apos;s a tag
          <Delete size="is-small" />
        </Tag>
      </TagsGroup>
    );

    const tagsGroup = wrapper.find('.tags').hasClass('has-addons');
    expect(tagsGroup).toBeTruthy();
  });
});
