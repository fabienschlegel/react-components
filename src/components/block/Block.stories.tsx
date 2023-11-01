import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { flexDecorator } from '../../../stories';

import mdx from './Block.mdx';

import BlockComponent, { BlockProps } from './Block';

export default {
  title: 'Elements/Block',
  component: BlockComponent,
  decorators: [flexDecorator],
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: mdx,
      source: {
        excludeDecorators: true,
      },
    },
  },
} as ComponentMeta<FunctionComponent<BlockProps>>;

const Block: ComponentStory<FunctionComponent<BlockProps>> = (args) => (
  <BlockComponent {...args}>{args.children}</BlockComponent>
);

export const DefaultBlock = Block.bind({});
DefaultBlock.args = {
  children: "It's a trap !",
};

DefaultBlock.storyName = 'Block';
