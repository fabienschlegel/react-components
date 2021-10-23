/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import FileField from './FileField';

describe('Test FileField', () => {
  const name = 'file';
  const fileLabel = 'File';
  it('Mount FileField', () => {
    const wrapper = mount(<FileField name={name} fileLabel={fileLabel} />);
    expect(wrapper.length).toEqual(1);
  });

  it('Test FileField with file name', () => {
    const wrapper = mount(<FileField name={name} fileLabel={fileLabel} fileName="the-file.txt" />);

    const fileDiv = wrapper.find('.file').hasClass('file');
    const fileSpan = wrapper.find('.file-name').exists();

    expect(fileDiv).toBeTruthy();
    expect(fileSpan).toBeTruthy();
  });

  it('Test FileField is fill width', () => {
    const wrapper = mount(<FileField name={name} fileLabel={fileLabel} isFullWidth />);

    const fileDiv = wrapper.find('.file').hasClass('is-fullwidth');

    expect(fileDiv).toBeTruthy();
  });

  it('Test FileField is boxed', () => {
    const wrapper = mount(<FileField name={name} fileLabel={fileLabel} isBoxed />);

    const fileDiv = wrapper.find('.file').hasClass('is-boxed');

    expect(fileDiv).toBeTruthy();
  });
});
