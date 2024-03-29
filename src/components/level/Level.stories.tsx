import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { decorator } from '../../../stories';

import mdx from './Level.mdx';

import * as ButtonStories from '../button/Button.stories';
import * as CheckboxStories from '../checkbox/Checkbox.stories';
import * as TitleStories from '../title/Title.stories';

import Level, { LevelType } from './Level';

export default {
  title: 'Layout/Level',
  component: Level,
  decorators: [decorator],
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: mdx,
      source: {
        excludeDecorators: true,
      },
    },
  },
} as ComponentMeta<LevelType>;

const Template: ComponentStory<LevelType> = (args) => <Level {...args}>{args.children}</Level>;

export const BasicLevel = Template.bind({});
BasicLevel.args = {
  children: (
    <>
      <Level.Left>
        <Level.Item>
          <TitleStories.BasicTitle useParagraph size="is-5">
            <strong>1337</strong> posts
          </TitleStories.BasicTitle>
        </Level.Item>
        <Level.Item>
          <CheckboxStories.BasicCheckbox>Do you agree ?</CheckboxStories.BasicCheckbox>
        </Level.Item>
      </Level.Left>
      <Level.Right>
        <Level.Item>Link 1</Level.Item>
        <Level.Item>Link 2</Level.Item>
        <Level.Item>Link 3</Level.Item>
        <Level.Item>
          <ButtonStories.BasicButton {...ButtonStories.BasicButton.args} />
        </Level.Item>
      </Level.Right>
    </>
  ),
};

export const LevelWithCenteredItems = Template.bind({});
LevelWithCenteredItems.args = {
  children: (
    <>
      <Level.Item isCentered>
        <div>
          <p className="heading">Tweets</p>
          <TitleStories.BasicTitle useParagraph>3,456</TitleStories.BasicTitle>
        </div>
      </Level.Item>
      <Level.Item isCentered>
        <div>
          <p className="heading">Following</p>
          <TitleStories.BasicTitle useParagraph>123</TitleStories.BasicTitle>
        </div>
      </Level.Item>
      <Level.Item isCentered>
        <div>
          <p className="heading">Followers</p>
          <TitleStories.BasicTitle useParagraph>456K</TitleStories.BasicTitle>
        </div>
      </Level.Item>
      <Level.Item isCentered>
        <div>
          <p className="heading">LIKES</p>
          <TitleStories.BasicTitle useParagraph>789</TitleStories.BasicTitle>
        </div>
      </Level.Item>
    </>
  ),
};
