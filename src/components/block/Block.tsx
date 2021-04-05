import React, { ReactNode } from 'react';

import clsx from 'clsx';

type BlockType = {
  children: ReactNode | string;
  className?: string;
};

const Block: React.FC<BlockType> = ({ children, className }) => (
  <div className={clsx('block', className)}>{children}</div>
);

export default Block;
