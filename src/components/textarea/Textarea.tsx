import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

import { Colors, Sizes } from '../../types';

interface ITextareaProps {
  size?: Sizes;
  borderColor?: Colors;
  isHovered?: boolean;
  isFocused?: boolean;
  isActive?: boolean;
  isStatic?: boolean;
  hasFixedSize?: boolean;
}

export type TextareaType = ITextareaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: FunctionComponent<TextareaType> = ({
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
