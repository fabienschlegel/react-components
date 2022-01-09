import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface IBoxProps {
  children: ReactNode;
  className?: string;
}

const Box: FunctionComponent<IBoxProps> = ({ children, className }) => (
  <div className={clsx('box', className)}>{children}</div>
);

export default Box;
