import React from 'react';

import clsx from 'clsx';

import { Colors } from '../../types';

export interface HelpProps {
  text: string;
  textColor?: Colors;
  className?: string;
}

const Help: React.FC<HelpProps> = ({ text, textColor, className }) => (
  <p className={clsx('help', textColor, className)}>{text}</p>
);

export default Help;
