import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { flexDecorator } from '../../../stories';

import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mdx from './Button.mdx';

import ButtonComponent, { ButtonProps } from './Button';

export default {
  title: 'Elements/Button',
  component: ButtonComponent,
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
} as ComponentMeta<FunctionComponent<ButtonProps>>;

const Button: ComponentStory<FunctionComponent<ButtonProps>> = (args) => (
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
  children: [<FontAwesomeIcon key="0" icon={faAddressBook} className="mr-3" />, 'Button'],
};

export const IconButton = Button.bind({});
IconButton.args = {
  children: <FontAwesomeIcon icon={faAddressBook} />,
};
