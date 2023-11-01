import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { flexDecorator } from '../../../stories';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mdx from './Card.mdx';

import * as ContentStories from '../content/Content.stories';
import * as HeadingStories from '../heading/Heading.stories';

import Card, { CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
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
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args}>{args.children}</Card>;

export const BasicCard = Template.bind({});
BasicCard.args = {
  children: (
    <Card.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet nunc. Phasellus
      egestas odio scelerisque ullamcorper lobortis. Sed felis ex, suscipit a diam sed, iaculis
      faucibus urna. Ut egestas, lacus et egestas pellentesque, dolor sem lobortis metus, eget
      dignissim nisl orci sed dui. Orci varius natoque penatibus et magnis.
    </Card.Content>
  ),
};

export const CardWithFooter = Template.bind({});
CardWithFooter.args = {
  children: (
    <>
      <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet nunc.
        Phasellus egestas odio scelerisque ullamcorper lobortis. Sed felis ex, suscipit a diam sed,
        iaculis faucibus urna. Ut egestas, lacus et egestas pellentesque, dolor sem lobortis metus,
        eget dignissim nisl orci sed dui. Orci varius natoque penatibus et magnis.
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item>
          <p>footer 1</p>
        </Card.Footer.Item>
        <Card.Footer.Item>
          <p>footer 2</p>
        </Card.Footer.Item>
      </Card.Footer>
    </>
  ),
};

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  children: (
    <>
      <Card.Image>
        <Card.Image.Image src="https://via.placeholder.com/128" alt="alternative text" />
      </Card.Image>
      <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet nunc.
        Phasellus egestas odio scelerisque ullamcorper lobortis. Sed felis ex, suscipit a diam sed,
        iaculis faucibus urna.
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item>
          <p>footer 1</p>
        </Card.Footer.Item>
        <Card.Footer.Item>
          <p>footer 2</p>
        </Card.Footer.Item>
      </Card.Footer>
    </>
  ),
};

export const CardWithHeader = Template.bind({});

CardWithHeader.args = {
  children: (
    <>
      <Card.Header title="Card Header" />
      <Card.Content>
        <HeadingStories.BasicHeading>Lorem Ipsum</HeadingStories.BasicHeading>
        <ContentStories.BasicContent className="has-text-centered">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet nunc.
          Phasellus egestas odio scelerisque ullamcorper lobortis. Sed felis ex, suscipit a diam
          sed, iaculis faucibus urna.
        </ContentStories.BasicContent>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item>
          <p>footer 1</p>
        </Card.Footer.Item>
        <Card.Footer.Item>
          <p>footer 2</p>
        </Card.Footer.Item>
      </Card.Footer>
    </>
  ),
};

export const CardWithHeaderIcon = Template.bind({});

CardWithHeaderIcon.args = {
  children: (
    <>
      <Card.Header title="Card Header" icon={<FontAwesomeIcon icon={faCaretDown} />} />
      <Card.Content>
        <HeadingStories.BasicHeading>Lorem Ipsum</HeadingStories.BasicHeading>
        <ContentStories.BasicContent className="has-text-centered">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet nunc.
          Phasellus egestas odio scelerisque ullamcorper lobortis. Sed felis ex, suscipit a diam
          sed, iaculis faucibus urna.
        </ContentStories.BasicContent>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item>
          <p>footer 1</p>
        </Card.Footer.Item>
        <Card.Footer.Item>
          <p>footer 2</p>
        </Card.Footer.Item>
      </Card.Footer>
    </>
  ),
};
