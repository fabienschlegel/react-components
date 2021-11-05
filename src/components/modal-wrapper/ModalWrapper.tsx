import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

interface ModalWrapperProps {
  children: ReactNode;
  isActive?: boolean;
  isClipped?: boolean;
}

const ModalWrapper: FunctionComponent<ModalWrapperProps> = ({ children, isActive, isClipped }) => (
  <div className={clsx('modal', isActive && 'is-active', isClipped && 'is-clipped')}>
    {children}
  </div>
);

export default ModalWrapper;
