import React from 'react';

import { render, screen } from '@testing-library/react';

import Hero from './Hero';

describe('Test Hero', () => {
  const title = <p>Lorem ipsum</p>;
  const subtitle = <p>dolor sit amet</p>;

  it('Mount Hero', () => {
    render(
      <Hero>
        <Hero.Body>
          {title}
          {subtitle}
        </Hero.Body>
      </Hero>
    );

    expect(screen).toBeDefined();
  });

  it('Hero is small', () => {
    const { container } = render(
      <Hero size="is-small">
        <Hero.Body>
          {title}
          {subtitle}
        </Hero.Body>
      </Hero>
    );

    const messageDiv = container.getElementsByClassName('is-small');

    expect(messageDiv).toBeTruthy();
  });

  it('Hero has danger color', () => {
    const { container } = render(
      <Hero color="is-danger">
        <Hero.Body>
          {title}
          {subtitle}
        </Hero.Body>
      </Hero>
    );

    const messageDiv = container.getElementsByClassName('is-danger');

    expect(messageDiv).toBeTruthy();
  });

  it('Hero has head and footer', () => {
    const head = <p>Head of the Hero</p>;
    const footer = <p>Footer of the Hero</p>;
    const { container } = render(
      <Hero>
        <Hero.Head>{head}</Hero.Head>
        <Hero.Body>
          {title}
          {subtitle}
        </Hero.Body>
        <Hero.Footer>{footer}</Hero.Footer>
      </Hero>
    );

    const headDiv = container.getElementsByClassName('hero-head');
    const footerDiv = container.getElementsByClassName('hero-foot');

    expect(headDiv).toBeTruthy();
    expect(footerDiv).toBeTruthy();
  });
});
