import React from 'react';

import { render, screen } from '@testing-library/react';

import Delete from './Delete';

describe('Test Delete', () => {
  it('Mount the component', () => {
    render(<Delete />);

    expect(screen).toBeDefined();
  });

  it('is small', () => {
    const { container } = render(<Delete size="is-small" />);

    const deleteButton = container.getElementsByClassName('is-small');

    expect(deleteButton).toBeTruthy();
  });

  it('click event', () => {
    const onClickEvent = jest.fn();

    render(<Delete onClick={onClickEvent} />);

    const button = screen.getByRole('button');

    button.click();

    expect(onClickEvent).toHaveBeenCalled();
  });
});
