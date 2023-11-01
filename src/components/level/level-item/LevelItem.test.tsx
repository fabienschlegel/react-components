import React from 'react';

import { render, screen } from '@testing-library/react';

import LevelItem from './LevelItem';

describe('Test LevelItem', () => {
  it('Mount Level', () => {
    render(<LevelItem isCentered>Text Level</LevelItem>);

    expect(screen).toBeDefined();
  });
});
