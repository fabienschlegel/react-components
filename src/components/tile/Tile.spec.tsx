/* eslint-disable no-undef */
import React from 'react';

import { mount } from 'enzyme';

import Tile from './Tile';

describe('Test Tile', () => {
  it('Mount Tile', () => {
    const wrapper = mount(<Tile context="is-child">Tile Content</Tile>);
    expect(wrapper.length).toEqual(1);
  });

  it('Test Tile is vertical', () => {
    const wrapper = mount(
      <Tile context="is-child" isVertical>
        Tile Content
      </Tile>
    );

    const verticalTile = wrapper.find('div.tile').hasClass('is-vertical');

    expect(verticalTile).toBeTruthy();
  });

  it('Test Tile is box', () => {
    const wrapper = mount(
      <Tile context="is-child" isBox>
        Tile Content
      </Tile>
    );

    const boxTile = wrapper.find('div.tile').hasClass('box');

    expect(boxTile).toBeTruthy();
  });

  it('Test Tile with color', () => {
    const wrapper = mount(
      <Tile context="is-child" color="is-primary">
        Tile Content
      </Tile>
    );

    const colorTile = wrapper.find('div.tile').hasClass('notification is-primary');

    expect(colorTile).toBeTruthy();
  });
});
