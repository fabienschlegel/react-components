/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMailBulk } from '@fortawesome/free-solid-svg-icons';

import * as HelpStories from '../help/Help.stories';

import InputFieldComponent, { InputFieldProps } from './InputField';

export default {
  title: 'InputField',
  component: InputFieldComponent,
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ margin: '0px auto', width: 450 }}>
        <StoryComponent />
      </div>
    ),
  ],
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
  icons: {
    leftIcon: <FontAwesomeIcon icon={faMailBulk} />,
    rightIcon: <FontAwesomeIcon icon={faCheck} />,
  },
};

export const InputFieldWithIconsClickable = InputField.bind({});
InputFieldWithIconsClickable.args = {
  ...BasicInputField.args,
  icons: {
    leftIcon: <FontAwesomeIcon icon={faMailBulk} />,
    rightIcon: <FontAwesomeIcon icon={faCheck} />,
    handleLeftIconClick: () => {
      // eslint-disable-next-line no-alert
      alert('top');
    },
    handleRightIconClick: () => {},
  },
};
