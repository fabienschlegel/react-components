/* eslint-disable import/no-extraneous-dependencies,jsx-a11y/anchor-is-valid */
import React from 'react';

import { faAddressBook, faChartBar, faDizzy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Story, Meta } from '@storybook/react/types-6-0';

import BreadcrumbElement from '../breadcrumb-element/BreadcrumbElement';

import Breadcrumb, { BreadcrumbProps } from './Breadcrumb';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  args: {},
} as Meta;

const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const BasicBreadcrumb = Template.bind({});
BasicBreadcrumb.args = {
  breadcrumbElements: [
    <BreadcrumbElement>
      <a href="#">root</a>
    </BreadcrumbElement>,
    <BreadcrumbElement>
      <a href="#">firstChild</a>
    </BreadcrumbElement>,
    <BreadcrumbElement isActive>
      <a href="#">secondChild</a>
    </BreadcrumbElement>,
  ],
};

export const IconBreadcrumb = Template.bind({});
IconBreadcrumb.args = {
  breadcrumbElements: [
    <BreadcrumbElement>
      <a href="#">
        <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
        Root
      </a>
    </BreadcrumbElement>,
    <BreadcrumbElement>
      <a href="#">
        <FontAwesomeIcon icon={faChartBar} className="mr-2" />
        first Child
      </a>
    </BreadcrumbElement>,
    <BreadcrumbElement isActive>
      <a href="#">
        <FontAwesomeIcon icon={faDizzy} className="mr-2" />
        Second Child
      </a>
    </BreadcrumbElement>,
  ],
};
