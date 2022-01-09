/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import RadioField from './RadioField';

describe('Test RadioField', () => {
  const name = 'radioField';

  it('Mount SelectField', () => {
    const wrapper = mount(
      <RadioField>
        <RadioField.Element name={name}>Yes</RadioField.Element>
        <RadioField.Element name={name}>No</RadioField.Element>
      </RadioField>
    );
    expect(wrapper.length).toEqual(1);
  });
});
