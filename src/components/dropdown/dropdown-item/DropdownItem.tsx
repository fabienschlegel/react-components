import React, { ComponentPropsWithRef, ElementType, ForwardedRef, ReactNode } from 'react';

import clsx from 'clsx';

import { fixedForwardRef } from '../../../utils/utils';

import { DistributiveOmit } from 'types';

export type DropdownItemProps<TAs extends ElementType> = {
  children: ReactNode;
  isActive?: boolean;
  className?: string;
  as?: TAs;
} & DistributiveOmit<ComponentPropsWithRef<ElementType extends TAs ? 'a' : TAs>, 'as'>;

const DropdownItem = <TAs extends ElementType>(
  props: DropdownItemProps<TAs>,
  ref: ForwardedRef<unknown>
) => {
  const { children, isActive, className, as: Comp = 'a', ...others } = props;

  return (
    <Comp
      className={clsx('dropdown-item', isActive && 'is-active', className)}
      {...others}
      ref={ref}
    >
      {children}
    </Comp>
  );
};

export default fixedForwardRef(DropdownItem);
