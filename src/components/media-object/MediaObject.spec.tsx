/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import MediaObject from './MediaObject';

describe('Test MediaObject', () => {
  const children = <div>Media Object</div>;
  const mediaObjectLeft = {
    src: '/fake-img-url.png',
    alt: 'alternative text',
  };
  const mediaObjectRight = <p>Media Object Right</p>;
  it('Mount MediaObject', () => {
    const wrapper = mount(<MediaObject mediaObjectLeft={mediaObjectLeft}>{children}</MediaObject>);
    expect(wrapper.length).toEqual(1);
  });

  it('MediaObject with right element', () => {
    const wrapper = mount(
      <MediaObject mediaObjectLeft={mediaObjectLeft} mediaRight={mediaObjectRight}>
        {children}
      </MediaObject>
    );

    const mediaRightElement = wrapper.find('media-right');

    expect(mediaRightElement).toBeTruthy();
  });

  it('MediaObject with rounded left element', () => {
    const wrapper = mount(
      <MediaObject
        mediaObjectLeft={{ ...mediaObjectLeft, isRounded: true }}
        mediaRight={mediaObjectRight}
      >
        {children}
      </MediaObject>
    );

    const imgRounded = wrapper.find('img').hasClass('is-rounded');

    expect(imgRounded).toBeTruthy();
  });
});
