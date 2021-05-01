import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface ContainerProps {
  children: ReactNode;
  fullWidth?: 'is-widescreen' | 'is-fullhd';
  maxWidth?: 'is-max-desktop' | 'is-max-widescreen';
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  fullWidth,
  maxWidth,
  className,
}) => <div className={clsx('container', fullWidth, maxWidth, className)}>{children}</div>;

export default Container;
