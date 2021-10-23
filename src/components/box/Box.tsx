import React, { ReactNode } from 'react';

import clsx from 'clsx';

export type BoxType = {
  children: ReactNode;
  className?: string;
};

const Box: React.FC<BoxType> = ({ children, className }) => (
  <div className={clsx('box', className)}>{children}</div>
);

export default Box;
