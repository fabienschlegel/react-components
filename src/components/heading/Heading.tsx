import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import { HeadingLevel } from '../../types';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  headingLevel?: HeadingLevel;
  className?: string;
}

const Heading: FunctionComponent<HeadingProps> = ({
  headingLevel = 'h1',
  className,
  children,
  ...props
}) => React.createElement(headingLevel, { ...props, className }, children);

export default Heading;
