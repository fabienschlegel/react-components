/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Delete from './Delete';

import Size from './types';

describe('Test Delete', () => {
  it('Mount Delete', () => {
    const wrapper = mount(<Delete />);
    expect(wrapper.length).toEqual(1);
  });

  it('Delete is small', () => {
    const wrapper = mount(<Delete size={Size.Small} />);

    const deleteButton = wrapper.find('.delete').hasClass('is-small');

    expect(deleteButton).toBeTruthy();
  });

  it('Test Delete click event', () => {
    const onClickEvent = jest.fn();
    const wrapper = mount(<Delete onClick={onClickEvent} />);

    const deleteButton = wrapper.find('.delete');

    deleteButton.simulate('click');

    expect(onClickEvent).toHaveBeenCalled();
  });
});
