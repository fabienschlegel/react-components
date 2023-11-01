import React, { ComponentPropsWithRef, ElementType, ForwardedRef, ReactNode } from 'react';

import clsx from 'clsx';

import { fixedForwardRef } from '../../../utils/utils';

import { DistributiveOmit } from 'types';

export type NavbarItemProps<TAs extends ElementType> = {
  children: ReactNode;
  className?: string;
  as?: TAs;
} & DistributiveOmit<ComponentPropsWithRef<ElementType extends TAs ? 'a' : TAs>, 'as'>;

const NavbarItem = <TAs extends ElementType>(
  props: NavbarItemProps<TAs>,
  ref: ForwardedRef<unknown>
) => {
  const { children, className, as: Comp = 'a', ...others } = props;

  return (
    <Comp className={clsx('navbar-item', className)} {...others} ref={ref}>
      {children}
    </Comp>
  );
};

export default fixedForwardRef(NavbarItem);
