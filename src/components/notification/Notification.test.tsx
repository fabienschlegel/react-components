import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Notification from './Notification';

describe('Test Notification', () => {
  it('Mount the component', () => {
    render(<Notification>Text Notification</Notification>);

    expect(screen).toBeDefined();
  });

  it('is light', () => {
    render(
      <Notification data-testid="notification" isLight>
        Text Notification
      </Notification>
    );

    const notification = screen.getByTestId('notification').classList.contains('is-light');

    expect(notification).toBeTruthy();
  });

  it('is primary', () => {
    render(
      <Notification data-testid="notification" color="is-primary">
        Text Notification
      </Notification>
    );

    const notification = screen.getByTestId('notification').classList.contains('is-primary');

    expect(notification).toBeTruthy();
  });

  it('click event', () => {
    const onClickEvent = jest.fn();

    render(<Notification onClick={onClickEvent}>Text Notification</Notification>);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onClickEvent).toHaveBeenCalledTimes(1);
  });
});
