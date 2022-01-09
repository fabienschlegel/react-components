/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Hero from './Hero';

describe('Test Hero', () => {
  const title = <p>Lorem ipsum</p>;
  const subtitle = <p>dolor sit amet</p>;

  it('Mount Hero', () => {
    const wrapper = mount(
      <Hero>
        <Hero.Body>
          {title}
          {subtitle}
        </Hero.Body>
      </Hero>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Hero is small', () => {
    const wrapper = mount(
      <Hero size="is-small">
        <Hero.Body>
          {title}
          {subtitle}
        </Hero.Body>
      </Hero>
    );

    const messageDiv = wrapper.find('.hero').hasClass('is-small');

    expect(messageDiv).toBeTruthy();
  });

  it('Hero has danger color', () => {
    const wrapper = mount(
      <Hero color="is-danger">
        <Hero.Body>
          {title}
          {subtitle}
        </Hero.Body>
      </Hero>
    );

    const messageDiv = wrapper.find('.hero').hasClass('is-danger');

    expect(messageDiv).toBeTruthy();
  });

  it('Hero has head and footer', () => {
    const head = <p>Head of the Hero</p>;
    const footer = <p>Footer of the Hero</p>;
    const wrapper = mount(
      <Hero>
        <Hero.Head>{head}</Hero.Head>
        <Hero.Body>
          {title}
          {subtitle}
        </Hero.Body>
        <Hero.Footer>{footer}</Hero.Footer>
      </Hero>
    );

    const headDiv = wrapper.find('.hero-head').exists();
    const footerDiv = wrapper.find('.hero-foot').exists();

    expect(headDiv).toBeTruthy();
    expect(footerDiv).toBeTruthy();
  });
});
