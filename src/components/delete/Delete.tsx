import * as React from 'react';

import clsx from 'clsx';

import { Sizes } from '../../types';

interface IDeleteProps {
  size?: Omit<Sizes, 'is-normal'>;
  className?: string;
}

type DeleteType = IDeleteProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Delete: React.FunctionComponent<DeleteType> = ({ size, className, ...others }) => (
  <button type="button" className={clsx('delete', size, className)} {...others} />
);

export default Delete;
