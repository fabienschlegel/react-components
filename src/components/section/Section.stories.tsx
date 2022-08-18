/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import * as ContentStories from '../content/Content.stories';

import Section, { ISectionProps } from './Section';

export default {
  title: 'Layout/Section',
  component: Section,
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ margin: '0px auto', width: 800 }}>
        <StoryComponent />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ISectionProps> = (args) => <Section {...args}>{args.children}</Section>;

export const BasicSection = Template.bind({});
BasicSection.args = {
  children: (
    <ContentStories.BasicContent className="has-text-centered">
      {ContentStories.BasicContent.args.children}
    </ContentStories.BasicContent>
  ),
};
