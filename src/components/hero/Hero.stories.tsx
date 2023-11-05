import React, { FunctionComponent } from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { fullScreenDecorator } from '../../../stories';

import mdx from './Hero.mdx';

import * as TitleStories from '../title/Title.stories';

import Hero, { HeroProps } from './Hero';

export default {
  title: 'Layout/Hero',
  component: Hero,
  decorators: [fullScreenDecorator],
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: mdx,
      source: {
        excludeDecorators: true,
      },
    },
  },
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
} as Meta<FunctionComponent<HeroProps>>;

const Template: StoryFn<FunctionComponent<HeroProps>> = (args) => (
  <Hero {...args}>{args.children}</Hero>
);

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
        <>
          <TitleStories.BasicTitle useParagraph>
            {TitleStories.BasicTitle.args.children}
          </TitleStories.BasicTitle>
          <TitleStories.BasicTitle useParagraph isSubtitle>
            Subtitle
          </TitleStories.BasicTitle>
        </>
      </Hero.Body>
      <Hero.Footer>Footer of the Hero</Hero.Footer>
    </>
  ),
  size: 'is-fullheight',
};

FullHeightHero.storyName = 'Hero with full height';
