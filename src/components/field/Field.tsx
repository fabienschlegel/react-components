import React, { ReactNode } from 'react';

import clsx from 'clsx';

interface FieldProps {
  children: ReactNode;
  className?: string;
}

const Field: React.FC<FieldProps> = ({ children, className }) => (
  <div className={clsx('field', className)}>{children}</div>
);

export default Field;
