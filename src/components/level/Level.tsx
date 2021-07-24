import React from 'react';

import clsx from 'clsx';

import LevelItem, { LevelItemProps } from 'components/level-item/LevelItem';

export interface LevelProps {
  leftItems?: LevelItemProps[];
  rightItems?: LevelItemProps[];
  levelItems?: LevelItemProps[];
  isMobile?: boolean;
}

const Level: React.FC<LevelProps> = ({ leftItems, rightItems, levelItems, isMobile }) => (
  <nav className={clsx('level', isMobile && 'is-mobile')}>
    {leftItems && (
      <div className="level-left">
        {leftItems.map((item) => (
          <LevelItem key={item.id} {...item} />
        ))}
      </div>
    )}
    {levelItems && levelItems.map((item) => <LevelItem key={item.id} {...item} />)}
    {rightItems && (
      <div className="level-right">
        {rightItems.map((item) => (
          <LevelItem key={item.id} {...item} />
        ))}
      </div>
    )}
  </nav>
);

export default Level;
