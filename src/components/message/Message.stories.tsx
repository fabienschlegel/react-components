/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Message, { IMessageProps } from './Message';

export default {
  title: 'Message',
  component: Message,
  args: {},
} as Meta;

const Template: Story<IMessageProps> = (args) => {
  const { children } = args;
  return (
    <div style={{ margin: '0px auto', width: 600 }}>
      <Message {...args}>{children}</Message>
    </div>
  );
};

export const BasicMessage = Template.bind({});
BasicMessage.args = {
  children: (
    <Message.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at egestas nisi. Pellentesque
      id pulvinar ipsum. Mauris imperdiet elit et euismod mattis. Quisque malesuada vitae est ut
      ullamcorper. Pellentesque a convallis odio. Morbi est mi, dictum at dolor vitae, rhoncus
      ultricies nunc. Nunc placerat ipsum ac nisl maximus, id maximus.
    </Message.Body>
  ),
};

export const MessageWithHeader = Template.bind({});
MessageWithHeader.args = {
  children: (
    <>
      <Message.Header onDelete={() => {}}>Message Header</Message.Header>
      <Message.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at egestas nisi. Pellentesque
        id pulvinar ipsum. Mauris imperdiet elit et euismod mattis. Quisque malesuada vitae est ut
        ullamcorper. Pellentesque a convallis odio. Morbi est mi, dictum at dolor vitae, rhoncus
        ultricies nunc. Nunc placerat ipsum ac nisl maximus, id maximus.
      </Message.Body>
    </>
  ),
};
