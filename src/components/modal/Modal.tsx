import React, { ReactNode } from 'react';

import clsx from 'clsx';

import Delete from '../delete/Delete';

export interface ModalProps {
  children: ReactNode;
  isActive?: boolean;
  isClipped?: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

const Modal: React.FC<ModalProps> = ({ children, isActive, isClipped, onClose }) => (
  <div
    className={clsx(
      'modal',
      isActive ? 'is-active' : undefined,
      isClipped ? 'is-clipped' : undefined
    )}
  >
    <div className="modal-background" />
    <div className="modal-content">{children}</div>
    <Delete onClick={onClose} className="modal-close is-large" />
  </div>
);

export default Modal;
