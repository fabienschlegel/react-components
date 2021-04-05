import React from 'react';

import HeadingLevel from './types';

export interface HeadingProps {
  headingLevel?: HeadingLevel;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  headingLevel = HeadingLevel.h1,
  className,
  children,
  ...props
}) => React.createElement(headingLevel, { ...props, className }, children);

export default Heading;
