/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';

import clsx from 'clsx';

import Size from './types';

export interface DeleteProps {
  size?: Size;
  className?: string;
}

export type DeleteType = DeleteProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Delete: React.FC<DeleteType> = ({ size, className, ...others }) => (
  <button type="button" className={clsx('delete', size, className)} {...others} />
);

export default Delete;
