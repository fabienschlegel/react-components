import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { flexDecorator } from '../../../stories';

import mdx from './Checkbox.mdx';

import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
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
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args}>{args.children}</Checkbox>;

export const BasicCheckbox = Template.bind({});
BasicCheckbox.args = {
  name: 'checkbox',
  children: 'I agree to the terms and conditions',
};

BasicCheckbox.storyName = 'Checkbox';
