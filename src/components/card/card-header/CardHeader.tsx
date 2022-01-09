import React, { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface ICardHeaderProps {
  title: string;
  icon?: ReactNode;
  iconProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
  titleClassName?: string;
}

const CardHeader: FunctionComponent<ICardHeaderProps> = ({
  title,
  className,
  titleClassName,
  icon,
  iconProps,
}) => {
  const { className: iconClassName, ...otherIconProps } = iconProps || {
    className: undefined,
  };
  return (
    <header className={clsx('card-header', className)}>
      <p className={clsx('card-header-title', titleClassName)}>{title}</p>
      {icon && (
        // eslint-disable-next-line react/button-has-type
        <button {...otherIconProps} className={clsx('card-header-icon', iconClassName)}>
          {icon}
        </button>
      )}
    </header>
  );
};

export default CardHeader;
