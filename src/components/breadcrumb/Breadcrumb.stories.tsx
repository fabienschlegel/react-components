/* eslint-disable import/no-extraneous-dependencies, jsx-a11y/anchor-is-valid */
import React from 'react';

import { faAddressBook, faChartBar, faDizzy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Story, Meta } from '@storybook/react/types-6-0';

import Breadcrumb, { IBreadcrumbProps } from './Breadcrumb';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  args: {},
} as Meta;

const Template: Story<IBreadcrumbProps> = (args) => {
  const { children } = args;
  return (
    <div style={{ margin: '0px auto', width: 450 }}>
      <Breadcrumb {...args}>{children}</Breadcrumb>
    </div>
  );
};

export const BasicBreadcrumb = Template.bind({});
BasicBreadcrumb.args = {
  children: (
    <>
      <Breadcrumb.Element>
        <a href="#">root</a>
      </Breadcrumb.Element>
      <Breadcrumb.Element>
        <a href="#">firstChild</a>
      </Breadcrumb.Element>
      <Breadcrumb.Element isActive>
        <a href="#">secondChild</a>
      </Breadcrumb.Element>
    </>
  ),
};

export const IconBreadcrumb = Template.bind({});
IconBreadcrumb.args = {
  children: (
    <>
      <Breadcrumb.Element>
        <a href="#">
          <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
          Root
        </a>
      </Breadcrumb.Element>
      <Breadcrumb.Element>
        <a href="#">
          <FontAwesomeIcon icon={faChartBar} className="mr-2" />
          first Child
        </a>
      </Breadcrumb.Element>
      <Breadcrumb.Element isActive>
        <a href="#">
          <FontAwesomeIcon icon={faDizzy} className="mr-2" />
          Second Child
        </a>
      </Breadcrumb.Element>
    </>
  ),
};
