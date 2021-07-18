/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import FileField, { FileFieldType } from './FileField';

export default {
  title: 'FileField',
  component: FileField,
  args: {},
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['is-small', 'is-normal', 'is-medium', 'is-large'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'is-primary',
          'is-link',
          'is-info',
          'is-success',
          'is-warning',
          'is-danger',
          'is-white',
          'is-light',
          'is-dark',
          'is-black',
        ],
      },
    },
  },
  decorators: [
    (StoryComponent) => (
      <div style={{ margin: '0px auto', width: 450 }}>
        <StoryComponent />
      </div>
    ),
  ],
} as Meta;

const Template: Story<FileFieldType> = (args) => <FileField {...args} />;

export const BasicFileField = Template.bind({});
BasicFileField.args = {
  name: 'BasicFileField',
  fileLabel: 'Upload',
};

export const FileFieldWithFileName = Template.bind({});
FileFieldWithFileName.args = {
  ...BasicFileField.args,
  fileName: 'Its-a-trap-2021-07-16.jpeg',
};
