import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

import clsx from 'clsx';

import { Sizes } from '../../types';

interface DeleteProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Omit<Sizes, 'is-normal'>;
  className?: string;
}

const Delete: FunctionComponent<DeleteProps> = ({ size, className, ...others }) => (
  <button type="button" className={clsx('delete', size, className)} {...others} />
);

export default Delete;
