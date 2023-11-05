import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { flexDecorator } from '../../../stories';

import mdx from './Notification.mdx';

import Notification, { NotificationProps } from './Notification';

export default {
  title: 'Elements/Notification',
  component: Notification,
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
} as ComponentMeta<FunctionComponent<NotificationProps>>;

const Template: ComponentStory<FunctionComponent<NotificationProps>> = (args) => (
  <Notification {...args}>{args.children}</Notification>
);

export const BasicNotification = Template.bind({});
BasicNotification.args = {
  children: 'This is a notification',
};

BasicNotification.storyName = 'Notification';
