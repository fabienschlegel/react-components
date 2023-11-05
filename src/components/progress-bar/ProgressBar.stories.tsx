import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { flexDecorator } from '../../../stories';

import mdx from './ProgressBar.mdx';

import ProgressBar, { ProgressBarProps } from './ProgressBar';

export default {
  title: 'Elements/ProgressBar',
  component: ProgressBar,
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
} as ComponentMeta<FunctionComponent<ProgressBarProps>>;

const Template: ComponentStory<FunctionComponent<ProgressBarProps>> = (args) => (
  <ProgressBar {...args} />
);

export const BasicProgressBar = Template.bind({});
BasicProgressBar.args = {
  value: 0,
  max: 100,
};

export const IndeterminateProgressBar = Template.bind({});
IndeterminateProgressBar.args = {
  max: 100,
};
