import React from 'react';

import { render, screen } from '@testing-library/react';

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
    render(
      <MediaObject>
        {mediaObjectLeft}
        {mediaObjectContent}
        {mediaObjectRight}
      </MediaObject>
    );

    expect(screen).toBeDefined();
  });

  it('with right element', () => {
    const { container } = render(
      <MediaObject>
        {mediaObjectLeft}
        {mediaObjectContent}
        {mediaObjectRight}
      </MediaObject>
    );

    const mediaRightElement = container.getElementsByClassName('.media-right');

    expect(mediaRightElement).toBeTruthy();
  });

  it('with rounded left element', () => {
    const mediaObjectLeftRounded = (
      <MediaObject.Left src="/fake-img-url.png" alt="alternative text" isRounded />
    );
    const { container } = render(
      <MediaObject>
        {mediaObjectLeftRounded}
        {mediaObjectContent}
        {mediaObjectRight}
      </MediaObject>
    );

    const imgRounded = container.getElementsByClassName('is-rounded');

    expect(imgRounded).toBeTruthy();
  });
});
