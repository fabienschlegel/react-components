/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Delete from './Delete';

describe('Test Delete', () => {
  it('Mount the component', () => {
    const wrapper = mount(<Delete />);
    expect(wrapper.length).toEqual(1);
  });

  it('is small', () => {
    const wrapper = mount(<Delete size="is-small" />);

    const deleteButton = wrapper.find('.delete').hasClass('is-small');

    expect(deleteButton).toBeTruthy();
  });

  it('click event', () => {
    const onClickEvent = jest.fn();
    const wrapper = mount(<Delete onClick={onClickEvent} />);

    const deleteButton = wrapper.find('.delete');

    deleteButton.simulate('click');

    expect(onClickEvent).toHaveBeenCalled();
  });
});
