import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

interface TagsGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hasAddons?: boolean;
  className?: string;
}

const TagsGroup: FunctionComponent<TagsGroupProps> = ({
  children,
  hasAddons,
  className,
  ...others
}) => (
  <div className={clsx('tags', hasAddons && 'has-addons', className)} {...others}>
    {children}
  </div>
);

export default TagsGroup;
