/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import * as ButtonStories from '../button/Button.stories';
import * as CheckboxStories from '../checkbox/Checkbox.stories';
import * as TitleStories from '../title/Title.stories';

import Level, { LevelProps } from './Level';

export default {
  title: 'Level',
  component: Level,
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ margin: '0px auto', width: 800 }}>
        <StoryComponent />
      </div>
    ),
  ],
} as Meta;

const Template: Story<LevelProps> = (args) => <Level {...args} />;

export const BasicLevel = Template.bind({});
BasicLevel.args = {
  leftItems: [
    {
      children: (
        <TitleStories.BasicTitle useParagraph size="is-5">
          <strong>1337</strong> posts
        </TitleStories.BasicTitle>
      ),
    },
    {
      children: (
        <CheckboxStories.BasicCheckbox>Do you agree ?</CheckboxStories.BasicCheckbox>
      ),
    },
  ],
  rightItems: [
    { children: 'Link 1' },
    { children: 'Link 2' },
    { children: 'Link 3' },
    { children: <ButtonStories.BasicButton {...ButtonStories.BasicButton.args} /> },
  ],
};

export const LevelWithCenteredItems = Template.bind({});
LevelWithCenteredItems.args = {
  levelItems: [
    {
      children: (
        <div>
          <p className="heading">Tweets</p>
          <TitleStories.BasicTitle useParagraph>3,456</TitleStories.BasicTitle>
        </div>
      ),
      isCentered: true,
    },
    {
      children: (
        <div>
          <p className="heading">Following</p>
          <TitleStories.BasicTitle useParagraph>123</TitleStories.BasicTitle>
        </div>
      ),
      isCentered: true,
    },
    {
      children: (
        <div>
          <p className="heading">Followers</p>
          <TitleStories.BasicTitle useParagraph>456K</TitleStories.BasicTitle>
        </div>
      ),
      isCentered: true,
    },
    {
      children: (
        <div>
          <p className="heading">LIKES</p>
          <TitleStories.BasicTitle useParagraph>789</TitleStories.BasicTitle>
        </div>
      ),
      isCentered: true,
    },
  ],
};
