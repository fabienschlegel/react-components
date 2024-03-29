import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import * as HelpStories from '../help/Help.stories';

import TextareaField, { TextareaFieldProps } from './TextareaField';

export default {
  title: 'Form/TextareaField',
  component: TextareaField,
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ margin: '0px auto', width: 450 }}>
        <StoryComponent />
      </div>
    ),
  ],
} as Meta;

const Template: Story<TextareaFieldProps> = (args) => <TextareaField {...args} />;

export const BasicTextareaField = Template.bind({});
BasicTextareaField.args = {
  name: 'textarea',
  label: 'Text Area Field',
};

export const TextareaFieldWithHelper = Template.bind({});
TextareaFieldWithHelper.args = {
  ...BasicTextareaField.args,
  children: <TextareaField.Help {...HelpStories.BasicHelp.args} />,
};
