import React from 'react';

import { mount } from 'enzyme';

import Column from '../column/Column';

import Columns, { ColumnsGap } from './Columns';

describe('Test Columns', () => {
  const column = (content: string) => <Column>{content}</Column>;

  it('Mount Columns', () => {
    const wrapper = mount(
      <Columns>
        <p>Text Columns</p>
      </Columns>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Columns works on mobile', () => {
    const wrapper = mount(<Columns isMobile>{column('Text Column')}</Columns>);

    const columns = wrapper.find('.columns').hasClass('is-mobile');
    expect(columns).toBeTruthy();
  });

  it('Column works on desktop', () => {
    const wrapper = mount(<Columns isDesktop>{column('Text Column')}</Columns>);

    const columns = wrapper.find('.columns').hasClass('is-desktop');
    expect(columns).toBeTruthy();
  });

  it('Columns are gapless', () => {
    const wrapper = mount(<Columns isGapLess>{column('Text Column')}</Columns>);

    const columns = wrapper.find('.columns').hasClass('is-gapless');
    expect(columns).toBeTruthy();
  });

  it('Columns are multiline', () => {
    const wrapper = mount(<Columns isMultiline>{column('Text Column')}</Columns>);

    const columns = wrapper.find('.columns').hasClass('is-multiline');
    expect(columns).toBeTruthy();
  });

  it('Columns are vertically centered', () => {
    const wrapper = mount(<Columns isVCentered>{column('Text Column')}</Columns>);

    const columns = wrapper.find('.columns').hasClass('is-vcentered');
    expect(columns).toBeTruthy();
  });

  it('Columns are centered', () => {
    const wrapper = mount(<Columns isCentered>{column('Text Column')}</Columns>);

    const columns = wrapper.find('.columns').hasClass('is-centered');
    expect(columns).toBeTruthy();
  });

  it('Columns with gap for mobile', () => {
    const wrapper = mount(
      <Columns mobileColumnsGap={ColumnsGap.is1}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-1-mobile');
    const columnsAreVariable = wrapper.find('.columns').hasClass('is-variable');

    expect(columns).toBeTruthy();
    expect(columnsAreVariable).toBeTruthy();
  });

  it('Columns with gap for tablet', () => {
    const wrapper = mount(
      <Columns tabletColumnsGap={ColumnsGap.is1}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-1-tablet');

    expect(columns).toBeTruthy();
  });

  it('Columns with gap for desktop', () => {
    const wrapper = mount(
      <Columns desktopColumnsGap={ColumnsGap.is1}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-1-desktop');

    expect(columns).toBeTruthy();
  });

  it('Columns with gap for widescreen', () => {
    const wrapper = mount(
      <Columns widescreenColumnsGap={ColumnsGap.is1}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-1-widescreen');

    expect(columns).toBeTruthy();
  });

  it('Columns with gap for fullhd', () => {
    const wrapper = mount(
      <Columns fullhdColumnsGap={ColumnsGap.is1}>{column('Text Column')}</Columns>
    );

    const columns = wrapper.find('.columns').hasClass('is-1-fullhd');

    expect(columns).toBeTruthy();
  });
});
