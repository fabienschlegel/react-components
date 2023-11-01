import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { flexDecorator } from '../../../stories';

import mdx from './Help.mdx';

import Help, { HelpProps } from './Help';

export default {
  title: 'Form/Help',
  component: Help,
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
} as ComponentMeta<FunctionComponent<HelpProps>>;

const Template: ComponentStory<FunctionComponent<HelpProps>> = (args) => <Help {...args} />;

export const BasicHelp = Template.bind({});

BasicHelp.args = {
  text: "It's a trap!",
};

BasicHelp.storyName = 'Help';
