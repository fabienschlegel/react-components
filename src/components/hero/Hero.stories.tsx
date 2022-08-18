/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import * as TitleStories from '../title/Title.stories';

import Hero, { IHeroProps } from './Hero';

export default {
  title: 'Layout/Hero',
  component: Hero,
  args: {},
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          'is-small',
          'is-medium',
          'is-large',
          'is-halfheight',
          'is-fullheight',
          'is-fullheight-with-navbar',
        ],
      },
    },
  },
} as Meta;

const Template: Story<IHeroProps> = (args) => <Hero {...args}>{args.children}</Hero>;

export const BasicHero = Template.bind({});
BasicHero.args = {
  children: (
    <Hero.Body>
      <TitleStories.BasicTitle useParagraph>
        {TitleStories.BasicTitle.args.children}
      </TitleStories.BasicTitle>
      <TitleStories.BasicTitle useParagraph isSubtitle>
        Subtitle
      </TitleStories.BasicTitle>
    </Hero.Body>
  ),
};

export const FullHeightHero = Template.bind({});
FullHeightHero.args = {
  children: (
    <>
      <Hero.Head>Head of the Hero</Hero.Head>
      <Hero.Body>
        <div>
          <TitleStories.BasicTitle useParagraph>
            {TitleStories.BasicTitle.args.children}
          </TitleStories.BasicTitle>
          <TitleStories.BasicTitle useParagraph isSubtitle>
            Subtitle
          </TitleStories.BasicTitle>
        </div>
      </Hero.Body>
      <Hero.Footer>Footer of the Hero</Hero.Footer>
    </>
  ),
  size: 'is-fullheight',
};
