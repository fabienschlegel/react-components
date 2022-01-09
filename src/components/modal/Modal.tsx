import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import ModalContent, { IModalContentProps } from './modal-content/ModalContent';
import ModalCard, { ModalCardType } from './modal-card/ModalCard';

interface ModalComposition {
  Content: FunctionComponent<IModalContentProps>;
  Card: ModalCardType;
}

export interface ModalProps {
  children: ReactNode;
  isActive?: boolean;
  isClipped?: boolean;
  className?: string;
}

type ModalType = FunctionComponent<ModalProps> & ModalComposition;

const Modal: ModalType = ({ children, isActive, isClipped, className }) => (
  <div className={clsx('modal', isActive && 'is-active', isClipped && 'is-clipped', className)}>
    <div className="modal-background" />
    {children}
  </div>
);

Modal.Content = ModalContent;
Modal.Card = ModalCard;

export default Modal;
