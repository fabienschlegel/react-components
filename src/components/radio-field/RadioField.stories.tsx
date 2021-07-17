/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import RadioField, { RadioFieldProps } from './RadioField';

export default {
  title: 'RadioField',
  component: RadioField,
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ margin: '0px auto', width: 450 }}>
        <StoryComponent />
      </div>
    ),
  ],
} as Meta;

const Template: Story<RadioFieldProps> = (args) => <RadioField {...args} />;

export const BasicRadioField = Template.bind({});
BasicRadioField.args = {
  name: 'radiofield',
  radioElements: [{ children: 'Yes' }, { children: 'No' }],
};

export const DefaultCheckedRadioField = Template.bind({});
DefaultCheckedRadioField.args = {
  name: 'radiofield',
  radioElements: [{ children: 'Yes' }, { children: 'No', checked: true }],
};

export const DisabledRadioField = Template.bind({});
DisabledRadioField.args = {
  name: 'radiofield',
  radioElements: [
    { children: 'Yes' },
    { children: 'No' },
    { children: 'Maybe', disabled: true },
  ],
};
