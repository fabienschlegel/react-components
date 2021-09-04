import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import { ColumnSize } from './types';

import Column from './Column';

describe('Test Column', () => {
  it('Mount Column', () => {
    const wrapper = mount(<Column>Text Column</Column>);
    expect(wrapper.length).toEqual(1);
  });

  it('Column is full', () => {
    const wrapper = mount(<Column columnSize={ColumnSize.isFull}>Text Column</Column>);

    const column = wrapper.find('.column').hasClass('is-full');
    expect(column).toBeTruthy();
  });

  it('Column has offset', () => {
    const offset = 2;
    const wrapper = mount(<Column offset={offset}>Text Column</Column>);

    const column = wrapper.find('.column').hasClass(`is-offset-${offset}`);
    expect(column).toBeTruthy();
  });

  it('Column is 4 for mobile', () => {
    const wrapper = mount(<Column mobileColumnSize={ColumnSize.is4}>Text Column</Column>);

    const column = wrapper.find('.column').hasClass('is-4-mobile');
    expect(column).toBeTruthy();
  });

  it('Column is 4 for tablet', () => {
    const wrapper = mount(<Column tabletColumnSize={ColumnSize.is4}>Text Column</Column>);

    const column = wrapper.find('.column').hasClass('is-4-tablet');
    expect(column).toBeTruthy();
  });

  it('Column is 4 for desktop', () => {
    const wrapper = mount(<Column desktopColumnSize={ColumnSize.is4}>Text Column</Column>);

    const column = wrapper.find('.column').hasClass('is-4-desktop');
    expect(column).toBeTruthy();
  });

  it('Column is 4 for widescreen', () => {
    const wrapper = mount(<Column widescreenColumnSize={ColumnSize.is4}>Text Column</Column>);

    const column = wrapper.find('.column').hasClass('is-4-widescreen');
    expect(column).toBeTruthy();
  });

  it('Column is 4 for fullhd', () => {
    const wrapper = mount(<Column fullhdColumnSize={ColumnSize.is4}>Text Column</Column>);

    const column = wrapper.find('.column').hasClass('is-4-fullhd');
    expect(column).toBeTruthy();
  });
});
