import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { flexDecorator } from '../../../stories';

import { BasicInputField } from '../input-field/InputField.stories';
import { BasicButton } from '../button/Button.stories';

import mdx from './Box.mdx';

import Box, { BoxProps } from './Box';

export default {
  title: 'Elements/Box',
  component: Box,
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
} as ComponentMeta<FunctionComponent<BoxProps>>;

const Template: ComponentStory<FunctionComponent<BoxProps>> = (args) => (
  <Box {...args}>{args.children}</Box>
);

export const TextBox = Template.bind({});
TextBox.args = {
  children: "It's a trap !",
};

TextBox.storyName = 'Simple box with text';

export const FormElementsBox = Template.bind({});

FormElementsBox.args = {
  children: (
    <>
      <BasicInputField name="email" label="Email" />
      <BasicInputField name="password" label="Password" inputProps={{ type: 'password' }} />
      <BasicButton color="is-primary">Sign In</BasicButton>
    </>
  ),
};

FormElementsBox.storyName = 'Box with Sign In form';
