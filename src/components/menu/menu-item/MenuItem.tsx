import React, { ComponentPropsWithRef, ElementType, ForwardedRef, ReactNode } from 'react';

import { fixedForwardRef } from '../../../utils/utils';

import { DistributiveOmit } from 'types';

export type MenuItemProps<TAs extends ElementType> = {
  children: ReactNode;
  as?: TAs;
} & DistributiveOmit<ComponentPropsWithRef<ElementType extends TAs ? 'a' : TAs>, 'as'>;

const MenuList = <TAs extends ElementType>(
  props: MenuItemProps<TAs>,
  ref: ForwardedRef<unknown>
) => {
  const { children, as: Comp = 'a', ...others } = props;

  return (
    <Comp {...others} ref={ref}>
      {children}
    </Comp>
  );
};
export default fixedForwardRef(MenuList);
