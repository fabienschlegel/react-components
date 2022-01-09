/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Help, { HelpProps } from './Help';

export default {
  title: 'Help',
  component: Help,
  args: {},
} as Meta;

const Template: Story<HelpProps> = (args) => <Help {...args} />;

export const BasicHelp = Template.bind({});
BasicHelp.args = {
  text: "It's a trap!",
};
