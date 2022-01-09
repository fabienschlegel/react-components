import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

import { Colors } from '../../types';

export interface HelpProps {
  text: string;
  color?: Colors;
  className?: string;
}

const Help: FunctionComponent<HelpProps> = ({ text, color, className }) => (
  <p className={clsx('help', color, className)}>{text}</p>
);

export default Help;
