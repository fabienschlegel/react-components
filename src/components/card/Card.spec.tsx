/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Card from './Card';

describe('Test Card', () => {
  it('Mount Card', () => {
    const wrapper = mount(<Card>Text Content</Card>);
    expect(wrapper.length).toEqual(1);
  });

  it('Card with header', () => {
    const cardHeader = { title: 'Card Header title' };
    const wrapper = mount(<Card cardHeader={cardHeader}>Text Content</Card>);

    const content = wrapper.find('header').hasClass('card-header');
    expect(content).toBeTruthy();
  });

  it('Card with image', () => {
    const cardImage = {
      imageConfig: { src: '/fake-img-url.png', alt: 'alternative text' },
    };
    const wrapper = mount(<Card cardImage={cardImage}>Text Content</Card>);

    const content = wrapper.find('card-image');
    expect(content).toBeTruthy();
  });

  it('Card with footer', () => {
    const cardFooter = {
      footerItems: {
        items: [
          { id: '1', item: <p>footer 1</p> },
          { id: '2', item: <p>footer 2</p> },
        ],
      },
    };
    const wrapper = mount(<Card cardFooter={cardFooter}>Text Content</Card>);

    const content = wrapper.find('footer').hasClass('card-footer');
    expect(content).toBeTruthy();
  });
});
