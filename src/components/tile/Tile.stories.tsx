/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Tile, { TileProps } from './Tile';

export default {
  title: 'Tile',
  component: Tile,
  args: {},
} as Meta;

const Template: Story<TileProps> = (args) => <Tile {...args}>{args.children}</Tile>;

const ParentTile = Template.bind({});
ParentTile.args = {
  context: 'is-parent',
};

const ChildTile = Template.bind({});
ChildTile.args = {
  context: 'is-child',
};

const AncestorTile = Template.bind({});
AncestorTile.args = {
  context: 'is-ancestor',
};

export const BasicTilePatchwork = Template.bind({});
BasicTilePatchwork.args = {
  ...AncestorTile.args,
  children: (
    <>
      <ParentTile {...ParentTile.args} context="is-parent" isVertical size="is-4">
        <ChildTile {...ChildTile.args} isBox>
          <p className="title">One</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
            pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
            feugiat facilisis.
          </p>
        </ChildTile>
        <ChildTile {...ChildTile.args} isBox>
          <p className="title">Two</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
            pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
            feugiat facilisis.
          </p>
        </ChildTile>
      </ParentTile>
      <ParentTile {...ParentTile.args}>
        <ChildTile {...ChildTile.args} isBox>
          <p className="title">Three</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
            pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
            feugiat facilisis.
          </p>
        </ChildTile>
      </ParentTile>
    </>
  ),
};

export const ColoredTilePatchwork = Template.bind({});
ColoredTilePatchwork.args = {
  ...AncestorTile.args,
  children: (
    <>
      <ParentTile {...ParentTile.args} isVertical size="is-4">
        <ChildTile {...ChildTile.args} isBox color="is-primary">
          <p className="title">One</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
            pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
            feugiat facilisis.
          </p>
        </ChildTile>
        <ChildTile {...ChildTile.args} isBox color="is-warning">
          <p className="title">Two</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
            pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
            feugiat facilisis.
          </p>
        </ChildTile>
      </ParentTile>
      <ParentTile {...ParentTile.args}>
        <ChildTile {...ChildTile.args} color="is-info">
          <p className="title">Three</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
            pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis
            feugiat facilisis.
          </p>
        </ChildTile>
      </ParentTile>
    </>
  ),
};
