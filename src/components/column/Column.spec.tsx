import React from 'react';

import { mount } from 'enzyme';

import Column from './Column';

describe('Test Column', () => {
  it('Mount the component', () => {
    const wrapper = mount(<Column>Text Column</Column>);
    expect(wrapper.length).toEqual(1);
  });

  it('is full', () => {
    const wrapper = mount(<Column columnSize="is-full">Text Column</Column>);

    const column = wrapper.find('.column').hasClass('is-full');
    expect(column).toBeTruthy();
  });

  it('has offset', () => {
    const offset = 2;
    const wrapper = mount(<Column offset={offset}>Text Column</Column>);

    const column = wrapper.find('.column').hasClass(`is-offset-${offset}`);
    expect(column).toBeTruthy();
  });

  it('is 4 for mobile', () => {
    const wrapper = mount(<Column responsiveColumnSize={{ mobile: 'is-4' }}>Text Column</Column>);

    const column = wrapper.find('.column').hasClass('is-4-mobile');
    expect(column).toBeTruthy();
  });

  it('is 4 for tablet', () => {
    const wrapper = mount(<Column responsiveColumnSize={{ tablet: 'is-4' }}>Text Column</Column>);

    const column = wrapper.find('.column').hasClass('is-4-tablet');
    expect(column).toBeTruthy();
  });

  it('is 4 for desktop', () => {
    const wrapper = mount(<Column responsiveColumnSize={{ desktop: 'is-4' }}>Text Column</Column>);

    const column = wrapper.find('.column').hasClass('is-4-desktop');
    expect(column).toBeTruthy();
  });

  it('is 4 for widescreen', () => {
    const wrapper = mount(
      <Column responsiveColumnSize={{ widescreen: 'is-4' }}>Text Column</Column>
    );

    const column = wrapper.find('.column').hasClass('is-4-widescreen');
    expect(column).toBeTruthy();
  });

  it('is 4 for fullhd', () => {
    const wrapper = mount(<Column responsiveColumnSize={{ fullhd: 'is-4' }}>Text Column</Column>);

    const column = wrapper.find('.column').hasClass('is-4-fullhd');
    expect(column).toBeTruthy();
  });
});
