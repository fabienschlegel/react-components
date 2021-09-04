/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';

import Menu, { MenuProps } from './Menu';
import MenuLabel from '../menu-label/MenuLabel';
import MenuList from '../menu-list/MenuList';
import MenuNestedList from '../menu-nested-list/MenuNestedList';
import MenuItem from '../menu-item/MenuItem';

const history = createMemoryHistory({ initialEntries: ['/'] });

export default {
  title: 'Menu',
  component: Menu,
  args: {},
  decorators: [
    (StoryComponent) => (
      <Router history={history}>
        <div style={{ margin: '0px auto', width: 500 }}>
          <Route path="/" component={() => <StoryComponent />} />
        </div>
      </Router>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<MenuProps> = () => (
  <Menu>
    <MenuLabel>General</MenuLabel>
    <MenuList>
      <MenuItem to="/">Dashboard</MenuItem>
      <MenuItem to="/">Customers</MenuItem>
    </MenuList>
    <MenuLabel>Administration</MenuLabel>
    <MenuList>
      <MenuItem to="/">Team Settings</MenuItem>
      <MenuNestedList label="Manage Your team">
        <MenuItem to="/">Members</MenuItem>
        <MenuItem to="/">Plugins</MenuItem>
        <MenuItem to="/">Add a member</MenuItem>
      </MenuNestedList>
      <MenuItem to="/">Invitations</MenuItem>
      <MenuItem to="/">Cloud Storage Environment Settings</MenuItem>
    </MenuList>
    <MenuLabel>Transactions</MenuLabel>
    <MenuList>
      <MenuItem to="/">Payments</MenuItem>
      <MenuItem to="/">Transfers</MenuItem>
      <MenuItem to="/">Balance</MenuItem>
    </MenuList>
  </Menu>
);

export const BasicMenu = Template.bind({});

BasicMenu.args = {};
