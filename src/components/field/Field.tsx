import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

interface IFieldProps {
  children: ReactNode;
  className?: string;
}

const Field: FunctionComponent<IFieldProps> = ({ children, className }) => (
  <div className={clsx('field', className)}>{children}</div>
);

export default Field;
