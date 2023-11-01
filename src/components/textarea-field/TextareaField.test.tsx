import React from 'react';

import { render, screen } from '@testing-library/react';

import TextareaField from './TextareaField';

describe('Test TextareaField', () => {
  const label = 'Text Area Field';
  it('Mount TextareaField', () => {
    render(<TextareaField name="input field" label={label} />);

    expect(screen).toBeDefined();
  });

  it('Test TextareaField with help text', () => {
    const helpProps = {
      text: 'this is an help message',
    };

    render(
      <TextareaField name="textareafield" label={label}>
        <TextareaField.Help {...helpProps} data-testid="help" />
      </TextareaField>
    );

    const help = screen.getByTestId('help');

    expect(help).toBeTruthy();
  });

  it('Test TextareaField is loading', () => {
    render(<TextareaField name="textareafield" label={label} isLoading />);

    const controlIsLoading = screen
      .getByRole('textbox')
      .parentElement?.classList.contains('is-loading');

    expect(controlIsLoading).toBeTruthy();
  });
});
