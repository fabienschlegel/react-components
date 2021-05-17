/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount } from 'enzyme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import InputField from './InputField';

describe('Test InputField', () => {
  const label = 'Input Field';
  it('Mount InputField', () => {
    const wrapper = mount(<InputField name="input field" label={label} />);
    expect(wrapper.length).toEqual(1);
  });

  it('Test InputField with help text', () => {
    const helpProps = {
      text: 'this is an help message',
    };

    const wrapper = mount(
      <InputField name="inputfield" label={label} helpProps={helpProps} />
    );

    const help = wrapper.find('.help').exists();
    expect(help).toBeTruthy();
  });

  it('Test InputField with icons', () => {
    const icons = {
      leftIcon: <FontAwesomeIcon icon={faTimes} />,
      rightIcon: <FontAwesomeIcon icon={faSearch} />,
    };

    const wrapper = mount(<InputField name="inputfield" label={label} icons={icons} />);

    const leftIcon = wrapper.find('.is-left').exists();
    const rightIcon = wrapper.find('.is-right').exists();

    expect(leftIcon).toBeTruthy();
    expect(rightIcon).toBeTruthy();
  });

  it('Test InputField is expanded', () => {
    const wrapper = mount(
      <InputField name="inputfield" label={label} controlIsExpanded />
    );

    const control = wrapper.find('.control').hasClass('is-expanded');
    expect(control).toBeTruthy();
  });
});
