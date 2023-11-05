import React from 'react';

import { render, screen } from '@testing-library/react';

import Heading from './Heading';

describe('Test Heading', () => {
  it('Mount the component', () => {
    const headingLabel = 'Text Heading';
    render(<Heading>{headingLabel}</Heading>);

    expect(screen.getByText(headingLabel)).toBeDefined();
  });
});
