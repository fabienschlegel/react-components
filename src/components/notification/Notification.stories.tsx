/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Notification, { NotificationProps } from './Notification';
import Color from './types';

export default {
  title: 'Notification',
  args: {},
  argTypes: {
    onClick: { action: 'clicked' },
    color: {
      control: {
        type: 'select',
        options: Object.values(Color),
      },
    },
    isLight: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<NotificationProps> = (args) => (
  <Notification {...args}>{args.children}</Notification>
);

export const BasicNotification = Template.bind({});
BasicNotification.args = {
  children: 'This is a notification',
};
