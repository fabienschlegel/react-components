import React from 'react';

import { mount } from 'enzyme';

import Column from '../column/Column';

import Columns from './Columns';

describe('Test Columns', () => {
  const column = (content: string) => <Column>{content}</Column>;

  it('Mount the components', () => {
    const wrapper = mount(
      <Columns>
        <p>Text Columns</p>
      </Columns>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('works on mobile', () => {
    const wrapper = mount(
      <Columns options={{ 'is-mobile': true }}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-mobile');
    expect(columns).toBeTruthy();
  });

  it('works on desktop', () => {
    const wrapper = mount(
      <Columns options={{ 'is-desktop': true }}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-desktop');
    expect(columns).toBeTruthy();
  });

  it('are gapless', () => {
    const wrapper = mount(
      <Columns options={{ 'is-gapless': true }}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-gapless');
    expect(columns).toBeTruthy();
  });

  it('are multiline', () => {
    const wrapper = mount(
      <Columns options={{ 'is-multiline': true }}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-multiline');
    expect(columns).toBeTruthy();
  });

  it('are vertically centered', () => {
    const wrapper = mount(
      <Columns options={{ 'is-vcentered': true }}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-vcentered');
    expect(columns).toBeTruthy();
  });

  it('are centered', () => {
    const wrapper = mount(
      <Columns options={{ 'is-centered': true }}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-centered');
    expect(columns).toBeTruthy();
  });

  it('with gap for mobile', () => {
    const wrapper = mount(
      <Columns responsiveColumnsGap={{ mobile: 'is-1' }}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-1-mobile');
    const columnsAreVariable = wrapper.find('.columns').hasClass('is-variable');

    expect(columns).toBeTruthy();
    expect(columnsAreVariable).toBeTruthy();
  });

  it('with gap for tablet', () => {
    const wrapper = mount(
      <Columns responsiveColumnsGap={{ tablet: 'is-1' }}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-1-tablet');

    expect(columns).toBeTruthy();
  });

  it('with gap for desktop', () => {
    const wrapper = mount(
      <Columns responsiveColumnsGap={{ desktop: 'is-1' }}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-1-desktop');

    expect(columns).toBeTruthy();
  });

  it('with gap for widescreen', () => {
    const wrapper = mount(
      <Columns responsiveColumnsGap={{ widescreen: 'is-1' }}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-1-widescreen');

    expect(columns).toBeTruthy();
  });

  it('with gap for fullhd', () => {
    const wrapper = mount(
      <Columns responsiveColumnsGap={{ fullhd: 'is-1' }}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-1-fullhd');

    expect(columns).toBeTruthy();
  });
});
