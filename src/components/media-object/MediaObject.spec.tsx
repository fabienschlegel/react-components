/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import MediaObject from './MediaObject';

describe('Test MediaObject', () => {
  const mediaObjectLeft = <MediaObject.Left src="/fake-img-url.png" alt="alternative text" />;
  const mediaObjectContent = <MediaObject.Content>Media Object</MediaObject.Content>;
  const mediaObjectRight = (
    <MediaObject.Right>
      <p>Media Object Right</p>
    </MediaObject.Right>
  );
  it('Mount the component', () => {
    const wrapper = mount(
      <MediaObject>
        {mediaObjectLeft}
        {mediaObjectContent}
        {mediaObjectRight}
      </MediaObject>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('with right element', () => {
    const wrapper = mount(
      <MediaObject>
        {mediaObjectLeft}
        {mediaObjectContent}
        {mediaObjectRight}
      </MediaObject>
    );

    const mediaRightElement = wrapper.find('media-right');

    expect(mediaRightElement).toBeTruthy();
  });

  it('with rounded left element', () => {
    const mediaObjectLeftRounded = (
      <MediaObject.Left src="/fake-img-url.png" alt="alternative text" isRounded />
    );
    const wrapper = mount(
      <MediaObject>
        {mediaObjectLeftRounded}
        {mediaObjectContent}
        {mediaObjectRight}
      </MediaObject>
    );

    const imgRounded = wrapper.find('img').hasClass('is-rounded');

    expect(imgRounded).toBeTruthy();
  });
});
