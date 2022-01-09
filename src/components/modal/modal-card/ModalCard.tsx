import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';
import ModalCardHeader, { IModalCardHeaderProps } from '../modal-card-header/ModalCardHeader';
import ModalCardBody, { IModalCardBodyProps } from '../modal-card-body/ModalCardBody';
import ModalCardFooter, { IModalCardFooterProps } from '../modal-card-footer/ModalCardFooter';

interface ModalCardComposition {
  Header: FunctionComponent<IModalCardHeaderProps>;
  Body: FunctionComponent<IModalCardBodyProps>;
  Footer: FunctionComponent<IModalCardFooterProps>;
}

interface IModalCardProps {
  children: ReactNode;
  className?: string;
}

export type ModalCardType = FunctionComponent<IModalCardProps> & ModalCardComposition;

const ModalCard: ModalCardType = ({ children, className }) => (
  <div className={clsx('modal-card', className)}>{children}</div>
);

ModalCard.Header = ModalCardHeader;
ModalCard.Body = ModalCardBody;
ModalCard.Footer = ModalCardFooter;

export default ModalCard;
