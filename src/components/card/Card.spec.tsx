/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Card from './Card';

describe('Test Card', () => {
  it('Mount Card', () => {
    const wrapper = mount(
      <Card>
        <Card.Content>Text Content</Card.Content>
      </Card>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Card with header', () => {
    const wrapper = mount(
      <Card>
        <Card.Header title="Card Header title" />
        <Card.Content>Text Content</Card.Content>
      </Card>
    );

    const content = wrapper.find('header').hasClass('card-header');
    expect(content).toBeTruthy();
  });

  it('Card with header and icon', () => {
    const wrapper = mount(
      <Card>
        <Card.Header title="Card Header title" icon="p" />
        <Card.Content>Text Content</Card.Content>
      </Card>
    );

    const content = wrapper.find('button').hasClass('card-header-icon');
    expect(content).toBeTruthy();
  });

  it('Card with image', () => {
    const wrapper = mount(
      <Card>
        <Card.Image>
          <Card.Image.Image src="/fake-img-url.png" alt="alternative text" />
        </Card.Image>
        <Card.Content>Text Content</Card.Content>
      </Card>
    );

    const content = wrapper.find('card-image');
    expect(content).toBeTruthy();
  });

  it('Card with footer', () => {
    const wrapper = mount(
      <Card>
        <Card.Content>Text Content</Card.Content>
        <Card.Footer>
          <Card.Footer.Item>
            <p>footer 1</p>
          </Card.Footer.Item>
          <Card.Footer.Item>
            <p>footer 2</p>
          </Card.Footer.Item>
        </Card.Footer>
      </Card>
    );

    const content = wrapper.find('footer').hasClass('card-footer');
    expect(content).toBeTruthy();
  });
});
