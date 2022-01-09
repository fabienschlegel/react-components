/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Level from './Level';

describe('Test Level', () => {
  const leftItems = (
    <Level.Left>
      <Level.Item>Link 1</Level.Item>
      <Level.Item>Link 2</Level.Item>
      <Level.Item>Link 3</Level.Item>
    </Level.Left>
  );

  const rightItems = (
    <Level.Right>
      <Level.Item>Link 1</Level.Item>
      <Level.Item>Link 2</Level.Item>
      <Level.Item>Link 3</Level.Item>
    </Level.Right>
  );

  it('Mount the component', () => {
    const wrapper = mount(
      <Level>
        {leftItems}
        {rightItems}
      </Level>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Mount the component with level items', () => {
    const wrapper = mount(
      <Level isMobile>
        <Level.Item>Link 1</Level.Item>
        <Level.Item>Link 2</Level.Item>
        <Level.Item>Link 3</Level.Item>
      </Level>
    );
    expect(wrapper.length).toEqual(1);
  });
});
