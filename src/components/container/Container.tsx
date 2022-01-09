import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface IContainerProps {
  children: ReactNode;
  fullWidth?: 'is-widescreen' | 'is-fullhd';
  maxWidth?: 'is-max-desktop' | 'is-max-widescreen';
  className?: string;
}

const Container: FunctionComponent<IContainerProps> = ({
  children,
  fullWidth,
  maxWidth,
  className,
}) => <div className={clsx('container', fullWidth, maxWidth, className)}>{children}</div>;

export default Container;
