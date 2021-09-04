/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import MenuNestedList from './MenuNestedList';

describe('Test MenuNestedList', () => {
  it('mount component', () => {
    const wrapper = mount(
      <MenuNestedList label="Menu Nested List Label">Menu List Content</MenuNestedList>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('nested list is open', () => {
    const wrapper = mount(
      <MenuNestedList label="Menu Nested List Label">Menu List Content</MenuNestedList>
    );

    const button = wrapper.find('a');

    button.simulate('click');

    const nestedMenu = wrapper.find('.menu-list');

    expect(nestedMenu.get(0).props.style).toHaveProperty('display', 'block');
    expect(wrapper.find('a').hasClass('is-active')).toBeTruthy();
  });
});
