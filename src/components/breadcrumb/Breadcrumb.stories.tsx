/* eslint-disable import/no-extraneous-dependencies, jsx-a11y/anchor-is-valid */
import React, { FunctionComponent } from 'react';

import { faAddressBook, faChartBar, faDizzy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import mdx from './Breadcrumb.mdx';

import BreadcrumbComponent, { IBreadcrumbProps } from './Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: BreadcrumbComponent,
  decorators: [
    (StoryComponent) => (
      <div style={{ width: '450px', margin: '0 auto', paddingTop: '25px' }}>{StoryComponent()}</div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: mdx,
      source: {
        excludeDecorators: true,
      },
    },
  },
} as ComponentMeta<FunctionComponent<IBreadcrumbProps>>;

const BreadCrumb: ComponentStory<FunctionComponent<IBreadcrumbProps>> = (args) => {
  const { children } = args;
  return <BreadcrumbComponent {...args}>{children}</BreadcrumbComponent>;
};

export const BasicBreadcrumb = BreadCrumb.bind({});
BasicBreadcrumb.args = {
  children: (
    <>
      <BreadcrumbComponent.Element>
        <a href="#">root</a>
      </BreadcrumbComponent.Element>
      <BreadcrumbComponent.Element>
        <a href="#">firstChild</a>
      </BreadcrumbComponent.Element>
      <BreadcrumbComponent.Element isActive>
        <a href="#">secondChild</a>
      </BreadcrumbComponent.Element>
    </>
  ),
};

BasicBreadcrumb.storyName = 'BreadCrumb with text';

export const IconBreadcrumb = BreadCrumb.bind({});
IconBreadcrumb.args = {
  children: (
    <>
      <BreadcrumbComponent.Element>
        <a href="#">
          <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
          Root
        </a>
      </BreadcrumbComponent.Element>
      <BreadcrumbComponent.Element>
        <a href="#">
          <FontAwesomeIcon icon={faChartBar} className="mr-2" />
          first Child
        </a>
      </BreadcrumbComponent.Element>
      <BreadcrumbComponent.Element isActive>
        <a href="#">
          <FontAwesomeIcon icon={faDizzy} className="mr-2" />
          Second Child
        </a>
      </BreadcrumbComponent.Element>
    </>
  ),
};

IconBreadcrumb.storyName = 'BreadCrumb with icons';
