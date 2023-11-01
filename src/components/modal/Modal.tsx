import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import ModalContent, { ModalContentProps } from './modal-content/ModalContent';
import ModalCard, { ModalCardType } from './modal-card/ModalCard';

interface ModalComposition {
  Content: FunctionComponent<ModalContentProps>;
  Card: ModalCardType;
}

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isActive?: boolean;
  isClipped?: boolean;
  className?: string;
}

type ModalType = FunctionComponent<ModalProps> & ModalComposition;

const Modal: ModalType = ({ children, isActive, isClipped, className, ...others }) => (
  <div
    className={clsx('modal', isActive && 'is-active', isClipped && 'is-clipped', className)}
    {...others}
  >
    <div className="modal-background" />
    {children}
  </div>
);

Modal.Content = ModalContent;
Modal.Card = ModalCard;

export default Modal;
