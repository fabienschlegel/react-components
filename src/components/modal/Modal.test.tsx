import React from 'react';

import { render, screen } from '@testing-library/react';

import Modal from './Modal';

describe('Test Modal', () => {
  it('Mount the component', () => {
    render(
      <Modal>
        <p>Modal Content</p>
      </Modal>
    );

    expect(screen).toBeDefined();
  });

  it('is active', () => {
    render(
      <Modal isActive data-testid="modal">
        <Modal.Card>
          <Modal.Card.Header>Modal Card Header</Modal.Card.Header>
          <Modal.Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti incidunt reiciendis,
            mollitia, iste harum ipsam repellat dicta perferendis atque laboriosam magnam sit, sunt
            sapiente ducimus maxime laudantium unde voluptatum architecto!
          </Modal.Card.Body>
          <Modal.Card.Footer>Modal Card Footer</Modal.Card.Footer>
        </Modal.Card>
      </Modal>
    );

    const content = screen.getByTestId('modal').classList.contains('is-active');
    expect(content).toBeTruthy();
  });

  it('is clipped', () => {
    render(
      <Modal isClipped data-testid="modal">
        <Modal.Content>
          <p>Modal Content</p>
        </Modal.Content>
      </Modal>
    );

    const content = screen.getByTestId('modal').classList.contains('is-clipped');
    expect(content).toBeTruthy();
  });
});
