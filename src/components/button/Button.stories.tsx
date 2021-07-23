/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button, { ButtonType } from './Button';

export default {
  title: 'Button',
  component: Button,
  args: {},
} as Meta;

const Template: Story<ButtonType> = (args) => <Button {...args}>{args.children}</Button>;

export const BasicButton = Template.bind({});
BasicButton.args = {
  children: 'Button',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  color: 'is-black',
  disabled: true,
  children: 'Button',
};

export const IconTextButton = Template.bind({});
IconTextButton.args = {
  children: [<FontAwesomeIcon icon={faAddressBook} className="mr-3" />, 'Button'],
};

export const IconButton = Template.bind({});
IconButton.args = {
  children: <FontAwesomeIcon icon={faAddressBook} />,
};
