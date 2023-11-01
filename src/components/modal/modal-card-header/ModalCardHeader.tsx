import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import Delete from '../../delete/Delete';

export interface ModalCardHeaderProps {
  children: ReactNode;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const ModalCardHeader: FunctionComponent<ModalCardHeaderProps> = ({
  children,
  onClose,
  className,
}) => (
  <header className={clsx('modal-card-head', className)}>
    <p className="modal-card-title">{children}</p>
    <Delete onClick={onClose} />
  </header>
);

export default ModalCardHeader;
