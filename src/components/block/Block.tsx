import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

interface IBlockProps {
  children: ReactNode | string;
  className?: string;
}

const Block: FunctionComponent<IBlockProps> = ({ children, className }) => (
  <div className={clsx('block', className)}>{children}</div>
);

export default Block;
