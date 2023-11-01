import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface ModalCardFooterProps {
  children: ReactNode;
  className?: string;
}

const ModalCardFooter: FunctionComponent<ModalCardFooterProps> = ({ children, className }) => (
  <footer className={clsx('modal-card-foot', className)}>{children}</footer>
);

export default ModalCardFooter;
