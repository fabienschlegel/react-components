import React, { FunctionComponent, ReactNode, TextareaHTMLAttributes } from 'react';

import clsx from 'clsx';

import Field from '../field/Field';
import Control from '../control/Control';
import Textarea, { TextareaProps } from '../textarea/Textarea';
import Label, { LabelType } from '../label/Label';
import Help, { HelpProps } from '../help/Help';

import { Colors, Sizes } from '../../types';

interface TextareaFieldComposition {
  Help: FunctionComponent<HelpProps>;
}

export interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: ReactNode;
  children?: ReactNode;
  color?: Colors;
  size?: Sizes;
  labelProps?: LabelType;
  textareaProps?: TextareaProps;
  helpProps?: HelpProps;
  isLoading?: boolean;
}

type TextareaFieldType = FunctionComponent<TextareaFieldProps> & TextareaFieldComposition;

const TextareaField: TextareaFieldType = ({
  name,
  label,
  children,
  color,
  size,
  labelProps,
  isLoading,
  ...textareaProps
}) => {
  const { className: labelClassName, ...othersLabelProps } = labelProps || {
    className: undefined,
  };
  return (
    <Field>
      <Label size={size} htmlFor={name} className={clsx(labelClassName)} {...othersLabelProps}>
        {label}
      </Label>
      <Control size={size} isLoading={isLoading}>
        <Textarea size={size} name={name} borderColor={color} {...textareaProps} />
      </Control>
      {children}
    </Field>
  );
};

TextareaField.Help = Help;

export default TextareaField;
