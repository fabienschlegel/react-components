import React from 'react';

import { render, screen } from '@testing-library/react';

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
    render(<SelectField name={name} label={label} options={options} />);

    expect(screen).toBeDefined();
  });

  it('with icons', () => {
    const { container } = render(
      <SelectField
        name={name}
        label={label}
        options={options}
        hasIconLeft={<FontAwesomeIcon icon={faDizzy} />}
      />
    );

    const leftIcon = container.getElementsByClassName('is-left');

    expect(leftIcon.length).toEqual(1);
  });

  it('is expanded', () => {
    render(<SelectField name={name} label={label} options={options} isMultiple multipleSize={5} />);

    const select: HTMLSelectElement = screen.getByRole('listbox');

    expect(select.multiple).toBeTruthy();

    expect(select.size).toEqual(5);
  });

  it('is rounded', () => {
    render(<SelectField name={name} label={label} options={options} isRounded />);

    const select = screen.getByRole('combobox').parentElement?.classList.contains('is-rounded');

    expect(select).toBeTruthy();
  });

  it('is loading', () => {
    render(<SelectField name={name} label={label} options={options} isLoading />);

    const select = screen.getByRole('combobox').parentElement?.classList.contains('is-loading');

    expect(select).toBeTruthy();
  });

  it('is hovered', () => {
    render(
      <SelectField name={name} label={label} options={options} states={{ 'is-hovered': true }} />
    );

    const select = screen.getByRole('combobox').classList.contains('is-hovered');
    expect(select).toBeTruthy();
  });

  it('is focused', () => {
    render(
      <SelectField name={name} label={label} options={options} states={{ 'is-focused': true }} />
    );

    const select = screen.getByRole('combobox').classList.contains('is-focused');

    expect(select).toBeTruthy();
  });
});
