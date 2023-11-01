import React from 'react';

import { render, screen } from '@testing-library/react';

import Heading from './Heading';

describe('Test Heading', () => {
  it('Mount the component', () => {
    render(<Heading>Text Heading</Heading>);

    expect(screen).toBeDefined();
  });
});
