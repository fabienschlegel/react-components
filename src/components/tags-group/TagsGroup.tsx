import React, { ReactNode } from 'react';

import clsx from 'clsx';

interface TagsGroupProps {
  children: ReactNode;
  hasAddons?: boolean;
  className?: string;
}

const TagsGroup: React.FC<TagsGroupProps> = ({ children, hasAddons, className }) => (
  <div className={clsx('tags', hasAddons ? 'has-addons' : undefined, className)}>
    {children}
  </div>
);

export default TagsGroup;
