/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Content from '../content/Content';

import ModalCard, { ModalCardProps } from './ModalCard';

export default {
  title: 'ModalCard',
  component: ModalCard,
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

const Template: Story<ModalCardProps> = (args) => (
  <ModalCard {...args}>{args.children}</ModalCard>
);

export const BasicModalCard = Template.bind({});
BasicModalCard.args = {
  title: 'Modal Card',
  children: (
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet nunc.
      Phasellus egestas odio scelerisque ullamcorper lobortis. Sed felis ex, suscipit a
      diam sed, iaculis faucibus urna. Ut egestas, lacus et egestas pellentesque, dolor
      sem lobortis metus, eget dignissim nisl orci sed dui. Orci varius natoque penatibus
      et magnis.
    </Content>
  ),
  footer: <p>Footer Content</p>,
};
