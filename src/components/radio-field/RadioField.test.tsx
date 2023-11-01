import React from 'react';

import { render, screen } from '@testing-library/react';

import RadioField from './RadioField';

describe('Test RadioField', () => {
  const name = 'radioField';

  it('Mount SelectField', () => {
    render(
      <RadioField>
        <RadioField.Element name={name}>Yes</RadioField.Element>
        <RadioField.Element name={name}>No</RadioField.Element>
      </RadioField>
    );

    expect(screen).toBeDefined();
  });
});
