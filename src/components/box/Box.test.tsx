import React from 'react';

import { render, screen } from '@testing-library/react';

import Box from './Box';

describe('Test Box', () => {
  it('Mount the component', () => {
    const boxLabel = 'Text Box';

    render(<Box>{boxLabel}</Box>);

    expect(screen.getByText(boxLabel)).toBeDefined();
  });
});
