import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar, { NavbarProps } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
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

const Template: Story<NavbarProps> = (args) => (
  <Navbar {...args}>
    <Navbar.Brand>
      <Navbar.Item>The Sleeping Dog</Navbar.Item>
    </Navbar.Brand>
    <Navbar.Menu>
      <Navbar.Start>
        <Navbar.Item>Home</Navbar.Item>
        <Navbar.Item>Dogs</Navbar.Item>
        <Navbar.Dropdown label="More">
          <Navbar.Item>Cats</Navbar.Item>
          <Navbar.Item>Birds</Navbar.Item>
        </Navbar.Dropdown>
      </Navbar.Start>
      <Navbar.End>
        <Navbar.Item>Sign In</Navbar.Item>
      </Navbar.End>
    </Navbar.Menu>
  </Navbar>
);

export const BasicNavbar = Template.bind({});

BasicNavbar.args = {
  label: 'main navigation',
  dataTarget: 'myNavbar',
  color: 'is-primary',
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
