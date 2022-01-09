import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import HeroHead, { IHeroHeadProps } from './hero-head/HeroHead';
import HeroBody, { IHeroBodyProps } from './hero-body/HeroBody';
import HeroFoot, { IHeroFootProps } from './hero-foot/HeroFoot';

import { Sizes, Colors } from '../../types';

type AdditionalSizes = 'is-halfheight' | 'is-fullheight' | 'is-fullheight-with-navbar';

type HeroSizes = Omit<Sizes, 'is-normal'> | AdditionalSizes;

interface IHeroComposition {
  Head: FunctionComponent<IHeroHeadProps>;
  Body: FunctionComponent<IHeroBodyProps>;
  Footer: FunctionComponent<IHeroFootProps>;
}

export interface IHeroProps {
  children: ReactNode;
  className?: string;
  size?: HeroSizes;
  color?: Colors;
}

type HeroType = FunctionComponent<IHeroProps> & IHeroComposition;

const Hero: HeroType = ({ children, className, size, color = 'is-primary' }) => (
  <section className={clsx('hero', className, size, color)}>{children}</section>
);

Hero.Head = HeroHead;
Hero.Body = HeroBody;
Hero.Footer = HeroFoot;

export default Hero;
