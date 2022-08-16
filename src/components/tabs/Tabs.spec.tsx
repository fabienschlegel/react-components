/* eslint-disable no-undef,import/no-extraneous-dependencies */
import React from 'react';

import { mount } from 'enzyme';

import { MemoryRouter as Router } from 'react-router-dom';

import Tabs from './Tabs';

describe('Test Tabs', () => {
  it('Mount the component', () => {
    const wrapper = mount(
      <Router initialEntries={['/tab1']}>
        <Tabs>
          <Tabs.Element to="/tab1">tab1</Tabs.Element>
          <Tabs.Element to="/tab2">tab2</Tabs.Element>
          <Tabs.Element to="/tab3">tab3</Tabs.Element>
        </Tabs>
      </Router>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Mount the component with anchor link', () => {
    const wrapper = mount(
      <Tabs>
        <Tabs.AnchorElement isActive to="/tab1">
          tab1
        </Tabs.AnchorElement>
        <Tabs.AnchorElement to="/tab2">tab2</Tabs.AnchorElement>
        <Tabs.AnchorElement to="/tab3">tab3</Tabs.AnchorElement>
      </Tabs>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Tabs are aligned to right', () => {
    const wrapper = mount(
      <Router initialEntries={['/tab1']}>
        <Tabs alignment="is-right">
          <Tabs.Element to="/tab1">tab1</Tabs.Element>
          <Tabs.Element to="/tab2">tab2</Tabs.Element>
          <Tabs.Element to="/tab3">tab3</Tabs.Element>
        </Tabs>
      </Router>
    );

    const content = wrapper.find('.tabs').hasClass('is-right');
    expect(content).toBeTruthy();
  });

  it('Tabs are small', () => {
    const wrapper = mount(
      <Router initialEntries={['/tab1']}>
        <Tabs size="is-small">
          <Tabs.Element to="/tab1">tab1</Tabs.Element>
          <Tabs.Element to="/tab2">tab2</Tabs.Element>
          <Tabs.Element to="/tab3">tab3</Tabs.Element>
        </Tabs>
      </Router>
    );

    const content = wrapper.find('.tabs').hasClass('is-small');
    expect(content).toBeTruthy();
  });

  it('Tabs are boxed', () => {
    const wrapper = mount(
      <Router initialEntries={['/tab1']}>
        <Tabs isBoxed>
          <Tabs.Element to="/tab1">tab1</Tabs.Element>
          <Tabs.Element to="/tab2">tab2</Tabs.Element>
          <Tabs.Element to="/tab3">tab3</Tabs.Element>
        </Tabs>
      </Router>
    );

    const content = wrapper.find('.tabs').hasClass('is-boxed');
    expect(content).toBeTruthy();
  });

  it('Tabs are toggle', () => {
    const wrapper = mount(
      <Router initialEntries={['/tab1']}>
        <Tabs isToggle>
          <Tabs.Element to="/tab1">tab1</Tabs.Element>
          <Tabs.Element to="/tab2">tab2</Tabs.Element>
          <Tabs.Element to="/tab3">tab3</Tabs.Element>
        </Tabs>
      </Router>
    );

    const content = wrapper.find('.tabs').hasClass('is-toggle');
    expect(content).toBeTruthy();
  });

  it('Tabs are toggle and rounded', () => {
    const wrapper = mount(
      <Router initialEntries={['/tab1']}>
        <Tabs isToggle isToggleRounded>
          <Tabs.Element to="/tab1">tab1</Tabs.Element>
          <Tabs.Element to="/tab2">tab2</Tabs.Element>
          <Tabs.Element to="/tab3">tab3</Tabs.Element>
        </Tabs>
      </Router>
    );

    const content = wrapper.find('.tabs').hasClass('is-toggle-rounded');
    expect(content).toBeTruthy();
  });

  it('Tabs are full width', () => {
    const wrapper = mount(
      <Router initialEntries={['/tab1']}>
        <Tabs isFullWidth>
          <Tabs.Element to="/tab1">tab1</Tabs.Element>
          <Tabs.Element to="/tab2">tab2</Tabs.Element>
          <Tabs.Element to="/tab3">tab3</Tabs.Element>
        </Tabs>
      </Router>
    );

    const content = wrapper.find('.tabs').hasClass('is-fullwidth');
    expect(content).toBeTruthy();
  });
});
