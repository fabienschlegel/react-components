import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import BreadcrumbElement, { IBreadcrumbElementProps } from './breadcrumb-element/BreadcrumbElement';

import { Alignment, Separator, Sizes } from '../../types';

interface IBreadcrumbComposition {
  Element: FunctionComponent<IBreadcrumbElementProps>;
}

export interface IBreadcrumbProps {
  children: ReactNode;
  alignment?: Alignment;
  separator?: Separator;
  size?: Omit<Sizes, 'is-normal'>;
  className?: string;
}

type BreadcrumbType = FunctionComponent<IBreadcrumbProps> & IBreadcrumbComposition;

const Breadcrumb: BreadcrumbType = ({ children, alignment, separator, size, className }) => (
  <nav
    className={clsx('breadcrumb', alignment, separator, size, className)}
    aria-label="breadcrumbs"
  >
    <ul>{children}</ul>
  </nav>
);

Breadcrumb.Element = BreadcrumbElement;

export default Breadcrumb;
