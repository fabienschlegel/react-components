import React, { ReactNode } from 'react';

import clsx from 'clsx';

import Delete from '../delete/Delete';

export interface ModalCardProps {
  title: string | ReactNode;
  children: ReactNode;
  footer: ReactNode;
  isActive?: boolean;
  isClipped?: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

const Modal: React.FC<ModalCardProps> = ({
  title,
  children,
  footer,
  isActive,
  isClipped,
  onClose,
}) => (
  <div
    className={clsx(
      'modal',
      isActive ? 'is-active' : undefined,
      isClipped ? 'is-clipped' : undefined
    )}
  >
    <div className="modal-background" />
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{title}</p>
        <Delete onClick={onClose} />
      </header>
      <section className="modal-card-body">{children}</section>
      <footer className="modal-card-foot">{footer}</footer>
    </div>
  </div>
);

export default Modal;
