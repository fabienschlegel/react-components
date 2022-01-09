/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Pagination from './Pagination';

describe('Test Pagination', () => {
  const changePage = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Mount the component', () => {
    const wrapper = mount(<Pagination currentPage={1} lastPage={10} changePage={changePage} />);
    expect(wrapper.length).toEqual(1);
  });

  it('with seven pages to show', () => {
    const wrapper = mount(
      <Pagination currentPage={1} lastPage={10} changePage={changePage} pagesToShow={7} />
    );
    expect(wrapper.length).toEqual(1);
  });

  it('is centered', () => {
    const wrapper = mount(
      <Pagination currentPage={1} lastPage={10} changePage={changePage} alignment="is-centered" />
    );
    expect(wrapper.length).toEqual(1);
  });

  it('is small', () => {
    const wrapper = mount(
      <Pagination currentPage={1} lastPage={10} changePage={changePage} size="is-small" />
    );
    expect(wrapper.length).toEqual(1);
  });

  it('is rounded', () => {
    const wrapper = mount(
      <Pagination currentPage={1} lastPage={10} changePage={changePage} isRounded />
    );
    expect(wrapper.length).toEqual(1);
  });

  it('with ellipsis', () => {
    const wrapper = mount(<Pagination currentPage={9} lastPage={20} changePage={changePage} />);
    expect(wrapper.length).toEqual(1);
  });

  it('change page event', () => {
    const wrapper = mount(<Pagination currentPage={9} lastPage={20} changePage={changePage} />);
    const firstPage = wrapper.find('#first-page').children();
    firstPage.simulate('click');
    expect(changePage).toHaveBeenCalled();
  });

  it('change page event', () => {
    const wrapper = mount(<Pagination currentPage={9} lastPage={20} changePage={changePage} />);

    const lastPage = wrapper.find('#last-page').children();
    lastPage.simulate('click');
    expect(changePage).toHaveBeenCalled();
  });

  it('change page event', () => {
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
