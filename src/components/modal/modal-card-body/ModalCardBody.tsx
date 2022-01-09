import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface IModalCardBodyProps {
  children: ReactNode;
  className?: string;
}

const ModalCardBody: FunctionComponent<IModalCardBodyProps> = ({ children, className }) => (
  <section className={clsx('modal-card-body', className)}>{children}</section>
);

export default ModalCardBody;
