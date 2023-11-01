import React from 'react';

import { render, screen } from '@testing-library/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import InputField from './InputField';
import Help from '../help/Help';

describe('Test InputField', () => {
  const label = 'Input Field';
  it('Mount the component', () => {
    render(<InputField name="input field" label={label} />);

    expect(screen).toBeDefined();
  });

  it('with help text', () => {
    const helpProps = {
      text: 'this is an help message',
    };

    const { container } = render(
      <InputField name="inputfield" label={label}>
        <Help {...helpProps} />
      </InputField>
    );

    const help = container.getElementsByClassName('help');
    expect(help).toBeTruthy();
  });

  it('with icons', () => {
    const leftIcon = { icon: <FontAwesomeIcon icon={faTimes} /> };
    const rightIcon = { icon: <FontAwesomeIcon icon={faSearch} /> };

    const { container } = render(
      <InputField name="inputfield" label={label} leftIcon={leftIcon} rightIcon={rightIcon} />
    );

    const leftIconExists = container.getElementsByClassName('is-left');
    const rightIconExists = container.getElementsByClassName('is-right');

    expect(leftIconExists).toBeTruthy();
    expect(rightIconExists).toBeTruthy();
  });

  it('with clickable icons', () => {
    const leftIcon = { icon: <FontAwesomeIcon icon={faTimes} />, handleIconClick: jest.fn() };
    const rightIcon = { icon: <FontAwesomeIcon icon={faSearch} />, handleIconClick: jest.fn() };

    const { container } = render(
      <InputField name="inputfield" label={label} leftIcon={leftIcon} rightIcon={rightIcon} />
    );

    const leftIconExists = container.getElementsByClassName('is-left is-clickable');
    const rightIconExists = container.getElementsByClassName('is-right is-clickable');

    expect(leftIconExists).toBeTruthy();
    expect(rightIconExists).toBeTruthy();
  });

  it('is expanded', () => {
    const { container } = render(<InputField name="inputfield" label={label} controlIsExpanded />);

    const control = container.getElementsByClassName('is-expanded');
    expect(control).toBeTruthy();
  });
});
