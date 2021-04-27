/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import * as CardStories from '../card/Card.stories';
import * as ImageStories from '../image/Image.stories';

import Modal, { ModalProps } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
  args: {},
  argTypes: {
    onDelete: { action: 'clicked' },
    isActive: {
      control: {
        type: 'boolean',
      },
    },
    isClipped: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args}>{args.children}</Modal>;

export const ModalWithCard = Template.bind({});
ModalWithCard.args = {
  children: <CardStories.BasicCard {...CardStories.BasicCard.args} />,
};

export const ModalWithImage = Template.bind({});
ModalWithImage.args = {
  children: <ImageStories.BasicImage {...ImageStories.BasicImage.args} />,
};
