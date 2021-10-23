/* eslint-disable no-undef,import/no-extraneous-dependencies */
import React from 'react';

import { mount } from 'enzyme';

import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Tabs from './Tabs';

import { Alignment, Size } from './types';

describe('Test Tabs', () => {
  const history = createMemoryHistory({ initialEntries: ['/tab1'] });

  const tabs = [
    { name: 'first tab', to: '/tab1' },
    { name: 'second tab', to: '/tab2' },
    { name: 'three tab', to: '/tab3' },
  ];

  it('Mount Tabs', () => {
    const wrapper = mount(
      <Router history={history}>
        <Tabs tabs={tabs} />
      </Router>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Tabs are aligned to right', () => {
    const wrapper = mount(
      <Router history={history}>
        <Tabs tabs={tabs} alignment={Alignment.isRight} />
      </Router>
    );

    const content = wrapper.find('.tabs').hasClass('is-right');
    expect(content).toBeTruthy();
  });

  it('Tabs are small', () => {
    const wrapper = mount(
      <Router history={history}>
        <Tabs tabs={tabs} size={Size.isSmall} />
      </Router>
    );

    const content = wrapper.find('.tabs').hasClass('is-small');
    expect(content).toBeTruthy();
  });

  it('Tabs are boxed', () => {
    const wrapper = mount(
      <Router history={history}>
        <Tabs tabs={tabs} isBoxed />
      </Router>
    );

    const content = wrapper.find('.tabs').hasClass('is-boxed');
    expect(content).toBeTruthy();
  });

  it('Tabs are toggle', () => {
    const wrapper = mount(
      <Router history={history}>
        <Tabs tabs={tabs} isToggle />
      </Router>
    );

    const content = wrapper.find('.tabs').hasClass('is-toggle');
    expect(content).toBeTruthy();
  });

  it('Tabs are toggle and rounded', () => {
    const wrapper = mount(
      <Router history={history}>
        <Tabs tabs={tabs} isToggle isToggleRounded />
      </Router>
    );

    const content = wrapper.find('.tabs').hasClass('is-toggle-rounded');
    expect(content).toBeTruthy();
  });

  it('Tabs are full width', () => {
    const wrapper = mount(
      <Router history={history}>
        <Tabs tabs={tabs} isFullWidth />
      </Router>
    );

    const content = wrapper.find('.tabs').hasClass('is-fullwidth');
    expect(content).toBeTruthy();
  });
});
