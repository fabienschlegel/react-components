/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import RadioField, { IRadioFieldProps } from './RadioField';

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

const Template: Story<IRadioFieldProps> = (args) => {
  const { children } = args;
  return <RadioField {...args}>{children}</RadioField>;
};

export const BasicRadioField = Template.bind({});
BasicRadioField.args = {
  children: (
    <>
      <RadioField.Element name="radiofield">Yes</RadioField.Element>
      <RadioField.Element name="radiofield">No</RadioField.Element>
    </>
  ),
};

export const DefaultCheckedRadioField = Template.bind({});
DefaultCheckedRadioField.args = {
  children: (
    <>
      <RadioField.Element name="radiofield">Yes</RadioField.Element>
      <RadioField.Element name="radiofield" checked>
        No
      </RadioField.Element>
    </>
  ),
};

export const DisabledRadioField = Template.bind({});
DisabledRadioField.args = {
  children: (
    <>
      <RadioField.Element name="radiofield">Yes</RadioField.Element>
      <RadioField.Element name="radiofield">No</RadioField.Element>
      <RadioField.Element name="radiofield" disabled>
        Maybe
      </RadioField.Element>
    </>
  ),
};
