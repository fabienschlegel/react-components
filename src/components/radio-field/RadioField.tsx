import React from 'react';

import Field from '../field/Field';
import Control from '../control/Control';
import RadioElement, { RadioElementType } from '../radio-element/RadioElement';

export interface RadioFieldProps {
  radioElements: Array<Omit<RadioElementType, 'name'>>;
  name: string;
}

const RadioField: React.FC<RadioFieldProps> = ({ radioElements, name }) => (
  <Field>
    <Control>
      {radioElements.map((radioElement) => (
        <RadioElement name={name} {...radioElement}>
          {radioElement.children}
        </RadioElement>
      ))}
    </Control>
  </Field>
);

export default RadioField;
