/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';

import Navbar, { NavbarProps } from './Navbar';
import NavbarStart from '../navbar-start/NavbarStart';
import NavbarEnd from '../navbar-end/NavbarEnd';
import NavbarItem from '../navbar-item/NavbarItem';
import NavbarDropdown from '../navbar-dropdown/NavbarDropdown';

const history = createMemoryHistory({ initialEntries: ['/'] });

export default {
  title: 'Navbar',
  component: Navbar,
  args: {},
  decorators: [
    (StoryComponent) => (
      <Router history={history}>
        <Route path="/" component={() => <StoryComponent />} />
      </Router>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<NavbarProps> = (args) => (
  <Navbar {...args}>
    <NavbarStart>
      <NavbarItem to="/">Home</NavbarItem>
      <NavbarItem to="/">Dogs</NavbarItem>
      <NavbarDropdown label="More">
        <NavbarItem to="/">Cats</NavbarItem>
        <NavbarItem to="/">Birds</NavbarItem>
      </NavbarDropdown>
    </NavbarStart>
    <NavbarEnd>
      <NavbarItem to="/">Sign In</NavbarItem>
    </NavbarEnd>
  </Navbar>
);

export const BasicNavbar = Template.bind({});

BasicNavbar.args = {
  label: 'main navigation',
  navbarBrand: 'The Sleeping Dog',
  dataTarget: 'myNavbar',
  brandUrl: '/',
  colors: 'is-primary',
};

export const MobileNavbar = Template.bind({});

MobileNavbar.args = {
  ...BasicNavbar.args,
};
MobileNavbar.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
};
