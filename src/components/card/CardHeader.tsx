import React from 'react';

import clsx from 'clsx';

export interface CardHeaderProps {
  title: string;
  className?: string;
  titleClassName?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, className, titleClassName }) => (
  <header className={clsx('card-header', className)}>
    <p className={clsx('card-header-title', titleClassName)}>{title}</p>
  </header>
);

export default CardHeader;
