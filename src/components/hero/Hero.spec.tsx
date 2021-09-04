/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Hero from './Hero';

describe('Test Hero', () => {
  const title = 'Lorem ipsum';
  const subtitle = '';

  it('Mount Hero', () => {
    const wrapper = mount(<Hero title={title} subtitle={subtitle} />);
    expect(wrapper.length).toEqual(1);
  });

  it('Hero is small', () => {
    const wrapper = mount(<Hero title={title} subtitle={subtitle} size="is-small" />);

    const messageDiv = wrapper.find('.hero').hasClass('is-small');

    expect(messageDiv).toBeTruthy();
  });

  it('Hero has danger color', () => {
    const wrapper = mount(<Hero title={title} subtitle={subtitle} color="is-danger" />);

    const messageDiv = wrapper.find('.hero').hasClass('is-danger');

    expect(messageDiv).toBeTruthy();
  });

  it('Hero has head and footer', () => {
    const head = <p>Head of the Hero</p>;
    const footer = <p>Footer of the Hero</p>;
    const wrapper = mount(<Hero title={title} subtitle={subtitle} head={head} footer={footer} />);

    const headDiv = wrapper.find('.hero-head').exists();
    const footerDiv = wrapper.find('.hero-foot').exists();

    expect(headDiv).toBeTruthy();
    expect(footerDiv).toBeTruthy();
  });
});
