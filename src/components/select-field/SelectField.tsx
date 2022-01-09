import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import Field from '../field/Field';
import Select, { SelectType } from '../select/Select';
import Label, { LabelType } from '../label/Label';
import Help, { HelpProps } from '../help/Help';

interface SelectFieldComposition {
  Help: FunctionComponent<HelpProps>;
}

export interface ISelectFieldProps extends SelectType {
  name: string;
  label: React.ReactNode;
  children?: ReactNode;
  labelProps?: LabelType;
}

type SelectFieldType = FunctionComponent<ISelectFieldProps> & SelectFieldComposition;

const SelectField: SelectFieldType = ({
  children,
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
  ...others
}) => {
  const { className: labelClassName, ...othersLabelProps } = labelProps || {
    className: undefined,
  };
  return (
    <Field>
      <Label size={size} htmlFor={name} className={clsx(labelClassName)} {...othersLabelProps}>
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
      {children}
    </Field>
  );
};

SelectField.Help = Help;

export default SelectField;
