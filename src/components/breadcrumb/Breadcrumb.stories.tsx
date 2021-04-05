/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';

import { faAddressBook, faChartBar, faDizzy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Story, Meta } from '@storybook/react/types-6-0';

import Breadcrumb, { BreadcrumbProps } from './Breadcrumb';
import { Alignment, Separator, Size } from './types';

const history = createMemoryHistory({ initialEntries: ['/'] });

export default {
  title: 'Breadcrumb',
  args: {},
  argTypes: {
    alignment: {
      control: {
        type: 'select',
        options: Object.values(Alignment),
      },
    },
    separator: {
      control: {
        type: 'select',
        options: Object.values(Separator),
      },
    },
    size: {
      control: {
        type: 'select',
        options: Object.values(Size),
      },
    },
  },
} as Meta;

const Template: Story<BreadcrumbProps> = (args) => (
  <Router history={history}>
    <Route path="/" component={() => <Breadcrumb {...args} />} />
  </Router>
);

export const BasicBreadcrumb = Template.bind({});
BasicBreadcrumb.args = {
  breadcrumbElement: [
    { name: 'root', to: '/root' },
    { name: 'firstChild', to: '/child1' },
    { name: 'secondChild', to: '/child2', isActive: true },
  ],
};

export const IconBreadcrumb = Template.bind({});
IconBreadcrumb.args = {
  breadcrumbElement: [
    {
      name: (
        <span>
          <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
          Root
        </span>
      ),
      to: '/root',
    },
    {
      name: (
        <span>
          <FontAwesomeIcon icon={faChartBar} className="mr-2" />
          first Child
        </span>
      ),
      to: '/child1',
    },
    {
      name: (
        <span>
          <FontAwesomeIcon icon={faDizzy} className="mr-2" />
          Second Child
        </span>
      ),
      to: '/child2',
      isActive: true,
    },
  ],
};
