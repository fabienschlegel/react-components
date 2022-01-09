import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import { Sizes } from '../../types';

export interface IContentProps {
  children: ReactNode | string;
  size?: Sizes;
  className?: string;
}

const Content: FunctionComponent<IContentProps> = ({ children, size, className }) => (
  <div className={clsx('content', size, className)}>{children}</div>
);

export default Content;
