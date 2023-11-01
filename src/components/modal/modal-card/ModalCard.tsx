import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';
import ModalCardHeader, { ModalCardHeaderProps } from '../modal-card-header/ModalCardHeader';
import ModalCardBody, { ModalCardBodyProps } from '../modal-card-body/ModalCardBody';
import ModalCardFooter, { ModalCardFooterProps } from '../modal-card-footer/ModalCardFooter';

interface ModalCardComposition {
  Header: FunctionComponent<ModalCardHeaderProps>;
  Body: FunctionComponent<ModalCardBodyProps>;
  Footer: FunctionComponent<ModalCardFooterProps>;
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
