import React, { FunctionComponent, TextareaHTMLAttributes } from 'react';

import clsx from 'clsx';

import { Colors, Sizes } from '../../types';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: Sizes;
  borderColor?: Colors;
  isHovered?: boolean;
  isFocused?: boolean;
  isActive?: boolean;
  isStatic?: boolean;
  hasFixedSize?: boolean;
}

const Textarea: FunctionComponent<TextareaProps> = ({
  size,
  borderColor,
  isHovered,
  isFocused,
  isActive,
  isStatic,
  hasFixedSize,
  className,
  ...others
}) => (
  <textarea
    className={clsx(
      'textarea',
      size,
      borderColor,
      isHovered && 'is-hovered',
      isFocused && 'is-focused',
      isActive && 'is-active',
      isStatic && 'is-static',
      hasFixedSize && 'has-fixed-size',
      className
    )}
    {...others}
  />
);

export default Textarea;
