import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { Sizes, Colors } from '../../types';

type AdditionalSizes = 'is-halfheight' | 'is-fullheight' | 'is-fullheight-with-navbar';

type HeroSizes = Omit<Sizes, 'is-normal'> | AdditionalSizes;

export interface HeroProps {
  title: ReactNode;
  subtitle: ReactNode;
  head?: ReactNode;
  footer?: ReactNode;
  size?: HeroSizes;
  color?: Colors;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  head,
  footer,
  size,
  color = 'is-primary',
}) => (
  <section className={clsx('hero', size, color)}>
    {head && <div className="hero-head">{head}</div>}
    <div className="hero-body">
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
    </div>
    {footer && <div className="hero-foot">{footer}</div>}
  </section>
);

export default Hero;
