/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import mdx from './Block.mdx';

import BlockComponent, { IBlockProps } from './Block';

export default {
  title: 'Elements/Block',
  component: BlockComponent,
  decorators: [
    (StoryComponent) => (
      <div style={{ width: '500px', margin: '0 auto', paddingTop: '25px' }}>{StoryComponent()}</div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: mdx,
      source: {
        excludeDecorators: true,
      },
    },
  },
} as ComponentMeta<FunctionComponent<IBlockProps>>;

const Block: ComponentStory<FunctionComponent<IBlockProps>> = (args) => (
  <BlockComponent {...args}>{args.children}</BlockComponent>
);

export const DefaultBlock = Block.bind({});
DefaultBlock.args = {
  children: "It's a trap !",
};

DefaultBlock.storyName = 'Block';
