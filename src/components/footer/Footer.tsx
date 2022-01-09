import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';

export interface FooterProps {
  children: ReactNode;
  className?: string;
}

const Footer: FunctionComponent<FooterProps> = ({ children, className }) => (
  <footer className={clsx('footer', className)}>{children}</footer>
);

export default Footer;
