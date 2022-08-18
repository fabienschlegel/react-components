/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox, { CheckboxType } from './Checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ margin: '0px auto', width: 450 }}>
        <StoryComponent />
      </div>
    ),
  ],
} as Meta;

const Template: Story<CheckboxType> = (args) => <Checkbox {...args}>{args.children}</Checkbox>;

export const BasicCheckbox = Template.bind({});
BasicCheckbox.args = {
  name: 'checkbox',
  children: 'I agree to the terms and conditions',
};
