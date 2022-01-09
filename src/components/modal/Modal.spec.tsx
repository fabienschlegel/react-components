/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Modal from './Modal';

describe('Test Modal', () => {
  it('Mount the component', () => {
    const wrapper = mount(
      <Modal>
        <p>Modal Content</p>
      </Modal>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('is active', () => {
    const wrapper = mount(
      <Modal isActive>
        <Modal.Card>
          <Modal.Card.Header>Modal Card Header</Modal.Card.Header>
          <Modal.Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti incidunt reiciendis,
            mollitia, iste harum ipsam repellat dicta perferendis atque laboriosam magnam sit, sunt
            sapiente ducimus maxime laudantium unde voluptatum architecto!
          </Modal.Card.Body>
          <Modal.Card.Footer>Modal Card Footer</Modal.Card.Footer>
        </Modal.Card>
      </Modal>
    );

    const content = wrapper.find('.modal').hasClass('is-active');
    expect(content).toBeTruthy();
  });

  it('is clipped', () => {
    const wrapper = mount(
      <Modal isClipped>
        <Modal.Content>
          <p>Modal Content</p>
        </Modal.Content>
      </Modal>
    );

    const content = wrapper.find('.modal').hasClass('is-clipped');
    expect(content).toBeTruthy();
  });
});
