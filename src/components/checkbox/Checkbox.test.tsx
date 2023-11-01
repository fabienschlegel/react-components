import React from 'react';

import { render, screen } from '@testing-library/react';

import Checkbox from './Checkbox';

describe('Test Checkbox', () => {
  it('Mount Checkbox', () => {
    render(<Checkbox>Checkbox Content</Checkbox>);

    expect(screen).toBeDefined();
  });

  it('Test Checkbox is disabled', () => {
    const { getByRole } = render(<Checkbox isDisabled>Text Content</Checkbox>);

    const disabledInput = getByRole('checkbox');

    expect(disabledInput).toHaveAttribute('disabled');
  });
});
