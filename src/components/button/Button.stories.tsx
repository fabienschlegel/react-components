/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button, { ButtonType } from './Button';
import { Color, Size } from './types';

export default {
  title: 'Button',
  args: {},
  argTypes: {
    onClick: { action: 'clicked' },
    size: {
      control: {
        type: 'select',
        options: Object.values(Size),
      },
    },
    color: {
      control: {
        type: 'select',
        options: Object.values(Color),
      },
    },
    isOutlined: {
      control: {
        type: 'boolean',
      },
    },
    isInverted: {
      control: {
        type: 'boolean',
      },
    },
    isRounded: {
      control: {
        type: 'boolean',
      },
    },
    isHovered: {
      control: {
        type: 'boolean',
      },
    },
    isFocused: {
      control: {
        type: 'boolean',
      },
    },
    isActive: {
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
    isStatic: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<ButtonType> = (args) => <Button {...args}>{args.children}</Button>;

export const BasicButton = Template.bind({});
BasicButton.args = {
  children: 'Button',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  color: Color.Black,
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
