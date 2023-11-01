import React from 'react';

import { render, screen } from '@testing-library/react';

import { Link, MemoryRouter as Router } from 'react-router-dom';

import Tabs from './Tabs';

describe('Test Tabs', () => {
  it('Mount the component', () => {
    render(
      <Router initialEntries={['/tab1']}>
        <Tabs>
          <Tabs.Element as={Link} to="/tab1">
            tab1
          </Tabs.Element>
          <Tabs.Element as={Link} to="/tab2">
            tab2
          </Tabs.Element>
          <Tabs.Element as={Link} to="/tab3">
            tab3
          </Tabs.Element>
        </Tabs>
      </Router>
    );

    expect(screen).toBeDefined();
  });

  it('Tabs are aligned to right', () => {
    const { container } = render(
      <Router initialEntries={['/tab1']}>
        <Tabs alignment="is-right">
          <Tabs.Element as={Link} to="/tab1">
            tab1
          </Tabs.Element>
          <Tabs.Element as={Link} to="/tab2">
            tab2
          </Tabs.Element>
          <Tabs.Element as={Link} to="/tab3">
            tab3
          </Tabs.Element>
        </Tabs>
      </Router>
    );

    const content = container.getElementsByClassName('.is-right');

    expect(content).toBeTruthy();
  });

  it('Tabs are small', () => {
    const { container } = render(
      <Router initialEntries={['/tab1']}>
        <Tabs size="is-small">
          <Tabs.Element as={Link} to="/tab1">
            tab1
          </Tabs.Element>
          <Tabs.Element as={Link} to="/tab2">
            tab2
          </Tabs.Element>
          <Tabs.Element as={Link} to="/tab3">
            tab3
          </Tabs.Element>
        </Tabs>
      </Router>
    );

    const content = container.getElementsByClassName('.is-small');

    expect(content).toBeTruthy();
  });

  it('Tabs are boxed', () => {
    const { container } = render(
      <Router initialEntries={['/tab1']}>
        <Tabs isBoxed>
          <Tabs.Element as={Link} to="/tab1">
            tab1
          </Tabs.Element>
          <Tabs.Element as={Link} to="/tab2">
            tab2
          </Tabs.Element>
          <Tabs.Element as={Link} to="/tab3">
            tab3
          </Tabs.Element>
        </Tabs>
      </Router>
    );

    const content = container.getElementsByClassName('is-boxed');

    expect(content).toBeTruthy();
  });

  it('Tabs are toggle', () => {
    const { container } = render(
      <Router initialEntries={['/tab1']}>
        <Tabs isToggle>
          <Tabs.Element as={Link} to="/tab1">
            tab1
          </Tabs.Element>
          <Tabs.Element as={Link} to="/tab2">
            tab2
          </Tabs.Element>
          <Tabs.Element as={Link} to="/tab3">
            tab3
          </Tabs.Element>
        </Tabs>
      </Router>
    );

    const content = container.getElementsByClassName('is-toggle');

    expect(content).toBeTruthy();
  });

  it('Tabs are toggle and rounded', () => {
    const { container } = render(
      <Router initialEntries={['/tab1']}>
        <Tabs isToggle isToggleRounded>
          <Tabs.Element as={Link} to="/tab1">
            tab1
          </Tabs.Element>
          <Tabs.Element as={Link} to="/tab2">
            tab2
          </Tabs.Element>
          <Tabs.Element as={Link} to="/tab3">
            tab3
          </Tabs.Element>
        </Tabs>
      </Router>
    );

    const content = container.getElementsByClassName('is-toggle-rounded');

    expect(content).toBeTruthy();
  });

  it('Tabs are full width', () => {
    const { container } = render(
      <Router initialEntries={['/tab1']}>
        <Tabs isFullWidth>
          <Tabs.Element isActive as={Link} to="/tab1">
            tab1
          </Tabs.Element>
          <Tabs.Element as={Link} to="/tab2">
            tab2
          </Tabs.Element>
          <Tabs.Element>tab3</Tabs.Element>
        </Tabs>
      </Router>
    );

    const content = container.getElementsByClassName('is-fullwidth');

    expect(content).toBeTruthy();
  });
});
