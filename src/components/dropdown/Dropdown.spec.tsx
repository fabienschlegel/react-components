/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import { BrowserRouter as Router } from 'react-router-dom';

import Dropdown from './Dropdown';

describe('Test Dropdown', () => {
  const items = (
    <>
      <Dropdown.Item>First Item</Dropdown.Item>
      <Dropdown.Item>Second Item</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item to="/fakeurl">This item is a link</Dropdown.Item>
      <Dropdown.Item isActive to="/fakeurl">
        This item is an active link
      </Dropdown.Item>
    </>
  );

  it('Mount the component', () => {
    const wrapper = mount(
      <Router>
        <Dropdown title="Dropdown button">{items}</Dropdown>
      </Router>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('is active', () => {
    const wrapper = mount(
      <Router>
        <Dropdown title="Dropdown button" isActive>
          {items}
        </Dropdown>
      </Router>
    );
    const content = wrapper.find('.dropdown').hasClass('is-active');
    expect(content).toBeTruthy();
  });

  it('is hoverable', () => {
    const wrapper = mount(
      <Router>
        <Dropdown title="Dropdown button" isHoverable>
          {items}
        </Dropdown>
      </Router>
    );

    const content = wrapper.find('.dropdown').hasClass('is-hoverable');
    expect(content).toBeTruthy();
  });

  it('is aligned to right', () => {
    const wrapper = mount(
      <Router>
        <Dropdown title="Dropdown button" states={{ 'is-right': true }}>
          {items}
        </Dropdown>
      </Router>
    );

    const content = wrapper.find('.dropdown').hasClass('is-right');
    expect(content).toBeTruthy();
  });

  it('is up', () => {
    const wrapper = mount(
      <Router>
        <Dropdown title="Dropdown button" states={{ 'is-up': true }}>
          {items}
        </Dropdown>
      </Router>
    );

    const content = wrapper.find('.dropdown').hasClass('is-up');
    expect(content).toBeTruthy();
  });

  it('click event', () => {
    const wrapper = mount(
      <Router>
        <Dropdown title="Dropdown button">{items}</Dropdown>
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
        <Dropdown title="Dropdown button" isHoverable>
          {items}
        </Dropdown>
      </Router>
    );

    const button = wrapper.find('.button');

    button.simulate('click');

    const content = wrapper.find('.dropdown').hasClass('is-active');

    expect(content).toBeFalsy();
  });
});
