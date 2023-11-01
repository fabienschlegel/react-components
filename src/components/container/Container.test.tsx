import React from 'react';

import { render, screen } from '@testing-library/react';

import Container from './Container';

describe('Test Container', () => {
  it('Mount the component', () => {
    render(<Container>Text Container</Container>);

    expect(screen).toBeDefined();
  });
});
