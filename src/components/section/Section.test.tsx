import React from 'react';

import { render, screen } from '@testing-library/react';

import Section from './Section';

describe('Test Section', () => {
  it('Mount the component', () => {
    render(<Section>Text Section</Section>);

    expect(screen).toBeDefined();
  });
});
