import React from 'react';

import { render, screen } from '@testing-library/react';

import Tile from './Tile';

describe('Test Tile', () => {
  it('Mount the component', () => {
    render(<Tile context="is-child">Tile Content</Tile>);

    expect(screen).toBeDefined();
  });

  it('is vertical', () => {
    render(
      <Tile context="is-child" isVertical data-testid="tile">
        Tile Content
      </Tile>
    );

    const verticalTile = screen.getByTestId('tile').classList.contains('is-vertical');

    expect(verticalTile).toBeTruthy();
  });

  it('is box', () => {
    render(
      <Tile context="is-child" isBox data-testid="tile">
        Tile Content
      </Tile>
    );

    const boxTile = screen.getByTestId('tile').classList.contains('box');

    expect(boxTile).toBeTruthy();
  });

  it('with color', () => {
    render(
      <Tile context="is-child" color="is-primary" data-testid="tile">
        Tile Content
      </Tile>
    );

    const colorTile = screen.getByTestId('tile').classList.contains('notification');

    expect(colorTile).toBeTruthy();
  });
});
