/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Help from '../help/Help';

import TextareaField from './TextareaField';

describe('Test TextareaField', () => {
  const label = 'Text Area Field';
  it('Mount TextareaField', () => {
    const wrapper = mount(<TextareaField name="input field" label={label} />);
    expect(wrapper.length).toEqual(1);
  });

  it('Test TextareaField with help text', () => {
    const helpProps = {
      text: 'this is an help message',
    };

    const wrapper = mount(
      <TextareaField name="textareafield" label={label}>
        <Help {...helpProps} />
      </TextareaField>
    );

    const help = wrapper.find('.help').exists();
    expect(help).toBeTruthy();
  });

  it('Test TextareaField is loading', () => {
    const wrapper = mount(<TextareaField name="textareafield" label={label} isLoading />);

    const help = wrapper.find('.control').hasClass('is-loading');
    expect(help).toBeTruthy();
  });
});
