/* eslint-disable no-undef */
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { mount } from 'enzyme';

import MenuItem from './MenuItem';

describe('Test MenuItem', () => {
  it('Mount the component', () => {
    const wrapper = mount(
      <Router>
        <MenuItem to="/">Menu Item Content</MenuItem>
      </Router>
    );
    expect(wrapper.length).toEqual(1);
  });
});
