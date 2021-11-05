/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import { faDizzy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SelectField from './SelectField';

describe('Test SelectField', () => {
  const options = [
    {
      value: '1',
      label: 'banane',
    },
    {
      value: '2',
      label: 'pomme',
    },
    {
      value: '3',
      label: 'orange',
    },
    {
      value: '4',
      label: 'kiwi',
    },
    {
      value: '5',
      label: 'fraise',
    },
    {
      value: '6',
      label: 'framboise',
    },
  ];
  const name = 'Select Field';
  const label = 'Select Field Label';

  it('Mount the component', () => {
    const wrapper = mount(<SelectField name={name} label={label} options={options} />);
    expect(wrapper.length).toEqual(1);
  });

  it('with icons', () => {
    const wrapper = mount(
      <SelectField
        name={name}
        label={label}
        options={options}
        hasIconLeft={<FontAwesomeIcon icon={faDizzy} />}
      />
    );

    const leftIcon = wrapper.find('.is-left').exists();

    expect(leftIcon).toBeTruthy();
  });

  it('is expanded', () => {
    const wrapper = mount(
      <SelectField name={name} label={label} options={options} isMultiple multipleSize={5} />
    );

    const select = wrapper.find('select').prop('multiple');
    const selectSize = wrapper.find('select').prop('size');
    expect(select).toBeTruthy();
    expect(selectSize).toEqual(5);
  });

  it('is rounded', () => {
    const wrapper = mount(<SelectField name={name} label={label} options={options} isRounded />);

    const select = wrapper.find('.select').hasClass('is-rounded');
    expect(select).toBeTruthy();
  });

  it('is loading', () => {
    const wrapper = mount(<SelectField name={name} label={label} options={options} isLoading />);

    const select = wrapper.find('.select').hasClass('is-loading');
    expect(select).toBeTruthy();
  });

  it('is hovered', () => {
    const wrapper = mount(
      <SelectField name={name} label={label} options={options} states={{ 'is-hovered': true }} />
    );

    const select = wrapper.find('select').hasClass('is-hovered');
    expect(select).toBeTruthy();
  });

  it('is focused', () => {
    const wrapper = mount(
      <SelectField name={name} label={label} options={options} states={{ 'is-focused': true }} />
    );

    const select = wrapper.find('select').hasClass('is-focused');
    expect(select).toBeTruthy();
  });

  it('with help text', () => {
    const helpProps = {
      text: 'this is an help message',
    };

    const wrapper = mount(
      <SelectField name="selectfield" label={label} options={options} helpProps={helpProps} />
    );

    const help = wrapper.find('.help').exists();
    expect(help).toBeTruthy();
  });
});
