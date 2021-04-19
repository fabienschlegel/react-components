/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import HeadingLevel from 'components/heading/types';

import Title from './Title';

import Size from './types';

describe('Test Title', () => {
  it('Mount Title', () => {
    const wrapper = mount(<Title size={Size.is1}>Text Title</Title>);
    expect(wrapper.length).toEqual(1);
  });

  it('Title is h2', () => {
    const wrapper = mount(
      <Title size={Size.is2} headingLevel={HeadingLevel.h2}>
        Text Title
      </Title>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Title is subtitle', () => {
    const wrapper = mount(
      <Title size={Size.is1} isSubtitle>
        Text Title
      </Title>
    );

    const title = wrapper.find('h1').hasClass('subtitle');
    expect(title).toBeTruthy();
  });

  it('Title is spaced', () => {
    const wrapper = mount(
      <Title size={Size.is1} isSpaced>
        Text Title
      </Title>
    );

    const title = wrapper.find('h1').hasClass('is-spaced');
    expect(title).toBeTruthy();
  });

  it('Title use paragraph', () => {
    const wrapper = mount(
      <Title size={Size.is1} useParagraph>
        Text Title
      </Title>
    );

    const title = wrapper.find('p').hasClass('title');
    expect(title).toBeTruthy();
  });
});
