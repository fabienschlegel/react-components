import React, { ButtonHTMLAttributes, FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

export interface CardHeaderProps extends HTMLAttributes<HTMLElement> {
  title: string;
  icon?: ReactNode;
  iconProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
  titleClassName?: string;
}

const CardHeader: FunctionComponent<CardHeaderProps> = ({
  title,
  className,
  titleClassName,
  icon,
  iconProps,
  ...others
}) => {
  const { className: iconClassName, ...otherIconProps } = iconProps || {
    className: undefined,
  };
  return (
    <header className={clsx('card-header', className)} {...others}>
      <p className={clsx('card-header-title', titleClassName)}>{title}</p>
      {icon && (
        <button {...otherIconProps} className={clsx('card-header-icon', iconClassName)}>
          {icon}
        </button>
      )}
    </header>
  );
};

export default CardHeader;
