/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';

import { Story, Meta } from '@storybook/react/types-6-0';

import Dropdown, { IDropdownProps } from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
  decorators: [
    (StoryComponent) => (
      <Router>
        <div style={{ margin: '15% auto', width: '150px' }}>
          <Routes>
            <Route path="/" element={<StoryComponent />} />
          </Routes>
        </div>
      </Router>
    ),
  ],
  args: {},
  argTypes: {},
} as Meta;

const Template: Story<IDropdownProps> = (args) => {
  const { children } = args;
  return <Dropdown {...args}>{children}</Dropdown>;
};

const items = (
  <>
    <Dropdown.Item>First Item</Dropdown.Item>
    <Dropdown.Item>Second Item</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item to="#">This item is a link</Dropdown.Item>
    <Dropdown.Item isActive to="#">
      This item is an active link
    </Dropdown.Item>
  </>
);

export const BasicDropdown = Template.bind({});
BasicDropdown.args = {
  title: 'Basic Dropdown',
  children: items,
};

export const DropdownIsHoverable = Template.bind({});
DropdownIsHoverable.args = {
  title: 'Basic Dropdown',
  children: items,
  isHoverable: true,
};

export const DropdownPrimaryButton = Template.bind({});
DropdownPrimaryButton.args = {
  title: 'Basic Dropdown',
  children: items,
  buttonConfig: {
    color: 'is-primary',
  },
};
