import React from 'react';

import clsx from 'clsx';

import { Colors, Sizes } from '../../types';

interface TextareaProps {
  size?: Sizes;
  borderColor?: Colors;
  isHovered?: boolean;
  isFocused?: boolean;
  isActive?: boolean;
  isStatic?: boolean;
  hasFixedSize?: boolean;
}

export type TextareaType = TextareaProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<TextareaType> = ({
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
      isHovered ? 'is-hovered' : undefined,
      isFocused ? 'is-focused' : undefined,
      isActive ? 'is-active' : undefined,
      isStatic ? 'is-static' : undefined,
      hasFixedSize ? 'has-fixed-size' : undefined,
      className
    )}
    {...others}
  />
);

export default Textarea;
