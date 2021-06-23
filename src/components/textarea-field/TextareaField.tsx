import React from 'react';

import Field from '../field/Field';
import Control from '../control/Control';
import Textarea, { TextareaType } from '../textarea/Textarea';
import Label, { LabelType } from '../label/Label';
import Help, { HelpProps } from '../help/Help';

import { Colors, Sizes } from '../../types';

export interface TextareaFieldProps {
  name: string;
  label: React.ReactNode;
  color?: Colors;
  size?: Sizes;
  labelProps?: LabelType;
  textareaProps?: TextareaType;
  helpProps?: HelpProps;
  isLoading?: boolean;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  name,
  label,
  color,
  size,
  labelProps,
  textareaProps,
  helpProps,
  isLoading,
}) => (
  <Field>
    <Label size={size} htmlFor={name} {...labelProps}>
      {label}
    </Label>
    <Control size={size} isLoading={isLoading}>
      <Textarea size={size} name={name} borderColor={color} {...textareaProps} />
    </Control>
    {helpProps && <Help textColor={color} {...helpProps} />}
  </Field>
);

export default TextareaField;
