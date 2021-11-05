/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import { BrowserRouter as Router } from 'react-router-dom';

import Dropdown from './Dropdown';

describe('Test Dropdown', () => {
  const items = [
    {
      id: '0',
      content: <p>First Item</p>,
    },
    {
      id: '1',
      content: <p>Second Item</p>,
      hasDivider: true,
    },
    {
      id: '2',
      content: 'This item is a link',
      to: '/fakeurl',
    },
    {
      id: '3',
      content: 'This item is an active link',
      to: '/fakeurl2',
      isActive: true,
    },
  ];

  it('Mount the component', () => {
    const wrapper = mount(
      <Router>
        <Dropdown title="Dropdown button" items={items} />
      </Router>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('is active', () => {
    const wrapper = mount(
      <Router>
        <Dropdown title="Dropdown button" items={items} isActive />
      </Router>
    );
    const content = wrapper.find('.dropdown').hasClass('is-active');
    expect(content).toBeTruthy();
  });

  it('is hoverable', () => {
    const wrapper = mount(
      <Router>
        <Dropdown title="Dropdown button" items={items} isHoverable />
      </Router>
    );

    const content = wrapper.find('.dropdown').hasClass('is-hoverable');
    expect(content).toBeTruthy();
  });

  it('is aligned to right', () => {
    const wrapper = mount(
      <Router>
        <Dropdown title="Dropdown button" items={items} states={{ 'is-right': true }} />
      </Router>
    );

    const content = wrapper.find('.dropdown').hasClass('is-right');
    expect(content).toBeTruthy();
  });

  it('is up', () => {
    const wrapper = mount(
      <Router>
        <Dropdown title="Dropdown button" items={items} states={{ 'is-up': true }} />
      </Router>
    );

    const content = wrapper.find('.dropdown').hasClass('is-up');
    expect(content).toBeTruthy();
  });

  it('click event', () => {
    const wrapper = mount(
      <Router>
        <Dropdown title="Dropdown button" items={items} />
      </Router>
    );

    const contentIsNotVisisble = wrapper.find('.dropdown').hasClass('is-active');

    expect(contentIsNotVisisble).toBeFalsy();

    const button = wrapper.find('.button');

    button.simulate('click');

    const content = wrapper.find('.dropdown').hasClass('is-active');

    expect(content).toBeTruthy();
  });

  it('click event with hoverable prop', () => {
    const wrapper = mount(
      <Router>
        <Dropdown title="Dropdown button" items={items} isHoverable />
      </Router>
    );

    const button = wrapper.find('.button');

    button.simulate('click');

    const content = wrapper.find('.dropdown').hasClass('is-active');

    expect(content).toBeFalsy();
  });
});
