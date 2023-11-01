import React from 'react';

import { act } from 'react-dom/test-utils';

import { render, screen } from '@testing-library/react';

import { Link, BrowserRouter as Router } from 'react-router-dom';

import Dropdown from './Dropdown';

describe('Test Dropdown', () => {
  const items = (
    <>
      <Dropdown.Item>First Item</Dropdown.Item>
      <Dropdown.Item>Second Item</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item as={Link} to="/fakeurl">
        This item is a link
      </Dropdown.Item>
      <Dropdown.Item isActive as={Link} to="/fakeurl">
        This item is an active link
      </Dropdown.Item>
    </>
  );

  it('Mount the component', () => {
    render(
      <Router>
        <Dropdown name="myDropdown" title="Dropdown button">
          {items}
        </Dropdown>
      </Router>
    );

    expect(screen).toBeDefined();
  });

  it('is active', () => {
    const { container } = render(
      <Router>
        <Dropdown title="Dropdown button" isActive>
          {items}
        </Dropdown>
      </Router>
    );

    const content = container.getElementsByClassName('is-active');

    expect(content).toBeTruthy();
  });

  it('is hoverable', () => {
    const { container } = render(
      <Router>
        <Dropdown title="Dropdown button" isHoverable>
          {items}
        </Dropdown>
      </Router>
    );

    const content = container.getElementsByClassName('is-hoverable');

    expect(content).toBeTruthy();
  });

  it('is aligned to right', () => {
    const { container } = render(
      <Router>
        <Dropdown title="Dropdown button" isRight>
          {items}
        </Dropdown>
      </Router>
    );

    const content = container.getElementsByClassName('is-right');

    expect(content).toBeTruthy();
  });

  it('is up', () => {
    const { container } = render(
      <Router>
        <Dropdown title="Dropdown button" isUp>
          {items}
        </Dropdown>
      </Router>
    );

    const content = container.getElementsByClassName('is-up');

    expect(content).toBeTruthy();
  });

  it('click event', () => {
    render(
      <Router>
        <Dropdown title="Dropdown button">{items}</Dropdown>
      </Router>
    );

    const contentIsNotVisible = screen.getByRole('menu', { hidden: true });

    expect(contentIsNotVisible).toBeDefined();

    const button = screen.getByRole('button');

    act(() => {
      button.click();
    });

    const content = screen.getByRole('menu', { hidden: false });

    expect(content).toBeDefined();
  });

  it('click event with hoverable prop', () => {
    render(
      <Router>
        <Dropdown title="Dropdown button" isHoverable>
          {items}
        </Dropdown>
      </Router>
    );

    const button = screen.getByRole('button');

    act(() => {
      button.click();
    });

    const contentIsNotVisible = screen.getByRole('menu', { hidden: true });

    expect(contentIsNotVisible).toBeDefined();
  });
});
