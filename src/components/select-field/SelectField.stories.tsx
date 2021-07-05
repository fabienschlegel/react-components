/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { faDizzy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SelectField, { SelectFieldProps } from './SelectField';

export default {
  title: 'SelectField',
  component: SelectField,
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ margin: '0px auto', width: 450 }}>
        <StoryComponent />
      </div>
    ),
  ],
} as Meta;

const Template: Story<SelectFieldProps> = (args) => <SelectField {...args} />;

const options = [
  {
    value: '1',
    label: 'banane',
  },
  {
    value: '2',
    label: 'pomme',
  },
  {
    value: '3',
    label: 'orange',
  },
  {
    value: '4',
    label: 'kiwi',
  },
  {
    value: '5',
    label: 'fraise',
  },
  {
    value: '6',
    label: 'framboise',
  },
];

export const BasicSelectField = Template.bind({});
BasicSelectField.args = {
  name: 'selectfield',
  label: 'Select Field',
  options,
};

export const SelectFieldWithIcon = Template.bind({});
SelectFieldWithIcon.args = {
  ...BasicSelectField.args,
  hasIconLeft: <FontAwesomeIcon icon={faDizzy} />,
};

export const SelectFieldWithHelper = Template.bind({});
SelectFieldWithHelper.args = {
  ...BasicSelectField.args,
  helpProps: { text: 'This is help text' },
};
