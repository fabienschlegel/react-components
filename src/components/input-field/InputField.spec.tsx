/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import InputField from './InputField';
import Help from '../help/Help';

describe('Test InputField', () => {
  const label = 'Input Field';
  it('Mount the component', () => {
    const wrapper = mount(<InputField name="input field" label={label} />);
    expect(wrapper.length).toEqual(1);
  });

  it('with help text', () => {
    const helpProps = {
      text: 'this is an help message',
    };

    const wrapper = mount(
      <InputField name="inputfield" label={label}>
        <Help {...helpProps} />
      </InputField>
    );

    const help = wrapper.find('.help').exists();
    expect(help).toBeTruthy();
  });

  it('with icons', () => {
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

  it('with clickable icons', () => {
    const icons = {
      leftIcon: <FontAwesomeIcon icon={faTimes} />,
      rightIcon: <FontAwesomeIcon icon={faSearch} />,
      handleLeftIconClick: jest.fn(),
      handleRightIconClick: jest.fn(),
    };

    const wrapper = mount(<InputField name="inputfield" label={label} icons={icons} />);

    const leftIcon = wrapper.find('.is-left');
    const rightIcon = wrapper.find('.is-right');

    const handleLeftIconClickable = leftIcon.hasClass('is-clickable');
    const rightIconClickable = rightIcon.hasClass('is-clickable');

    expect(handleLeftIconClickable).toBeTruthy();
    expect(rightIconClickable).toBeTruthy();
  });

  it('is expanded', () => {
    const wrapper = mount(<InputField name="inputfield" label={label} controlIsExpanded />);

    const control = wrapper.find('.control').hasClass('is-expanded');
    expect(control).toBeTruthy();
  });
});
