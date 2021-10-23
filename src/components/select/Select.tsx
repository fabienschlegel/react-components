import React, { ReactNode } from 'react';

import clsx from 'clsx';

import Control from '../control/Control';

import { Colors, Sizes } from '../../types';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Array<Option>;
  isMultiple?: boolean;
  multipleSize?: number;
  color?: Colors;
  isRounded?: boolean;
  size?: Sizes;
  isHovered?: boolean;
  isFocused?: boolean;
  isLoading?: boolean;
  hasIconLeft?: ReactNode;
  controlIsExpanded?: boolean;
}

export type SelectType = SelectProps & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select: React.FC<SelectType> = ({
  options,
  isMultiple,
  multipleSize,
  color,
  isRounded,
  size,
  isHovered,
  isFocused,
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
        isMultiple ? 'is-multiple' : null,
        color,
        isRounded ? 'is-rounded' : null,
        size,
        isLoading ? 'is-loading' : null
      )}
    >
      <select
        multiple={isMultiple}
        size={isMultiple ? multipleSize : undefined}
        className={clsx(isHovered ? 'is-hovered' : null, isFocused ? 'is-focused' : null)}
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
