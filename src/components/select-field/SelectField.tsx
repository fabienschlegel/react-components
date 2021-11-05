import React from 'react';

import Field from '../field/Field';
import Select, { SelectType } from '../select/Select';
import Label, { LabelType } from '../label/Label';
import Help, { HelpProps } from '../help/Help';

export interface SelectFieldProps extends SelectType {
  name: string;
  label: React.ReactNode;
  labelProps?: LabelType;
  helpProps?: HelpProps;
}

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  label,
  options,
  isMultiple,
  multipleSize,
  color,
  isRounded,
  size,
  states,
  isLoading,
  hasIconLeft,
  controlIsExpanded,
  labelProps,
  helpProps,
  ...others
}) => (
  <Field>
    <Label size={size} htmlFor={name} {...labelProps}>
      {label}
    </Label>
    <Select
      options={options}
      isMultiple={isMultiple}
      multipleSize={multipleSize}
      color={color}
      isRounded={isRounded}
      size={size}
      states={states}
      isLoading={isLoading}
      hasIconLeft={hasIconLeft}
      controlIsExpanded={controlIsExpanded}
      {...others}
    />
    {helpProps && <Help textColor={color} {...helpProps} />}
  </Field>
);

export default SelectField;
