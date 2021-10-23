/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import LevelItem from './LevelItem';

describe('Test LevelItem', () => {
  it('Mount Level', () => {
    const wrapper = mount(<LevelItem isCentered>Text Level</LevelItem>);
    expect(wrapper.length).toEqual(1);
  });
});
