import React from 'react';

import { render, screen } from '@testing-library/react';

import Column from './Column';

describe('Test Column', () => {
  it('Mount the component', () => {
    render(<Column>Text Column</Column>);

    expect(screen).toBeDefined();
  });

  it('is full', () => {
    const { container } = render(<Column columnSize="is-full">Text Column</Column>);

    const column = container.getElementsByClassName('is-full');

    expect(column).toBeTruthy();
  });

  it('has offset', () => {
    const offset = 2;
    const { container } = render(<Column offset={offset}>Text Column</Column>);

    const column = container.getElementsByClassName(`is-offset-${offset}`);

    expect(column).toBeTruthy();
  });

  it('is 4 for mobile', () => {
    const { container } = render(
      <Column responsiveColumnSize={{ mobile: 'is-4' }}>Text Column</Column>
    );

    const column = container.getElementsByClassName('is-4-mobile');

    expect(column).toBeTruthy();
  });

  it('is 4 for tablet', () => {
    const { container } = render(
      <Column responsiveColumnSize={{ tablet: 'is-4' }}>Text Column</Column>
    );

    const column = container.getElementsByClassName('is-4-tablet');

    expect(column).toBeTruthy();
  });

  it('is 4 for desktop', () => {
    const { container } = render(
      <Column responsiveColumnSize={{ desktop: 'is-4' }}>Text Column</Column>
    );

    const column = container.getElementsByClassName('is-4-desktop');

    expect(column).toBeTruthy();
  });

  it('is 4 for widescreen', () => {
    const { container } = render(
      <Column responsiveColumnSize={{ widescreen: 'is-4' }}>Text Column</Column>
    );

    const column = container.getElementsByClassName('is-4-widescreen');

    expect(column).toBeTruthy();
  });

  it('is 4 for fullhd', () => {
    const { container } = render(
      <Column responsiveColumnSize={{ fullhd: 'is-4' }}>Text Column</Column>
    );

    const column = container.getElementsByClassName('is-4-fullhd');

    expect(column).toBeTruthy();
  });
});
