/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Content from '../content/Content';
import Heading from '../heading/Heading';

import Card, { CardProps } from './Card';

export default {
  title: 'Card',
  args: {},
  argTypes: {},
} as Meta;

const Template: Story<CardProps> = (args) => (
  <div style={{ margin: '0px auto', width: 450 }}>
    <Card {...args}>{args.children}</Card>
  </div>
);

export const BasicCard = Template.bind({});
BasicCard.args = {
  children: (
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet nunc. Phasellus
      egestas odio scelerisque ullamcorper lobortis. Sed felis ex, suscipit a diam sed, iaculis
      faucibus urna. Ut egestas, lacus et egestas pellentesque, dolor sem lobortis metus, eget
      dignissim nisl orci sed dui. Orci varius natoque penatibus et magnis.
    </Content>
  ),
};

export const CardWithFooter = Template.bind({});
CardWithFooter.args = {
  children: (
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet nunc. Phasellus
      egestas odio scelerisque ullamcorper lobortis. Sed felis ex, suscipit a diam sed, iaculis
      faucibus urna. Ut egestas, lacus et egestas pellentesque, dolor sem lobortis metus, eget
      dignissim nisl orci sed dui. Orci varius natoque penatibus et magnis.
    </Content>
  ),
  cardFooter: {
    footerItems: {
      items: [
        { id: '1', item: <p>footer 1</p> },
        { id: '2', item: <p>footer 2</p> },
        { id: '3', item: <p>footer 3</p> },
        { id: '4', item: <p>footer 4</p> },
      ],
    },
  },
};

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  cardImage: {
    imageConfig: { src: 'https://placehold.it/450x450', alt: 'Alternative Text' },
  },
  children: (
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet nunc. Phasellus
      egestas odio scelerisque ullamcorper lobortis. Sed felis ex, suscipit a diam sed, iaculis
      faucibus urna.
    </Content>
  ),
  cardFooter: {
    footerItems: {
      items: [
        { id: '1', item: <p>footer 1</p> },
        { id: '2', item: <p>footer 2</p> },
      ],
    },
  },
};

export const CardWithHeader = Template.bind({});

CardWithHeader.args = {
  cardHeader: {
    title: 'Card Header',
  },
  children: (
    <>
      <Heading>Lorem Ipsum</Heading>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet nunc.
        Phasellus egestas odio scelerisque ullamcorper lobortis. Sed felis ex, suscipit a diam sed,
        iaculis faucibus urna.
      </Content>
    </>
  ),
  cardFooter: {
    footerItems: {
      items: [
        { id: '1', item: <p>footer 1</p> },
        { id: '2', item: <p>footer 2</p> },
      ],
    },
  },
};
