import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { Link } from 'react-router-dom';

import { Alignment, Separator, Size } from './types';

interface BreadCrumbElement {
  name: string | ReactNode;
  to: string;
  isActive?: boolean;
}

export interface BreadcrumbProps {
  breadcrumbElement: BreadCrumbElement[];
  alignment?: Alignment;
  separator?: Separator;
  size?: Size;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  breadcrumbElement,
  alignment,
  separator,
  size,
}) => (
  <nav className={clsx('breadcrumb', alignment, separator, size)} aria-label="breadcrumbs">
    <ul>
      {breadcrumbElement.map((element) => (
        <li key={element.to} className={clsx(element.isActive ? 'is-active' : undefined)}>
          <Link to={element.to}>{element.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Breadcrumb;
