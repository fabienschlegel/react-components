/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ButtonComponent, { ButtonType } from './Button';

export default {
  title: 'Elements/Button',
  component: ButtonComponent,
  args: {},
} as ComponentMeta<FunctionComponent<ButtonType>>;

const Button: ComponentStory<FunctionComponent<ButtonType>> = (args) => (
  <ButtonComponent {...args}>{args.children}</ButtonComponent>
);

export const BasicButton = Button.bind({});
BasicButton.args = {
  children: 'Button',
};

export const DisabledButton = Button.bind({});
DisabledButton.args = {
  color: 'is-black',
  disabled: true,
  children: 'Button',
};

export const IconTextButton = Button.bind({});
IconTextButton.args = {
  children: [<FontAwesomeIcon icon={faAddressBook} className="mr-3" />, 'Button'],
};

export const IconButton = Button.bind({});
IconButton.args = {
  children: <FontAwesomeIcon icon={faAddressBook} />,
};
