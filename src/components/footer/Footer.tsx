import clsx from 'clsx';
import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const Footer: FunctionComponent<FooterProps> = ({ children, className, ...others }) => (
  <footer className={clsx('footer', className)} {...others}>
    {children}
  </footer>
);

export default Footer;
