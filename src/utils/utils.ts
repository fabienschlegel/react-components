import { IColumnSize } from '../components/column/Column';
import { IColumnsGap } from '../components/columns/Columns';

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (value: unknown): value is Function => typeof value === 'function';

export const generateRandomId = (): string => Math.random().toString(36).substr(2);

export function getResponsiveColumn(
  responsiveColumn: IColumnSize | IColumnsGap
): Array<string | undefined> {
  const { mobile, tablet, desktop, widescreen, fullhd } = responsiveColumn;

  return [
    mobile && `${mobile}-mobile`,
    tablet && `${tablet}-tablet`,
    desktop && `${desktop}-desktop`,
    widescreen && `${widescreen}-widescreen`,
    fullhd && `${fullhd}-fullhd`,
  ];
}
