import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { flexDecorator } from '../../../stories';

import * as NotificationStories from '../notification/Notification.stories';

import mdx from './Container.mdx';

import Container, { ContainerProps } from './Container';

export default {
  title: 'Layout/Container',
  component: Container,
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
  argTypes: {
    fullWidth: {
      control: {
        type: 'select',
        options: ['is-widescreen', 'is-fullhd'],
      },
    },
    maxWidth: {
      control: {
        type: 'select',
        options: ['is-max-desktop', 'is-max-widescreen'],
      },
    },
  },
} as Meta;

const Template: Story<ContainerProps> = (args) => <Container {...args}>{args.children}</Container>;

export const BasicContainer = Template.bind({});
BasicContainer.args = {
  children: (
    <NotificationStories.BasicNotification {...NotificationStories.BasicNotification.args} />
  ),
};

BasicContainer.storyName = 'Container';
