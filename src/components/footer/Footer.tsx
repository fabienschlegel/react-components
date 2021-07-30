import clsx from 'clsx';
import React, { ReactNode } from 'react';

export interface FooterProps {
  children: ReactNode;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ children, className }) => (
  <footer className={clsx('footer', className)}>{children}</footer>
);

export default Footer;
