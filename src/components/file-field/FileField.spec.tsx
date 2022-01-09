/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import FileField from './FileField';

describe('Test FileField', () => {
  const name = 'file';
  const fileLabel = 'File';
  it('Mount the component', () => {
    const wrapper = mount(<FileField name={name} fileLabel={fileLabel} />);
    expect(wrapper.length).toEqual(1);
  });

  it('with file name', () => {
    const wrapper = mount(<FileField name={name} fileLabel={fileLabel} fileName="the-file.txt" />);

    const fileDiv = wrapper.find('.file').hasClass('file');
    const fileSpan = wrapper.find('.file-name').exists();

    expect(fileDiv).toBeTruthy();
    expect(fileSpan).toBeTruthy();
  });

  it('is fullwidth', () => {
    const wrapper = mount(<FileField name={name} fileLabel={fileLabel} isFullWidth />);

    const fileDiv = wrapper.find('.file').hasClass('is-fullwidth');

    expect(fileDiv).toBeTruthy();
  });

  it('is boxed', () => {
    const wrapper = mount(<FileField name={name} fileLabel={fileLabel} isBoxed />);

    const fileDiv = wrapper.find('.file').hasClass('is-boxed');

    expect(fileDiv).toBeTruthy();
  });
});
