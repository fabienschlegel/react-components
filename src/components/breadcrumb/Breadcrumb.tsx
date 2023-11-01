import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import BreadcrumbElement, { BreadcrumbElementProps } from './breadcrumb-element/BreadcrumbElement';

import { Alignment, Separator, Sizes } from '../../types';

interface BreadcrumbComposition {
  Element: FunctionComponent<BreadcrumbElementProps>;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  alignment?: Alignment;
  separator?: Separator;
  size?: Omit<Sizes, 'is-normal'>;
  className?: string;
}

type BreadcrumbType = FunctionComponent<BreadcrumbProps> & BreadcrumbComposition;

const Breadcrumb: BreadcrumbType = ({
  children,
  alignment,
  separator,
  size,
  className,
  ...others
}) => (
  <nav
    className={clsx('breadcrumb', alignment, separator, size, className)}
    aria-label="breadcrumbs"
    {...others}
  >
    <ul>{children}</ul>
  </nav>
);

Breadcrumb.Element = BreadcrumbElement;

export default Breadcrumb;
