import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  fullWidth?: 'is-widescreen' | 'is-fullhd';
  maxWidth?: 'is-max-desktop' | 'is-max-widescreen';
  className?: string;
}

const Container: FunctionComponent<ContainerProps> = ({
  children,
  fullWidth,
  maxWidth,
  className,
  ...others
}) => (
  <div className={clsx('container', fullWidth, maxWidth, className)} {...others}>
    {children}
  </div>
);

export default Container;
