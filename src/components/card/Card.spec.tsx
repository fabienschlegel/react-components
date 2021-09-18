/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Card from './Card';
import CardHeader from '../card-header/CardHeader';
import CardImage from '../card-image/CardImage';
import CardFooter from '../card-footer/CardFooter';
import CardFooterItem from '../card-footer-item/CardFooterItem';
import Image from '../image/Image';

describe('Test Card', () => {
  it('Mount Card', () => {
    const wrapper = mount(<Card>Text Content</Card>);
    expect(wrapper.length).toEqual(1);
  });

  it('Card with header', () => {
    const header = <CardHeader title="Card Header title" />;
    const wrapper = mount(<Card header={header}>Text Content</Card>);

    const content = wrapper.find('header').hasClass('card-header');
    expect(content).toBeTruthy();
  });

  it('Card with header and icon', () => {
    const header = <CardHeader title="Card Header title" icon="p" />;
    const wrapper = mount(<Card header={header}>Text Content</Card>);

    const content = wrapper.find('button').hasClass('card-header-icon');
    expect(content).toBeTruthy();
  });

  it('Card with image', () => {
    const cardImage = (
      <CardImage>
        <Image src="/fake-img-url.png" alt="alternative text" />
      </CardImage>
    );
    const wrapper = mount(<Card image={cardImage}>Text Content</Card>);

    const content = wrapper.find('card-image');
    expect(content).toBeTruthy();
  });

  it('Card with footer', () => {
    const cardFooter = (
      <CardFooter>
        <CardFooterItem>
          <p>footer 1</p>
        </CardFooterItem>
        <CardFooterItem>
          <p>footer 2</p>
        </CardFooterItem>
      </CardFooter>
    );

    const wrapper = mount(<Card footer={cardFooter}>Text Content</Card>);

    const content = wrapper.find('footer').hasClass('card-footer');
    expect(content).toBeTruthy();
  });
});
