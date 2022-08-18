/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import * as ImageStories from '../image/Image.stories';
import * as BoxStories from '../box/Box.stories';

import Modal, { ModalProps } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {},
  argTypes: {
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

export const BasicModal = Template.bind({});
BasicModal.args = {
  children: (
    <Modal.Content>
      <BoxStories.TextBox {...BoxStories.TextBox.args} />
    </Modal.Content>
  ),
};

export const ModalWithCard = Template.bind({});
ModalWithCard.args = {
  children: (
    <Modal.Card>
      <Modal.Card.Header>Modal Card Header</Modal.Card.Header>
      <Modal.Card.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti incidunt reiciendis,
        mollitia, iste harum ipsam repellat dicta perferendis atque laboriosam magnam sit, sunt
        sapiente ducimus maxime laudantium unde voluptatum architecto!
      </Modal.Card.Body>
      <Modal.Card.Footer>Modal Card Footer</Modal.Card.Footer>
    </Modal.Card>
  ),
};

export const ModalWithImage = Template.bind({});
ModalWithImage.args = {
  children: (
    <Modal.Content>
      <ImageStories.BasicImage {...ImageStories.BasicImage.args} />
    </Modal.Content>
  ),
};
