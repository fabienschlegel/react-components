/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Title, { TitleProps } from './Title';

export default {
  title: 'Title',
  component: Title,
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ margin: '0px auto', width: 450 }}>
        <StoryComponent />
      </div>
    ),
  ],
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const BasicTitle = Template.bind({});
BasicTitle.args = {
  children: 'Title',
};
