import React from 'react';

import { render, screen } from '@testing-library/react';

import Column from '../column/Column';

import Columns from './Columns';

describe('Test Columns', () => {
  const column = (content: string) => <Column>{content}</Column>;

  it('Mount the component', () => {
    render(
      <Columns>
        <p>Text Columns</p>
      </Columns>
    );

    expect(screen).toBeDefined();
  });

  it('works on mobile', () => {
    const { container } = render(<Columns isMobile>{column('Text Column')}</Columns>);

    const columns = container.getElementsByClassName('is-mobile');

    expect(columns).toBeTruthy();
  });

  it('works on desktop', () => {
    const { container } = render(<Columns isDesktop>{column('Text Column')}</Columns>);

    const columns = container.getElementsByClassName('is-desktop');

    expect(columns).toBeTruthy();
  });

  it('are gapless', () => {
    const { container } = render(<Columns isGapless>{column('Text Column')}</Columns>);

    const columns = container.getElementsByClassName('is-gapless');

    expect(columns).toBeTruthy();
  });

  it('are multiline', () => {
    const { container } = render(<Columns isMultiline>{column('Text Column')}</Columns>);

    const columns = container.getElementsByClassName('is-multiline');

    expect(columns).toBeTruthy();
  });

  it('are vertically centered', () => {
    const { container } = render(<Columns isVcentered>{column('Text Column')}</Columns>);

    const columns = container.getElementsByClassName('is-vcentered');

    expect(columns).toBeTruthy();
  });

  it('are centered', () => {
    const { container } = render(<Columns isCentered>{column('Text Column')}</Columns>);

    const columns = container.getElementsByClassName('is-centered');

    expect(columns).toBeTruthy();
  });

  it('with gap for mobile', () => {
    const { container } = render(
      <Columns responsiveColumnsGap={{ mobile: 'is-1' }}>{column('Text Column')}</Columns>
    );

    const columns = container.getElementsByClassName('is-1-mobile');
    const columnsAreVariable = container.getElementsByClassName('is-variable');

    expect(columns).toBeTruthy();
    expect(columnsAreVariable).toBeTruthy();
  });

  it('with gap for tablet', () => {
    const { container } = render(
      <Columns responsiveColumnsGap={{ tablet: 'is-1' }}>{column('Text Column')}</Columns>
    );

    const columns = container.getElementsByClassName('is-1-tablet');

    expect(columns).toBeTruthy();
  });

  it('with gap for desktop', () => {
    const { container } = render(
      <Columns responsiveColumnsGap={{ desktop: 'is-1' }}>{column('Text Column')}</Columns>
    );

    const columns = container.getElementsByClassName('is-1-desktop');

    expect(columns).toBeTruthy();
  });

  it('with gap for widescreen', () => {
    const { container } = render(
      <Columns responsiveColumnsGap={{ widescreen: 'is-1' }}>{column('Text Column')}</Columns>
    );

    const columns = container.getElementsByClassName('is-1-widescreen');

    expect(columns).toBeTruthy();
  });

  it('with gap for fullhd', () => {
    const { container } = render(
      <Columns responsiveColumnsGap={{ fullhd: 'is-1' }}>{column('Text Column')}</Columns>
    );

    const columns = container.getElementsByClassName('is-1-fullhd');

    expect(columns).toBeTruthy();
  });
});
