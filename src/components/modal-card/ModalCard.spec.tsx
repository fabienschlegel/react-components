/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import ModalCard from './ModalCard';

describe('Test Modal', () => {
  const title = 'Modal Card';
  const footer = <p>Footer content</p>;
  it('Mount Modal', () => {
    const wrapper = mount(
      <ModalCard title={title} footer={footer}>
        <p>Modal Content</p>
      </ModalCard>
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Modal is active', () => {
    const wrapper = mount(
      <ModalCard title={title} footer={footer} isActive>
        <p>Modal Content</p>
      </ModalCard>
    );

    const content = wrapper.find('.modal').hasClass('is-active');
    expect(content).toBeTruthy();
  });

  it('Modal is clipped', () => {
    const wrapper = mount(
      <ModalCard title={title} footer={footer} isClipped>
        <p>Modal Content</p>
      </ModalCard>
    );

    const content = wrapper.find('.modal').hasClass('is-clipped');
    expect(content).toBeTruthy();
  });
});
