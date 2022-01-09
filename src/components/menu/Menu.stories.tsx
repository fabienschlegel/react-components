/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import Menu, { IMenuProps } from './Menu';

export default {
  title: 'Menu',
  component: Menu,
  args: {},
  decorators: [
    (StoryComponent) => (
      <Router initialEntries={['/']}>
        <div style={{ margin: '0px auto', width: 500 }}>
          <Routes>
            <Route path="/" element={<StoryComponent />} />
          </Routes>
        </div>
      </Router>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<IMenuProps> = (args) => {
  const { children } = args;
  return <Menu {...args}>{children}</Menu>;
};

export const BasicMenu = Template.bind({});

BasicMenu.args = {
  children: (
    <>
      <Menu.Label>General</Menu.Label>
      <Menu.List>
        <Menu.Item to="/">Dashboard</Menu.Item>
        <Menu.Item to="/">Customers</Menu.Item>
      </Menu.List>
      <Menu.Label>Administration</Menu.Label>
      <Menu.List>
        <Menu.Item to="/">Team Settings</Menu.Item>
        <Menu.NestedList label="Manage Your team">
          <Menu.Item to="/">Members</Menu.Item>
          <Menu.Item to="/">Plugins</Menu.Item>
          <Menu.Item to="/">Add a member</Menu.Item>
        </Menu.NestedList>
        <Menu.Item to="/">Invitations</Menu.Item>
        <Menu.Item to="/">Cloud Storage Environment Settings</Menu.Item>
      </Menu.List>
    </>
  ),
};
