import React, { FunctionComponent } from 'react';

import { Link, Route, MemoryRouter, Routes, useLocation } from 'react-router-dom';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import mdx from './Tabs.mdx';

import { faAddressBook, faChartBar, faDizzy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Tabs, { TabsProps } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,

  decorators: [
    (StoryComponent) => (
      <MemoryRouter initialEntries={['/tab1']}>
        <div style={{ margin: '0px auto', width: 500 }}>
          <Routes>
            <Route path="/tab1" element={<StoryComponent />} />
            <Route path="/tab2" element={<StoryComponent />} />
            <Route path="/tab3" element={<StoryComponent />} />
          </Routes>
        </div>
      </MemoryRouter>
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
} as ComponentMeta<FunctionComponent<TabsProps>>;

export const BasicTabs: ComponentStory<FunctionComponent<TabsProps>> = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Tabs>
      <Tabs.Element as={Link} to="/tab1" isActive={pathname === '/tab1'}>
        tab1
      </Tabs.Element>
      <Tabs.Element as={Link} to="/tab2" isActive={pathname === '/tab2'}>
        tab2
      </Tabs.Element>
      <Tabs.Element as={Link} to="/tab3" isActive={pathname === '/tab3'}>
        tab3
      </Tabs.Element>
    </Tabs>
  );
};

export const IconTabs: ComponentStory<FunctionComponent<TabsProps>> = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Tabs>
      <Tabs.Element as={Link} to="/tab1" isActive={pathname === '/tab1'}>
        <span>
          <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
          First Tab
        </span>
      </Tabs.Element>
      <Tabs.Element as={Link} to="/tab2" isActive={pathname === '/tab2'}>
        <span>
          <FontAwesomeIcon icon={faChartBar} className="mr-2" />
          Second Tab
        </span>
      </Tabs.Element>
      <Tabs.Element as={Link} to="/tab3" isActive={pathname === '/tab3'}>
        <span>
          <FontAwesomeIcon icon={faDizzy} className="mr-2" />
          Three Tab
        </span>
      </Tabs.Element>
    </Tabs>
  );
};
