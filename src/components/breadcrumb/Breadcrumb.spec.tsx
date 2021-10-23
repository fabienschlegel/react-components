/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import BreadcrumbElement from '../breadcrumb-element/BreadcrumbElement';

import Breadcrumb from './Breadcrumb';

describe('Test Breadcrumb', () => {
  const breabcrumbElements = [
    <BreadcrumbElement key={1}>root</BreadcrumbElement>,
    <BreadcrumbElement key={2}>firstChild</BreadcrumbElement>,
    <BreadcrumbElement key={3} isActive>
      secondChild
    </BreadcrumbElement>,
  ];

  it('Mount Breadcrumb', () => {
    const wrapper = mount(<Breadcrumb breadcrumbElements={breabcrumbElements} />);
    expect(wrapper.length).toEqual(1);
  });

  it('Breadcrumb is aligned to right', () => {
    const wrapper = mount(
      <Breadcrumb breadcrumbElements={breabcrumbElements} alignment="is-right" />
    );

    const content = wrapper.find('.breadcrumb').hasClass('is-right');
    expect(content).toBeTruthy();
  });

  it('Breadcrumb separator is arrow', () => {
    const wrapper = mount(
      <Breadcrumb breadcrumbElements={breabcrumbElements} separator="has-arrow-separator" />
    );

    const content = wrapper.find('.breadcrumb').hasClass('has-arrow-separator');
    expect(content).toBeTruthy();
  });

  it('Breadcrumb is small', () => {
    const wrapper = mount(<Breadcrumb breadcrumbElements={breabcrumbElements} size="is-small" />);

    const content = wrapper.find('.breadcrumb').hasClass('is-small');
    expect(content).toBeTruthy();
  });
});
