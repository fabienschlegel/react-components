import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import LevelItem, { LevelItemProps } from './level-item/LevelItem';
import LevelSide, { LevelSideProps } from './level-side/LevelSide';

interface LevelComposition {
  Left: FunctionComponent<Omit<LevelSideProps, 'side'>>;
  Right: FunctionComponent<Omit<LevelSideProps, 'side'>>;
  Item: FunctionComponent<LevelItemProps>;
}

export interface ILevelProps {
  children: ReactNode;
  isMobile?: boolean;
  className?: string;
}

type LevelType = FunctionComponent<ILevelProps> & LevelComposition;

const Level: LevelType = ({ children, isMobile, className }) => (
  <nav className={clsx('level', isMobile && 'is-mobile', className)}>{children}</nav>
);

Level.Left = (args) => <LevelSide {...args} side="left" />;
Level.Right = (args) => <LevelSide {...args} side="right" />;
Level.Item = LevelItem;

export default Level;
