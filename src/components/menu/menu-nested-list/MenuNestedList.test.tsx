import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import MenuNestedList from './MenuNestedList';

describe('Test MenuNestedList', () => {
  it('mount component', () => {
    render(<MenuNestedList label="Menu Nested List Label">Menu List Content</MenuNestedList>);

    expect(screen).toBeDefined();
  });

  it('nested list is open', () => {
    render(<MenuNestedList label="Menu Nested List Label">Menu List Content</MenuNestedList>);

    const button = screen.getByRole('button');

    expect(button.classList.contains('is-active')).toBeFalsy();

    fireEvent.click(button);

    const nestedMenu = screen.getByText('Menu List Content');

    expect(nestedMenu.style).toHaveProperty('display', 'block');

    expect(screen.getByRole('button').classList.contains('is-active')).toBeTruthy();
  });
});
