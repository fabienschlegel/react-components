import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import HeroHead, { HeroHeadProps } from './hero-head/HeroHead';
import HeroBody, { HeroBodyProps } from './hero-body/HeroBody';
import HeroFoot, { HeroFootProps } from './hero-foot/HeroFoot';

import { Sizes, Colors } from '../../types';

type AdditionalSizes = 'is-halfheight' | 'is-fullheight' | 'is-fullheight-with-navbar';

type HeroSizes = Omit<Sizes, 'is-normal'> | AdditionalSizes;

interface HeroComposition {
  Head: FunctionComponent<HeroHeadProps>;
  Body: FunctionComponent<HeroBodyProps>;
  Footer: FunctionComponent<HeroFootProps>;
}

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  size?: HeroSizes;
  color?: Colors;
}

type HeroType = FunctionComponent<HeroProps> & HeroComposition;

const Hero: HeroType = ({ children, className, size, color = 'is-primary', ...others }) => (
  <section className={clsx('hero', className, size, color)} {...others}>
    {children}
  </section>
);

Hero.Head = HeroHead;
Hero.Body = HeroBody;
Hero.Footer = HeroFoot;

export default Hero;
