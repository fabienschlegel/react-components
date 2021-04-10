/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';

import { Story, Meta } from '@storybook/react/types-6-0';

import { faAddressBook, faChartBar, faDizzy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Tabs, { TabsProps } from './Tabs';
import { Alignment, Size } from './types';

const history = createMemoryHistory({ initialEntries: ['/tab1'] });

export default {
  title: 'Tabs',
  args: {},
  argTypes: {
    alignment: {
      control: {
        type: 'select',
        options: Object.values(Alignment),
      },
    },
    size: {
      control: {
        type: 'select',
        options: Object.values(Size),
      },
    },
    isBoxed: {
      control: {
        type: 'boolean',
      },
    },
    isToggle: {
      control: {
        type: 'boolean',
      },
    },
    isToggleRounded: {
      control: {
        type: 'boolean',
      },
    },
    isFullWidth: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<TabsProps> = (args) => (
  <Router history={history}>
    <Route path="/" component={() => <Tabs {...args} />} />
  </Router>
);

export const BasicTabs = Template.bind({});
BasicTabs.args = {
  tabs: [
    { name: 'first tab', to: '/tab1' },
    { name: 'second tab', to: '/tab2' },
    { name: 'three tab', to: '/tab3' },
  ],
};

export const IconTabs = Template.bind({});
IconTabs.args = {
  tabs: [
    {
      name: (
        <span>
          <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
          First Tab
        </span>
      ),
      to: '/tab1',
    },
    {
      name: (
        <span>
          <FontAwesomeIcon icon={faChartBar} className="mr-2" />
          Second Tab
        </span>
      ),
      to: '/tab2',
    },
    {
      name: (
        <span>
          <FontAwesomeIcon icon={faDizzy} className="mr-2" />
          Three Tab
        </span>
      ),
      to: '/tab3',
      isActive: true,
    },
  ],
};
