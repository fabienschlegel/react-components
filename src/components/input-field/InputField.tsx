import React, { FunctionComponent, ReactNode } from 'react';

import Field from '../field/Field';
import Control, { IconsProps } from '../control/Control';
import Input, { InputType } from '../input/Input';
import Label, { LabelType } from '../label/Label';
import Help, { HelpProps } from '../help/Help';

import { Colors, Sizes } from '../../types';

interface InputFieldComposition {
  Help: FunctionComponent<HelpProps>;
}

export interface InputFieldProps {
  name: string;
  label: ReactNode;
  children?: ReactNode;
  color?: Colors;
  size?: Sizes;
  labelProps?: LabelType;
  inputProps?: InputType;
  leftIcon?: IconsProps;
  rightIcon?: IconsProps;
  controlIsExpanded?: boolean;
}

type InputFieldType = FunctionComponent<InputFieldProps> & InputFieldComposition;

const InputField: InputFieldType = ({
  name,
  label,
  children,
  color,
  size,
  labelProps,
  inputProps,
  leftIcon,
  rightIcon,
  controlIsExpanded,
}) => (
  <Field>
    <Label size={size} htmlFor={name} {...labelProps}>
      {label}
    </Label>
    <Control isExpanded={controlIsExpanded} leftIcon={leftIcon} rightIcon={rightIcon}>
      <Input inputSize={size} name={name} borderColor={color} {...inputProps} />
    </Control>
    {children}
  </Field>
);

InputField.Help = Help;

export default InputField;
