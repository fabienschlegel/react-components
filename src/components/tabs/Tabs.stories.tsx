/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import { Story, Meta } from '@storybook/react/types-6-0';

import { faAddressBook, faChartBar, faDizzy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Tabs, { ITabsProps } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  decorators: [
    (StoryComponent) => (
      <Router initialEntries={['/tab1']}>
        <div style={{ margin: '0px auto', width: 500 }}>
          <Routes>
            <Route path="/tab1" element={<StoryComponent />} />
            <Route path="/tab2" element={<StoryComponent />} />
            <Route path="/tab3" element={<StoryComponent />} />
          </Routes>
        </div>
      </Router>
    ),
  ],
  args: {},
} as Meta;

const Template: Story<ITabsProps> = (args) => {
  const { children } = args;
  return <Tabs {...args}>{children}</Tabs>;
};

export const BasicTabs = Template.bind({});
BasicTabs.args = {
  children: (
    <>
      <Tabs.Element to="/tab1">tab1</Tabs.Element>
      <Tabs.Element to="/tab2">tab2</Tabs.Element>
      <Tabs.Element to="/tab3">tab3</Tabs.Element>
    </>
  ),
};

export const IconTabs = Template.bind({});
IconTabs.args = {
  children: (
    <>
      <Tabs.Element to="/tab1">
        <span>
          <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
          First Tab
        </span>
      </Tabs.Element>
      <Tabs.Element to="/tab2">
        <span>
          <FontAwesomeIcon icon={faChartBar} className="mr-2" />
          Second Tab
        </span>
      </Tabs.Element>
      <Tabs.Element to="/tab3">
        <span>
          <FontAwesomeIcon icon={faDizzy} className="mr-2" />
          Three Tab
        </span>
      </Tabs.Element>
    </>
  ),
};
