import React, { ReactNode } from 'react';

import Delete from '../delete/Delete';
import ModalWrapper from '../modal-wrapper/ModalWrapper';

export interface ModalProps {
  children: ReactNode;
  isActive?: boolean;
  isClipped?: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

const Modal: React.FC<ModalProps> = ({ children, isActive, isClipped, onClose }) => (
  <ModalWrapper isActive={isActive} isClipped={isClipped}>
    <div className="modal-background" />
    <div className="modal-content">{children}</div>
    <Delete onClick={onClose} className="modal-close is-large" />
  </ModalWrapper>
);

export default Modal;
