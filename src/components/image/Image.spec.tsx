/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Image from './Image';

describe('Test Image', () => {
  it('Mount Image', () => {
    const wrapper = mount(<Image src="/fake-img-url.png" alt="alternative text" />);
    expect(wrapper.length).toEqual(1);
  });

  it('Image is rounded', () => {
    const wrapper = mount(<Image src="/fake-img-url.png" alt="alternative text" isRounded />);

    const img = wrapper.find('img').hasClass('is-rounded');

    expect(img).toBeTruthy();
  });

  it('Image with custom classname on figure', () => {
    const wrapper = mount(
      <Image src="/fake-img-url.png" alt="alternative text" className="custom" />
    );

    const figure = wrapper.find('figure').hasClass('custom');

    expect(figure).toBeTruthy();
  });

  it('Image with custom classname on image', () => {
    const wrapper = mount(
      <Image src="/fake-img-url.png" alt="alternative text" imgClassName="custom" />
    );

    const img = wrapper.find('img').hasClass('custom');

    expect(img).toBeTruthy();
  });

  it('Image have squared dimensions', () => {
    const wrapper = mount(
      <Image src="/fake-img-url.png" alt="alternative text" squaredDimensions="is-128x128" />
    );

    const figure = wrapper.find('figure').hasClass('is-128x128');

    expect(figure).toBeTruthy();
  });

  it('Image have ratio', () => {
    const wrapper = mount(
      <Image src="/fake-img-url.png" alt="alternative text" ratio="is-square" />
    );

    const figure = wrapper.find('figure').hasClass('is-square');

    expect(figure).toBeTruthy();
  });
});
