import React, { ReactNode } from 'react';

import clsx from 'clsx';

interface FooterItems {
  items: { id: string; item: ReactNode; className?: string }[];
  className?: string;
}

export interface CardFooterProps {
  footerItems: FooterItems;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ footerItems, className }) => (
  <footer className={clsx('card-footer', className)}>
    {footerItems.items.map((item) => (
      <div
        key={item.id}
        className={clsx('card-footer-item', footerItems.className, item.className)}
      >
        {item.item}
      </div>
    ))}
  </footer>
);

export default CardFooter;
