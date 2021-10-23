/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import RadioField from './RadioField';

describe('Test RadioField', () => {
  const radioElements = [
    {
      children: 'Yes',
    },
    {
      children: 'No',
    },
  ];
  const name = 'radioField';

  it('Mount SelectField', () => {
    const wrapper = mount(<RadioField name={name} radioElements={radioElements} />);
    expect(wrapper.length).toEqual(1);
  });
});
