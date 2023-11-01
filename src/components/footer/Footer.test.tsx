import React from 'react';

import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Test Footer', () => {
  it('Mount Footer', () => {
    render(<Footer>Text Footer</Footer>);

    expect(screen).toBeDefined();
  });
});
