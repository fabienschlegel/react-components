import React, { FunctionComponent, ReactNode } from 'react';

import { HeadingLevel } from '../../types';

export interface IHeadingProps {
  children: ReactNode;
  headingLevel?: HeadingLevel;
  className?: string;
}

const Heading: FunctionComponent<IHeadingProps> = ({
  headingLevel = 'h1',
  className,
  children,
  ...props
}) => React.createElement(headingLevel, { ...props, className }, children);

export default Heading;
