import React from 'react';

import { render, screen } from '@testing-library/react';

import Image from './Image';

describe('Test Image', () => {
  it('Mount the component', () => {
    render(<Image src="/fake-img-url.png" alt="alternative text" />);

    expect(screen).toBeDefined();
  });

  it('is rounded', () => {
    const { container } = render(
      <Image src="/fake-img-url.png" alt="alternative text" isRounded />
    );

    const img = container.getElementsByClassName('is-rounded');

    expect(img).toBeTruthy();
  });

  it('with custom classname on figure', () => {
    const { container } = render(
      <Image src="/fake-img-url.png" alt="alternative text" className="custom" />
    );

    const figure = container.getElementsByClassName('custom');

    expect(figure).toBeTruthy();
  });

  it('with custom classname on image', () => {
    const { container } = render(
      <Image src="/fake-img-url.png" alt="alternative text" imgClassName="custom" />
    );

    const img = container.getElementsByClassName('custom');

    expect(img).toBeTruthy();
  });

  it('have squared dimensions', () => {
    const { container } = render(
      <Image src="/fake-img-url.png" alt="alternative text" squaredDimensions="is-128x128" />
    );

    const figure = container.getElementsByClassName('is-128x128');

    expect(figure).toBeTruthy();
  });

  it('have ratio', () => {
    const { container } = render(
      <Image src="/fake-img-url.png" alt="alternative text" ratio="is-square" />
    );

    const figure = container.getElementsByClassName('is-square');

    expect(figure).toBeTruthy();
  });
});
