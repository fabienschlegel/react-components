import React from 'react';

import Field from '../field/Field';
import Control, { IconsProps } from '../control/Control';
import Input, { InputType } from '../input/Input';
import Label, { LabelType } from '../label/Label';
import Help, { HelpProps } from '../help/Help';

import { Colors, Sizes } from '../../types';

export interface InputFieldProps {
  name: string;
  label: React.ReactNode;
  color?: Colors;
  size?: Sizes;
  labelProps?: LabelType;
  inputProps?: InputType;
  helpProps?: HelpProps;
  icons?: IconsProps;
  controlIsExpanded?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  color,
  size,
  labelProps,
  inputProps,
  helpProps,
  icons,
  controlIsExpanded,
}) => (
  <Field>
    <Label size={size} htmlFor={name} {...labelProps}>
      {label}
    </Label>
    <Control isExpanded={controlIsExpanded} icons={icons}>
      <Input inputSize={size} name={name} borderColor={color} {...inputProps} />
    </Control>
    {helpProps && <Help textColor={color} {...helpProps} />}
  </Field>
);

export default InputField;
