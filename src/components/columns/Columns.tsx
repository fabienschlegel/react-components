import React, { ReactNode } from 'react';

import clsx from 'clsx';

export enum ColumnsGap {
  is0 = 'is-0',
  is1 = 'is-1',
  is2 = 'is-2',
  is3 = 'is-3',
  is4 = 'is-4',
  is5 = 'is-5',
  is6 = 'is-6',
  is7 = 'is-7',
  is8 = 'is-8',
}

interface ColumnsProps {
  children: ReactNode;
  isMobile?: boolean;
  isDesktop?: boolean;
  isGapLess?: boolean;
  isMultiline?: boolean;
  isVCentered?: boolean;
  isCentered?: boolean;
  columnsGap?: ColumnsGap;
  mobileColumnsGap?: ColumnsGap;
  tabletColumnsGap?: ColumnsGap;
  desktopColumnsGap?: ColumnsGap;
  widescreenColumnsGap?: ColumnsGap;
  fullhdColumnsGap?: ColumnsGap;
  className?: string;
}

const Columns: React.FC<ColumnsProps> = ({
  children,
  isMobile,
  isDesktop,
  isGapLess,
  isMultiline,
  isVCentered,
  isCentered,
  columnsGap,
  mobileColumnsGap,
  tabletColumnsGap,
  desktopColumnsGap,
  widescreenColumnsGap,
  fullhdColumnsGap,
  className,
}) => (
  <div
    className={clsx(
      'columns',
      isMobile ? 'is-mobile' : undefined,
      isDesktop ? 'is-desktop' : undefined,
      isGapLess ? 'is-gapless' : undefined,
      isMultiline ? 'is-multiline' : undefined,
      isVCentered ? 'is-vcentered' : undefined,
      isCentered ? 'is-centered' : undefined,
      columnsGap,
      mobileColumnsGap ? `${mobileColumnsGap}-mobile` : undefined,
      tabletColumnsGap ? `${tabletColumnsGap}-tablet` : undefined,
      desktopColumnsGap ? `${desktopColumnsGap}-desktop` : undefined,
      widescreenColumnsGap ? `${widescreenColumnsGap}-widescreen` : undefined,
      fullhdColumnsGap ? `${fullhdColumnsGap}-fullhd` : undefined,
      columnsGap ||
        mobileColumnsGap ||
        tabletColumnsGap ||
        desktopColumnsGap ||
        widescreenColumnsGap ||
        fullhdColumnsGap
        ? 'is-variable'
        : undefined,
      className
    )}
  >
    {children}
  </div>
);

export default Columns;
