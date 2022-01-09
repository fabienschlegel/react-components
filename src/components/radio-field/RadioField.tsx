import React, { FunctionComponent, ReactNode } from 'react';

import Field from '../field/Field';
import Control from '../control/Control';
import RadioElement, { RadioElementType } from './radio-element/RadioElement';

interface RadiofieldComposition {
  Element: FunctionComponent<RadioElementType>;
}
export interface IRadioFieldProps {
  children: ReactNode;
  className?: string;
}

type RadioFieldType = FunctionComponent<IRadioFieldProps> & RadiofieldComposition;

const RadioField: RadioFieldType = ({ children, className }) => (
  <Field className={className}>
    <Control>{children}</Control>
  </Field>
);

RadioField.Element = RadioElement;

export default RadioField;
