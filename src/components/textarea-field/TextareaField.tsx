import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import Field from '../field/Field';
import Control from '../control/Control';
import Textarea, { TextareaType } from '../textarea/Textarea';
import Label, { LabelType } from '../label/Label';
import Help, { HelpProps } from '../help/Help';

import { Colors, Sizes } from '../../types';

interface TextareaFieldComposition {
  Help: FunctionComponent<HelpProps>;
}

export interface ITextareaFieldProps {
  name: string;
  label: ReactNode;
  children?: ReactNode;
  color?: Colors;
  size?: Sizes;
  labelProps?: LabelType;
  textareaProps?: TextareaType;
  helpProps?: HelpProps;
  isLoading?: boolean;
}

type TextareaFieldType = FunctionComponent<ITextareaFieldProps> & TextareaFieldComposition;

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
