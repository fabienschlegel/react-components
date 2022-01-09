/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar, { INavbarProps } from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
  args: {},
  decorators: [
    (StoryComponent) => (
      <Router initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<StoryComponent />} />
        </Routes>
      </Router>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<INavbarProps> = (args) => (
  <Navbar {...args}>
    <Navbar.Start>
      <Navbar.Item to="/">Home</Navbar.Item>
      <Navbar.Item to="/">Dogs</Navbar.Item>
      <Navbar.Dropdown label="More">
        <Navbar.Item to="/">Cats</Navbar.Item>
        <Navbar.Item to="/">Birds</Navbar.Item>
      </Navbar.Dropdown>
    </Navbar.Start>
    <Navbar.End>
      <Navbar.Item to="/">Sign In</Navbar.Item>
    </Navbar.End>
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
