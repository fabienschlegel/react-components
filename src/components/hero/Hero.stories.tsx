/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Hero, { HeroProps } from './Hero';

export default {
  title: 'Hero',
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

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const BasicHero = Template.bind({});
BasicHero.args = {
  title: 'Hero title',
  subtitle: 'Hero subtitle',
};

export const FullHeightHero = Template.bind({});
FullHeightHero.args = {
  title: 'Hero title',
  subtitle: 'Hero subtitle',
  head: <p>Head of the Hero</p>,
  footer: <p>Footer of the Hero</p>,
  size: 'is-fullheight',
};
