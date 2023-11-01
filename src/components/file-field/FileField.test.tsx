import React from 'react';

import { render, screen } from '@testing-library/react';

import FileField from './FileField';

describe('Test FileField', () => {
  const name = 'file';
  const fileLabel = 'File';
  it('Mount the component', () => {
    render(<FileField name={name} fileLabel={fileLabel} />);

    expect(screen).toBeDefined();
  });

  it('with file name', () => {
    const { container } = render(
      <FileField name={name} fileLabel={fileLabel} fileName="the-file.txt" />
    );

    const fileDiv = container.getElementsByClassName('file');

    const fileSpan = container.getElementsByClassName('file-name');

    expect(fileDiv).toHaveLength(1);
    expect(fileSpan).toHaveLength(1);
  });

  it('is fullwidth', () => {
    const { container } = render(<FileField name={name} fileLabel={fileLabel} isFullWidth />);

    const fileDiv = container.getElementsByClassName('is-fullwidth');

    expect(fileDiv).toHaveLength(1);
  });

  it('is boxed', () => {
    const { container } = render(<FileField name={name} fileLabel={fileLabel} isBoxed />);

    const fileDiv = container.getElementsByClassName('is-boxed');

    expect(fileDiv).toHaveLength(1);
  });
});
