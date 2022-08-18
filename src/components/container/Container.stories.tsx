/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import * as NotificationStories from '../notification/Notification.stories';

import Container, { IContainerProps } from './Container';

export default {
  title: 'Layout/Container',
  component: Container,
  args: {},
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

const Template: Story<IContainerProps> = (args) => <Container {...args}>{args.children}</Container>;

export const BasicContainer = Template.bind({});
BasicContainer.args = {
  children: (
    <NotificationStories.BasicNotification {...NotificationStories.BasicNotification.args} />
  ),
};
