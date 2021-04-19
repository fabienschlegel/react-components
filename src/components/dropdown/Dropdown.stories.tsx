/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';

import { Story, Meta } from '@storybook/react/types-6-0';

import Dropdown, { DropdownProps } from './Dropdown';

import { Color } from '../button/types';

const history = createMemoryHistory({ initialEntries: ['/'] });

export default {
  title: 'Dropdown',
  args: {},
  argTypes: {
    isActive: {
      control: {
        type: 'boolean',
      },
    },
    isHoverable: {
      control: {
        type: 'boolean',
      },
    },
    isRightAligned: {
      control: {
        type: 'boolean',
      },
    },
    isUp: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => (
  <Router history={history}>
    <Route
      path="/"
      component={() => (
        <div style={{ margin: '15% auto', width: '150px' }}>
          <Dropdown {...args} />
        </div>
      )}
    />
  </Router>
);

const items = [
  {
    id: '0',
    content: <p>First Item</p>,
  },
  {
    id: '1',
    content: <p>Second Item</p>,
    hasDivider: true,
  },
  {
    id: '2',
    content: 'This item is a link',
    to: '/fakeurl',
  },
  {
    id: '3',
    content: 'This item is an active link',
    to: '/fakeurl2',
    isActive: true,
  },
];

export const BasicDropdown = Template.bind({});
BasicDropdown.args = {
  title: 'Basic Dropdown',
  items,
};

export const DropdownIsHoverable = Template.bind({});
DropdownIsHoverable.args = {
  title: 'Basic Dropdown',
  items,
  isHoverable: true,
};

export const DropdownPrimaryButton = Template.bind({});
DropdownPrimaryButton.args = {
  title: 'Basic Dropdown',
  items,
  buttonConfig: {
    color: Color.Primary,
  },
};
