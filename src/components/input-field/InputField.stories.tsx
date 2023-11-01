import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { flexDecorator } from '../../../stories';

import mdx from './InputField.mdx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMailBulk } from '@fortawesome/free-solid-svg-icons';

import * as HelpStories from '../help/Help.stories';

import InputFieldComponent, { InputFieldProps } from './InputField';

export default {
  title: 'Form/InputField',
  component: InputFieldComponent,
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
} as ComponentMeta<FunctionComponent<InputFieldProps>>;

const InputField: ComponentStory<FunctionComponent<InputFieldProps>> = (args) => (
  <InputFieldComponent {...args}>{args.children}</InputFieldComponent>
);

export const BasicInputField = InputField.bind({});
BasicInputField.args = {
  name: 'input',
  label: 'Input Field',
};

export const RoundedInputField = InputField.bind({});
RoundedInputField.args = {
  ...BasicInputField.args,
  inputProps: { isRounded: true },
};

export const InputFieldWithHelper = InputField.bind({});
InputFieldWithHelper.args = {
  ...BasicInputField.args,
  children: <HelpStories.BasicHelp {...HelpStories.BasicHelp.args} />,
};

export const InputFieldWithIcons = InputField.bind({});
InputFieldWithIcons.args = {
  ...BasicInputField.args,
  leftIcon: { icon: <FontAwesomeIcon icon={faMailBulk} /> },
  rightIcon: { icon: <FontAwesomeIcon icon={faCheck} /> },
};

export const InputFieldWithIconsClickable = InputField.bind({});
InputFieldWithIconsClickable.args = {
  ...BasicInputField.args,
  leftIcon: {
    icon: <FontAwesomeIcon icon={faMailBulk} />,
    handleIconClick: () => {
      // eslint-disable-next-line no-alert
      alert('top');
    },
  },
  rightIcon: {
    icon: <FontAwesomeIcon icon={faCheck} />,
    handleIconClick: () => null,
  },
};
