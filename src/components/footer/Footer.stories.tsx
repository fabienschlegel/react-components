/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import * as ContentStories from '../content/Content.stories';

import Footer, { FooterProps } from './Footer';

export default {
  title: 'Footer',
  component: Footer,
  args: {},
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args}>{args.children}</Footer>;

export const BasicFooter = Template.bind({});
BasicFooter.args = {
  children: (
    <ContentStories.BasicContent className="has-text-centered">
      {ContentStories.BasicContent.args.children}
    </ContentStories.BasicContent>
  ),
};
