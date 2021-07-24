/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Level from './Level';

describe('Test Level', () => {
  const leftItems = [
    { children: 'Link 1' },
    { children: 'Link 2' },
    { children: 'Link 3' },
  ];

  const rightItems = [
    { children: 'Link 1' },
    { children: 'Link 2' },
    { children: 'Link 3' },
  ];

  it('Mount Level', () => {
    const wrapper = mount(<Level leftItems={leftItems} rightItems={rightItems} />);
    expect(wrapper.length).toEqual(1);
  });

  it('Mount Level with level items', () => {
    const wrapper = mount(<Level levelItems={leftItems} isMobile />);
    expect(wrapper.length).toEqual(1);
  });
});
