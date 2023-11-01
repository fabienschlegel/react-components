import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { flexDecorator } from '../../../stories';

import mdx from './Heading.mdx';

import Heading, { HeadingProps } from './Heading';

export default {
  title: 'Elements/Heading',
  component: Heading,
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
} as ComponentMeta<FunctionComponent<HeadingProps>>;

const Template: ComponentStory<FunctionComponent<HeadingProps>> = (args) => (
  <Heading {...args}>{args.children}</Heading>
);

export const BasicHeading = Template.bind({});
BasicHeading.args = {
  children: "It's a trap !",
};

BasicHeading.storyName = 'Heading';
