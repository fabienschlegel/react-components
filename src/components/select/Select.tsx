import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import Control from '../control/Control';

import { Colors, Sizes } from '../../types';

interface Option {
  label: string;
  value: string;
}

interface IStates {
  'is-hovered'?: boolean;
  'is-focused'?: boolean;
}

interface SelectProps {
  options: Array<Option>;
  isMultiple?: boolean;
  multipleSize?: number;
  color?: Colors;
  size?: Sizes;
  states?: IStates;
  isRounded?: boolean;
  isLoading?: boolean;
  hasIconLeft?: ReactNode;
  controlIsExpanded?: boolean;
}

export type SelectType = SelectProps & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select: FunctionComponent<SelectType> = ({
  options,
  isMultiple,
  multipleSize,
  color,
  size,
  states,
  isRounded,
  isLoading,
  hasIconLeft,
  controlIsExpanded,
  ...others
}) => (
  <Control
    isExpanded={controlIsExpanded}
    icons={hasIconLeft ? { leftIcon: hasIconLeft, leftIconClassName: size } : undefined}
  >
    <div
      className={clsx(
        'select',
        isMultiple && 'is-multiple',
        color,
        size,
        isRounded && 'is-rounded',
        isLoading && 'is-loading'
      )}
    >
      <select
        multiple={isMultiple}
        size={isMultiple ? multipleSize : undefined}
        className={clsx(states)}
        {...others}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  </Control>
);

export default Select;
