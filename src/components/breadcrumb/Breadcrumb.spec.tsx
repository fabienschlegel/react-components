/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import { BrowserRouter as Router } from 'react-router-dom';

import Breadcrumb from './Breadcrumb';

import { Alignment, Separator, Size } from './types';

describe('Test Breadcrumb', () => {
  const breabcrumbElements = [
    { name: 'root', to: '/root' },
    { name: 'firstChild', to: '/child1' },
    { name: 'secondChild', to: '/child2', isActive: true },
  ];

  it('Mount Breadcrumb', () => {
    const wrapper = mount(
      <Router>
        <Breadcrumb breadcrumbElement={breabcrumbElements} />
      </Router>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Breadcrumb is aligned to right', () => {
    const wrapper = mount(
      <Router>
        <Breadcrumb
          breadcrumbElement={breabcrumbElements}
          alignment={Alignment.isRight}
        />
      </Router>
    );

    const content = wrapper.find('.breadcrumb').hasClass('is-right');
    expect(content).toBeTruthy();
  });

  it('Breadcrumb separator is arrow', () => {
    const wrapper = mount(
      <Router>
        <Breadcrumb
          breadcrumbElement={breabcrumbElements}
          separator={Separator.hasArrow}
        />
      </Router>
    );

    const content = wrapper.find('.breadcrumb').hasClass('has-arrow-separator');
    expect(content).toBeTruthy();
  });

  it('Breadcrumb is small', () => {
    const wrapper = mount(
      <Router>
        <Breadcrumb breadcrumbElement={breabcrumbElements} size={Size.isSmall} />
      </Router>
    );

    const content = wrapper.find('.breadcrumb').hasClass('is-small');
    expect(content).toBeTruthy();
  });
});
