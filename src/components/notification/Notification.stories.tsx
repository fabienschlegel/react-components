/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Notification, { INotificationProps } from './Notification';

export default {
  title: 'Notification',
  component: Notification,
  args: {},
} as Meta;

const Template: Story<INotificationProps> = (args) => (
  <Notification {...args}>{args.children}</Notification>
);

export const BasicNotification = Template.bind({});
BasicNotification.args = {
  children: 'This is a notification',
};
