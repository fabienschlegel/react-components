import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import LevelItem, { LevelItemProps } from './level-item/LevelItem';
import LevelSide, { LevelSideProps } from './level-side/LevelSide';

interface LevelComposition {
  Left: FunctionComponent<Omit<LevelSideProps, 'side'>>;
  Right: FunctionComponent<Omit<LevelSideProps, 'side'>>;
  Item: FunctionComponent<LevelItemProps>;
}

interface LevelProps {
  children: ReactNode;
  isMobile?: boolean;
  className?: string;
}

export type LevelType = FunctionComponent<LevelProps> & LevelComposition;

const LevelLeft: FunctionComponent<Omit<LevelSideProps, 'side'>> = (args) => (
  <LevelSide {...args} side="left" />
);

const LevelRight: FunctionComponent<Omit<LevelSideProps, 'side'>> = (args) => (
  <LevelSide {...args} side="right" />
);

const Level: LevelType = ({ children, isMobile, className }) => (
  <nav className={clsx('level', isMobile && 'is-mobile', className)}>{children}</nav>
);

Level.Left = LevelLeft;
Level.Right = LevelRight;
Level.Item = LevelItem;

export default Level;
