/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Modal from './Modal';

describe('Test Modal', () => {
  it('Mount Modal', () => {
    const wrapper = mount(
      <Modal>
        <p>Modal Content</p>
      </Modal>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Modal is active', () => {
    const wrapper = mount(
      <Modal isActive>
        <p>Modal Content</p>
      </Modal>
    );

    const content = wrapper.find('.modal').hasClass('is-active');
    expect(content).toBeTruthy();
  });

  it('Modal is clipped', () => {
    const wrapper = mount(
      <Modal isClipped>
        <p>Modal Content</p>
      </Modal>
    );

    const content = wrapper.find('.modal').hasClass('is-clipped');
    expect(content).toBeTruthy();
  });
});
