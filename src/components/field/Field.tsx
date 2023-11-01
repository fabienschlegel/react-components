import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

interface FieldProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const Field: FunctionComponent<FieldProps> = ({ children, className, ...others }) => (
  <div className={clsx('field', className)} {...others}>
    {children}
  </div>
);

export default Field;
