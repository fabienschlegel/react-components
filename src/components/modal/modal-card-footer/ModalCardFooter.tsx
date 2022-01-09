import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface IModalCardFooterProps {
  children: ReactNode;
  className?: string;
}

const ModalCardFooter: FunctionComponent<IModalCardFooterProps> = ({ children, className }) => (
  <footer className={clsx('modal-card-foot', className)}>{children}</footer>
);

export default ModalCardFooter;
