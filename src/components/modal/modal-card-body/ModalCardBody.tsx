import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface ModalCardBodyProps {
  children: ReactNode;
  className?: string;
}

const ModalCardBody: FunctionComponent<ModalCardBodyProps> = ({ children, className }) => (
  <section className={clsx('modal-card-body', className)}>{children}</section>
);

export default ModalCardBody;
