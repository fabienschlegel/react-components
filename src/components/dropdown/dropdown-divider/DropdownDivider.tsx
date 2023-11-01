import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

export interface DropdownDividerProps {
  className?: string;
}

const DropdownDivider: FunctionComponent<DropdownDividerProps> = ({ className }) => (
  <hr className={clsx('dropdown-divider', className)} />
);

export default DropdownDivider;
