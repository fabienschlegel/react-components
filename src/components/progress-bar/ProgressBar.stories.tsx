/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import ProgressBar, { ProgressBarProps } from './ProgressBar';
import { Color, Size } from './types';

export default {
  title: 'ProgressBar',
  args: {},
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.values(Color),
      },
    },
    size: {
      control: {
        type: 'select',
        options: Object.values(Size),
      },
    },
  },
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const BasicProgressBar = Template.bind({});
BasicProgressBar.args = {
  value: 0,
  max: 100,
};

export const IndeterminateProgressBar = Template.bind({});
IndeterminateProgressBar.args = {
  max: 100,
};
