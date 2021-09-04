/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import Pagination from './Pagination';

import { Alignment, Size } from './types';

describe('Test Pagination', () => {
  const changePage = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Mount Pagination', () => {
    const wrapper = mount(<Pagination currentPage={1} lastPage={10} changePage={changePage} />);
    expect(wrapper.length).toEqual(1);
  });

  it('Pagination with seven pages to show', () => {
    const wrapper = mount(
      <Pagination currentPage={1} lastPage={10} changePage={changePage} pagesToShow={7} />
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Pagination is centered', () => {
    const wrapper = mount(
      <Pagination
        currentPage={1}
        lastPage={10}
        changePage={changePage}
        alignment={Alignment.isCentered}
      />
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Pagination is small', () => {
    const wrapper = mount(
      <Pagination currentPage={1} lastPage={10} changePage={changePage} size={Size.isSmall} />
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Pagination is rounded', () => {
    const wrapper = mount(
      <Pagination currentPage={1} lastPage={10} changePage={changePage} isRounded />
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Pagination with ellipsis', () => {
    const wrapper = mount(<Pagination currentPage={9} lastPage={20} changePage={changePage} />);
    expect(wrapper.length).toEqual(1);
  });

  it('Test Pagination change page event', () => {
    const wrapper = mount(<Pagination currentPage={9} lastPage={20} changePage={changePage} />);
    const firstPage = wrapper.find('#first-page').children();
    firstPage.simulate('click');
    expect(changePage).toHaveBeenCalled();
  });

  it('Test Pagination change page event', () => {
    const wrapper = mount(<Pagination currentPage={9} lastPage={20} changePage={changePage} />);

    const lastPage = wrapper.find('#last-page').children();
    lastPage.simulate('click');
    expect(changePage).toHaveBeenCalled();
  });

  it('Test Pagination change page event', () => {
    const wrapper = mount(<Pagination currentPage={9} lastPage={20} changePage={changePage} />);

    const previousPage = wrapper.find('.pagination-previous').at(0);
    previousPage.simulate('click');
    const nextPage = wrapper.find('.pagination-next').at(0);
    nextPage.simulate('click');
    const page = wrapper.find('#page9').at(0);
    page.simulate('click');

    expect(changePage).toHaveBeenCalledTimes(3);
  });
});
