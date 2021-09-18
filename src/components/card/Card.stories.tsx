/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Content from '../content/Content';
import Heading from '../heading/Heading';
import CardHeader from '../card-header/CardHeader';
import CardFooter from '../card-footer/CardFooter';
import CardFooterItem from '../card-footer-item/CardFooterItem';
import CardImage from '../card-image/CardImage';
import Image from '../image/Image';

import Card, { CardProps } from './Card';

export default {
  title: 'Card',
  component: Card,
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
  footer: (
    <CardFooter>
      <CardFooterItem>
        <p>footer 1</p>
      </CardFooterItem>
      <CardFooterItem>
        <p>footer 2</p>
      </CardFooterItem>
    </CardFooter>
  ),
};

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  image: (
    <CardImage>
      <Image src="https://via.placeholder.com/256" alt="alternative text" />
    </CardImage>
  ),
  children: (
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet nunc. Phasellus
      egestas odio scelerisque ullamcorper lobortis. Sed felis ex, suscipit a diam sed, iaculis
      faucibus urna.
    </Content>
  ),
  footer: { ...CardWithFooter.args.footer },
};

export const CardWithHeader = Template.bind({});

CardWithHeader.args = {
  header: <CardHeader title="Card Header" />,
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
  footer: { ...CardWithFooter.args.footer },
};

export const CardWithHeaderIcon = Template.bind({});

CardWithHeaderIcon.args = {
  header: <CardHeader title="Card Header" icon={<FontAwesomeIcon icon={faCaretDown} />} />,
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
  footer: { ...CardWithFooter.args.footer },
};
