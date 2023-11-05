import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { fullScreenDecorator } from '../../../stories';

import Navbar, { NavbarProps } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [fullScreenDecorator],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<FunctionComponent<NavbarProps>>;

const Template: ComponentStory<FunctionComponent<NavbarProps>> = (args) => (
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
