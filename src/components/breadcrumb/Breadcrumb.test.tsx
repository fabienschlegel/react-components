import React from 'react';

import { render, screen } from '@testing-library/react';

import Breadcrumb from './Breadcrumb';

describe('Test Breadcrumb', () => {
  const breabcrumbElements = (
    <>
      <Breadcrumb.Element>root</Breadcrumb.Element>
      <Breadcrumb.Element>firstChild</Breadcrumb.Element>
      <Breadcrumb.Element isActive>secondChild</Breadcrumb.Element>
    </>
  );
  it('Mount the component', () => {
    render(<Breadcrumb>{breabcrumbElements}</Breadcrumb>);

    expect(screen).toBeDefined();
  });

  it('is aligned to right', () => {
    const { container } = render(
      <Breadcrumb alignment="is-right">{breabcrumbElements}</Breadcrumb>
    );

    const content = container.getElementsByClassName('is-right');

    expect(content).toBeTruthy();
  });

  it('separator is arrow', () => {
    const { container } = render(
      <Breadcrumb separator="has-arrow-separator">{breabcrumbElements}</Breadcrumb>
    );

    const content = container.getElementsByClassName('has-arrow-separator');

    expect(content).toBeTruthy();
  });

  it('is small', () => {
    const { container } = render(<Breadcrumb size="is-small">{breabcrumbElements}</Breadcrumb>);

    const content = container.getElementsByClassName('is-small');

    expect(content).toBeTruthy();
  });
});
