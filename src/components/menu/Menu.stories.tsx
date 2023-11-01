import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { flexDecorator } from '../../../stories';

import mdx from './Menu.mdx';

import Menu, { MenuType } from './Menu';

export default {
  title: 'Components/Menu',
  component: Menu,
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
} as ComponentMeta<MenuType>;

const Template: ComponentStory<MenuType> = (args) => {
  const { children } = args;
  return <Menu {...args}>{children}</Menu>;
};

export const BasicMenu = Template.bind({});

BasicMenu.args = {
  children: (
    <>
      <Menu.Label>General</Menu.Label>
      <Menu.List>
        <Menu.Item>Dashboard</Menu.Item>
        <Menu.Item>Customers</Menu.Item>
      </Menu.List>
      <Menu.Label>Administration</Menu.Label>
      <Menu.List>
        <Menu.Item>Team Settings</Menu.Item>
        <Menu.NestedList label="Manage Your team">
          <Menu.Item>Members</Menu.Item>
          <Menu.Item>Plugins</Menu.Item>
          <Menu.Item>Add a member</Menu.Item>
        </Menu.NestedList>
        <Menu.Item>Invitations</Menu.Item>
        <Menu.Item>Cloud Storage Environment Settings</Menu.Item>
      </Menu.List>
    </>
  ),
};

BasicMenu.storyName = 'Menu';
