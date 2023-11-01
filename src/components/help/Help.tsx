import React, { FunctionComponent, HTMLAttributes } from 'react';

import clsx from 'clsx';

import { Colors } from '../../types';

export interface HelpProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  color?: Colors;
  className?: string;
}

const Help: FunctionComponent<HelpProps> = ({ text, color, className, ...others }) => (
  <p className={clsx('help', color, className)} {...others}>
    {text}
  </p>
);

export default Help;
