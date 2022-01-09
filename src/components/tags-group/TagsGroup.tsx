import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

interface ITagsGroupProps {
  children: ReactNode;
  hasAddons?: boolean;
  className?: string;
}

const TagsGroup: FunctionComponent<ITagsGroupProps> = ({ children, hasAddons, className }) => (
  <div className={clsx('tags', hasAddons && 'has-addons', className)}>{children}</div>
);

export default TagsGroup;
