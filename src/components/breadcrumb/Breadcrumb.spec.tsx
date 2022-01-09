/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Breadcrumb from './Breadcrumb';

describe('Test Breadcrumb', () => {
  const breabcrumbElements = (
    <>
      <Breadcrumb.Element>root</Breadcrumb.Element>
      <Breadcrumb.Element>firstChild</Breadcrumb.Element>
      <Breadcrumb.Element isActive>secondChild</Breadcrumb.Element>
    </>
  );
  it('Mount the component', () => {
    const wrapper = mount(<Breadcrumb>{breabcrumbElements}</Breadcrumb>);
    expect(wrapper.length).toEqual(1);
  });

  it('is aligned to right', () => {
    const wrapper = mount(<Breadcrumb alignment="is-right">{breabcrumbElements}</Breadcrumb>);

    const content = wrapper.find('.breadcrumb').hasClass('is-right');
    expect(content).toBeTruthy();
  });

  it('separator is arrow', () => {
    const wrapper = mount(
      <Breadcrumb separator="has-arrow-separator">{breabcrumbElements}</Breadcrumb>
    );

    const content = wrapper.find('.breadcrumb').hasClass('has-arrow-separator');
    expect(content).toBeTruthy();
  });

  it('is small', () => {
    const wrapper = mount(<Breadcrumb size="is-small">{breabcrumbElements}</Breadcrumb>);

    const content = wrapper.find('.breadcrumb').hasClass('is-small');
    expect(content).toBeTruthy();
  });
});
