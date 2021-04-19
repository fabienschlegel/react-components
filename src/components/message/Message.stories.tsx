/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Message, { MessageProps } from './Message';

import { Color, Size } from './types';

export default {
  title: 'Message',
  args: {},
  argTypes: {
    onDelete: { action: 'clicked' },
    size: {
      control: {
        type: 'select',
        options: Object.values(Size),
      },
    },
    color: {
      control: {
        type: 'select',
        options: Object.values(Color),
      },
    },
  },
} as Meta;

const Template: Story<MessageProps> = (args) => (
  <div style={{ margin: '0px auto', width: 600 }}>
    <Message {...args} />
  </div>
);

export const BasicMessage = Template.bind({});
BasicMessage.args = {
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at egestas nisi. Pellentesque id pulvinar ipsum. Mauris imperdiet elit et euismod mattis. Quisque malesuada vitae est ut ullamcorper. Pellentesque a convallis odio. Morbi est mi, dictum at dolor vitae, rhoncus ultricies nunc. Nunc placerat ipsum ac nisl maximus, id maximus.',
};

export const MessageWithHeader = Template.bind({});
MessageWithHeader.args = {
  header: 'Message Header',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at egestas nisi. Pellentesque id pulvinar ipsum. Mauris imperdiet elit et euismod mattis. Quisque malesuada vitae est ut ullamcorper. Pellentesque a convallis odio. Morbi est mi, dictum at dolor vitae, rhoncus ultricies nunc. Nunc placerat ipsum ac nisl maximus, id maximus.',
};
