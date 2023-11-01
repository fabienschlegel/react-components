import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import mdx from './Content.mdx';

import { flexDecorator } from '../../../stories';

import Content, { ContentProps } from './Content';

export default {
  title: 'Elements/Content',
  component: Content,
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
} as ComponentMeta<FunctionComponent<ContentProps>>;

const Template: ComponentStory<FunctionComponent<ContentProps>> = (args) => (
  <Content {...args}>{args.children}</Content>
);

export const BasicContent = Template.bind({});
BasicContent.args = {
  children: <p>It&apos;s a trap !</p>,
};

BasicContent.storyName = 'Content';
