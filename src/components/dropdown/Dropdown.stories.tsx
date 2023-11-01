import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { routingDecorator } from '../../../stories';

import mdx from './Dropdown.mdx';

import Dropdown, { DropdownProps } from './Dropdown';
import { Link } from 'react-router-dom';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  decorators: [routingDecorator],
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: mdx,
      source: {
        excludeDecorators: true,
      },
    },
  },
} as ComponentMeta<FunctionComponent<DropdownProps>>;

const Template: ComponentStory<FunctionComponent<DropdownProps>> = (args) => {
  const { children } = args;
  return <Dropdown {...args}>{children}</Dropdown>;
};

const items = (
  <>
    <Dropdown.Item>First Item</Dropdown.Item>
    <Dropdown.Item>Second Item</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item as={Link} to="#">
      This item is a link
    </Dropdown.Item>
    <Dropdown.Item isActive as={Link} to="#">
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
