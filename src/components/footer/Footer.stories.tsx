import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { fullDecorator } from '../../../stories';

import mdx from './Footer.mdx';

import * as ContentStories from '../content/Content.stories';

import Footer, { FooterProps } from './Footer';

export default {
  title: 'Layout/Footer',
  component: Footer,
  decorators: [fullDecorator],
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: mdx,
      source: {
        excludeDecorators: true,
      },
    },
  },
} as ComponentMeta<FunctionComponent<FooterProps>>;

const Template: ComponentStory<FunctionComponent<FooterProps>> = (args) => (
  <Footer {...args}>{args.children}</Footer>
);

export const BasicFooter = Template.bind({});
BasicFooter.args = {
  children: (
    <ContentStories.BasicContent className="has-text-centered">
      {ContentStories.BasicContent.args.children}
    </ContentStories.BasicContent>
  ),
};

BasicFooter.storyName = 'Footer';
