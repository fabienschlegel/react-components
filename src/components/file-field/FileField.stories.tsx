import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { flexDecorator } from '../../../stories';

import mdx from './FileField.mdx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import FileField, { FileFieldProps } from './FileField';

export default {
  title: 'Form/FileField',
  component: FileField,
  argTypes: {
    sizes: {
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
  decorators: [flexDecorator],
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: mdx,
      source: {
        excludeDecorators: true,
      },
    },
  },
} as ComponentMeta<FunctionComponent<FileFieldProps>>;

const Template: ComponentStory<FunctionComponent<FileFieldProps>> = (args) => (
  <FileField {...args} />
);

export const BasicFileField = Template.bind({});

BasicFileField.args = {
  name: 'BasicFileField',
  fileLabel: 'Upload',
};

export const CustomIconFileField = Template.bind({});

CustomIconFileField.args = {
  ...BasicFileField.args,
  downloadIcon: <FontAwesomeIcon icon={faDownload} />,
};

export const FileFieldWithFileName = Template.bind({});

FileFieldWithFileName.args = {
  ...BasicFileField.args,
  fileName: 'Its-a-trap-2021-07-16.jpeg',
};
