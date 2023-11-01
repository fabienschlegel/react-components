import React from 'react';

import { render, screen } from '@testing-library/react';

import Tag from '../tag/Tag';

import TagsGroup from './TagsGroup';
import Delete from '../delete/Delete';

describe('Test TagsGroup', () => {
  it('Mount the component', () => {
    render(
      <TagsGroup>
        <Tag>It&apos;s a tag</Tag>
      </TagsGroup>
    );

    expect(screen).toBeDefined();
  });

  it('has addons', () => {
    render(
      <TagsGroup hasAddons data-testid="tagsGroup">
        <Tag>It&apos;s a tag</Tag>
        <Tag isDelete>
          It&apos;s a tag
          <Delete size="is-small" />
        </Tag>
      </TagsGroup>
    );

    const tagsGroup = screen.getByTestId('tagsGroup').classList.contains('has-addons');

    expect(tagsGroup).toBeTruthy();
  });
});
