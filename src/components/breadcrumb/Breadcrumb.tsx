import React, { ReactElement } from 'react';

import clsx from 'clsx';

import { BreadcrumbElementProps } from '../breadcrumb-element/BreadcrumbElement';

import { Alignment, Separator, Sizes } from '../../types';

export interface BreadcrumbProps {
  breadcrumbElements: Array<ReactElement<BreadcrumbElementProps>>;
  alignment?: Alignment;
  separator?: Separator;
  size?: Omit<Sizes, 'is-normal'>;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  breadcrumbElements,
  alignment,
  separator,
  size,
  className,
}) => (
  <nav
    className={clsx('breadcrumb', alignment, separator, size, className)}
    aria-label="breadcrumbs"
  >
    <ul>{breadcrumbElements}</ul>
  </nav>
);

export default Breadcrumb;
