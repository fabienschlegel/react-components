import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Title, { TitleProps } from './Title';

export default {
  title: 'Elements/Title',
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
