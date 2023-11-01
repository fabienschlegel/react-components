import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import Delete from '../../delete/Delete';

export interface ModalContentProps {
  children: ReactNode;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const ModalContent: FunctionComponent<ModalContentProps> = ({ children, onClose, className }) => (
  <>
    <div className={clsx('modal-content', className)}>{children}</div>
    <Delete onClick={onClose} className="modal-close is-large" />
  </>
);

export default ModalContent;
