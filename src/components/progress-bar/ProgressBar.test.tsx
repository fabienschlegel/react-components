import React from 'react';

import { render, screen } from '@testing-library/react';

import ProgressBar from './ProgressBar';

describe('Test ProgressBar', () => {
  it('Mount the component', () => {
    render(<ProgressBar />);

    expect(screen).toBeDefined();
  });

  it('is small', () => {
    render(<ProgressBar size="is-small" data-testid="progress" />);

    const progressBar = screen.getByTestId('progress').classList.contains('is-small');
    expect(progressBar).toBeTruthy();
  });

  it('is primary', () => {
    render(<ProgressBar color="is-primary" data-testid="progress" />);

    const progressBar = screen.getByTestId('progress').classList.contains('is-primary');
    expect(progressBar).toBeTruthy();
  });

  it('max is set', () => {
    const max = 200;
    render(<ProgressBar max={max} data-testid="progress" />);

    const progressBarMax: HTMLProgressElement = screen.getByTestId('progress');

    expect(progressBarMax.max).toEqual(max);
  });
});
