import { ReactNode, CSSProperties } from 'react';

export type Colors =
  | 'is-primary'
  | 'is-link'
  | 'is-info'
  | 'is-success'
  | 'is-warning'
  | 'is-danger';

export type AnotherColors =
  | 'is-white'
  | 'is-light'
  | 'is-dark'
  | 'is-black'
  | 'is-text'
  | 'is-ghost';

export type LightColors =
  | 'is-primary is-light'
  | 'is-link is-light'
  | 'is-info is-light'
  | 'is-success is-light'
  | 'is-warning is-light'
  | 'is-danger is-light';

export type Sizes = 'is-small' | 'is-normal' | 'is-medium' | 'is-large';

export type Alignment = 'is-right' | 'is-centered';

export type Separator =
  | 'has-arrow-separator'
  | 'has-bullet-separator'
  | 'has-dot-separator'
  | 'has-succeeds-separator';

export type ColumnSize =
  | 'is-full'
  | 'is-one-quarter'
  | 'is-one-third'
  | 'is-half'
  | 'is-two-thirds'
  | 'is-three-quarters'
  | 'is-four-fifths'
  | 'is-three-fifths'
  | 'is-two-fifths'
  | 'is-one-fifth'
  | 'is-1'
  | 'is-2'
  | 'is-3'
  | 'is-4'
  | 'is-5'
  | 'is-6'
  | 'is-7'
  | 'is-8'
  | 'is-9'
  | 'is-10'
  | 'is-11'
  | 'is-12';

export type ColumnsGap =
  | 'is-0'
  | 'is-1'
  | 'is-2'
  | 'is-3'
  | 'is-4'
  | 'is-5'
  | 'is-6'
  | 'is-7'
  | 'is-8';

export type IsNarrow =
  | 'is-narrow-mobile'
  | 'is-narrow-tablet'
  | 'is-narrow-touch'
  | 'is-narrow-desktop'
  | 'is-narrow-widescreen'
  | 'is-narrow-fullhd';

export type NumericSizeModifier =
  | 'is-1'
  | 'is-2'
  | 'is-3'
  | 'is-4'
  | 'is-5'
  | 'is-6'
  | 'is-7'
  | 'is-8'
  | 'is-9'
  | 'is-10'
  | 'is-11'
  | 'is-12';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeaderSize = 'is-1' | 'is-2' | 'is-3' | 'is-4' | 'is-5' | 'is-6';

export type SquaredDimensions =
  | 'is-16x16'
  | 'is-24x24'
  | 'is-32x32'
  | 'is-48x48'
  | 'is-64x64'
  | 'is-96x96'
  | 'is-128x128';

export type Ratio =
  | 'is-square'
  | 'is-1by1'
  | 'is-5by4'
  | 'is-4by3'
  | 'is-3by2'
  | 'is-5by3'
  | 'is-16by9'
  | 'is-2by1'
  | 'is-3by1'
  | 'is-4by5'
  | 'is-3by4'
  | 'is-2by3'
  | 'is-3by5'
  | 'is-9by16'
  | 'is-1by2'
  | 'is-1by3';

export type SortOrder = 'asc' | 'desc';

export type SortOrders = (SortOrder | undefined)[];

type SortComparer<T> = (sortOrder: SortOrder) => (a: T, b: T) => number;

type ResolvableValue<T, U> =
  | ((allData: T[], rowData: T, rowIndex: number, isHovered: boolean) => U)
  | U;

export interface ColumnConfig<T> {
  label?: ReactNode | (() => ReactNode);
  value?: ((allData: T[], rowData: T, rowIndex: number) => ReactNode) | keyof T;
  icon?: ResolvableValue<T, ReactNode>;
  iconButtonStyle?: ResolvableValue<T, CSSProperties>;
  tooltip?: ResolvableValue<T, string>;
  onClick?: (rowData: T, column: ColumnConfig<T>, colIndex: number, rowIndex: number) => void;
  sortable?: boolean;
  defaultSort?: SortOrder;
  sortComparer?: SortComparer<T>;
  onSort?: (sortOrder: SortOrder) => void;
  align?: 'left' | 'centered' | 'right' | 'justified';
  cellsStyle?: ResolvableValue<T, CSSProperties>;
  cellsClassName?: ResolvableValue<T, string>;
}

export interface TableConfig<T> {
  columns: ColumnConfig<T>[];
  handleClickOnRow?: (value: T) => void;
  isBordered?: boolean;
  isStriped?: boolean;
  isNarrow?: boolean;
  isHoverable?: boolean;
  isFullWidth?: boolean;
  hasTableFooter?: boolean;
}
