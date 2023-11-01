import React from 'react';

import { render, screen } from '@testing-library/react';

import Card from './Card';

describe('Test Card', () => {
  it('Mount Card', () => {
    render(
      <Card>
        <Card.Content>Text Content</Card.Content>
      </Card>
    );

    expect(screen).toBeDefined();
  });

  it('Card with header', () => {
    const { container } = render(
      <Card>
        <Card.Header title="Card Header title" />
        <Card.Content>Text Content</Card.Content>
      </Card>
    );

    const content = container.getElementsByClassName('card-header');

    expect(content).toBeTruthy();
  });

  it('Card with header and icon', () => {
    const { container } = render(
      <Card>
        <Card.Header title="Card Header title" icon="p" />
        <Card.Content>Text Content</Card.Content>
      </Card>
    );

    const content = container.getElementsByClassName('card-header-icon');

    expect(content).toBeTruthy();
  });

  it('Card with image', () => {
    const { container } = render(
      <Card>
        <Card.Image>
          <Card.Image.Image src="/fake-img-url.png" alt="alternative text" />
        </Card.Image>
        <Card.Content>Text Content</Card.Content>
      </Card>
    );

    const content = container.getElementsByClassName('card-image');

    expect(content).toBeTruthy();
  });

  it('Card with footer', () => {
    const { container } = render(
      <Card>
        <Card.Content>Text Content</Card.Content>
        <Card.Footer>
          <Card.Footer.Item>
            <p>footer 1</p>
          </Card.Footer.Item>
          <Card.Footer.Item>
            <p>footer 2</p>
          </Card.Footer.Item>
        </Card.Footer>
      </Card>
    );

    const content = container.getElementsByClassName('card-footer');

    expect(content).toBeTruthy();
  });
});
