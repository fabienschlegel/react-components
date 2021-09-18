import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

export interface CardHeaderProps {
  title: string;
  icon?: ReactNode;
  iconProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
  titleClassName?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  className,
  titleClassName,
  icon,
  iconProps,
}) => (
  <header className={clsx('card-header', className)}>
    <p className={clsx('card-header-title', titleClassName)}>{title}</p>
    {icon && (
      // eslint-disable-next-line react/button-has-type
      <button {...iconProps} className="card-header-icon">
        {icon}
      </button>
    )}
  </header>
);

export default CardHeader;
