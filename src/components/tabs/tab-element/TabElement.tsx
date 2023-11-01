import React, { ComponentPropsWithRef, ElementType, ForwardedRef, ReactNode } from 'react';

import clsx from 'clsx';

import { fixedForwardRef } from '../../../utils/utils';

import { DistributiveOmit } from 'types';

export type TabElementProps<TAs extends ElementType> = {
  children: string | ReactNode;
  isActive?: boolean;
  className?: string;
  as?: TAs;
} & DistributiveOmit<ComponentPropsWithRef<ElementType extends TAs ? 'a' : TAs>, 'as'>;

const TabElement = <TAs extends ElementType>(
  props: TabElementProps<TAs>,
  ref: ForwardedRef<unknown>
) => {
  const { children, isActive, className, as: Comp = 'a', ...others } = props;
  return (
    <li className={clsx(isActive && 'is-active', className)}>
      <Comp {...others} ref={ref}>
        {children}
      </Comp>
    </li>
  );
};

export default fixedForwardRef(TabElement);
