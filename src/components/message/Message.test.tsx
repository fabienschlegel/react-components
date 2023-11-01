import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Message from './Message';

describe('Test Message', () => {
  const message =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at egestas nisi. Pellentesque id pulvinar ipsum. Mauris imperdiet elit et euismod mattis. Quisque malesuada vitae est ut ullamcorper. Pellentesque a convallis odio. Morbi est mi, dictum at dolor vitae, rhoncus ultricies nunc. Nunc placerat ipsum ac nisl maximus, id maximus.';

  it('Mount Message', () => {
    render(
      <Message>
        <Message.Body>{message}</Message.Body>
      </Message>
    );

    expect(screen).toBeDefined();
  });

  it('Message is small', async () => {
    render(
      <Message data-testId="testId" size="is-small">
        <Message.Body>{message}</Message.Body>
      </Message>
    );

    const messageDiv = await screen.findByTestId('testId');
    expect(messageDiv.classList.contains('is-small')).toBeTruthy();
  });

  it('Test Message click event', () => {
    const onDeleteEvent = jest.fn();

    render(
      <Message>
        <Message.Header onDelete={onDeleteEvent}>Message Header</Message.Header>
        <Message.Body>{message}</Message.Body>
      </Message>
    );

    const deleteButton = screen.getByRole('button');

    fireEvent.click(deleteButton);

    expect(onDeleteEvent).toHaveBeenCalledTimes(1);
  });
});
