import {
  ALIGNMENT,
  ANOTHER_COLORS,
  COLORS,
  COLUMNS_GAP,
  COLUMNS_SIZE,
  HEADING_LEVEL,
  HEADING_SIZE as HEADER_SIZE,
  IS_NARROW,
  LIGHT_COLORS,
  NO_COLORS,
  NUMERIC_SIZE_MODIFIER,
  SEPARATOR,
  SIZES,
  SQUARED_DIMENSIONS,
  RATIO,
  SORT_ORDER,
} from './constants';

import { ReactNode, CSSProperties, Ref, RefAttributes } from 'react';

export type Colors = (typeof COLORS)[number];

export type AnotherColors = (typeof ANOTHER_COLORS)[number];

export type NoColors = (typeof NO_COLORS)[number];

export type LightColors = (typeof LIGHT_COLORS)[number];

export type Sizes = (typeof SIZES)[number];

export type Alignment = (typeof ALIGNMENT)[number];

export type Separator = (typeof SEPARATOR)[number];

export type ColumnSize = (typeof COLUMNS_SIZE)[number];

export type ColumnsGap = (typeof COLUMNS_GAP)[number];

export type IsNarrow = (typeof IS_NARROW)[number];

export type NumericSizeModifier = (typeof NUMERIC_SIZE_MODIFIER)[number];

export type HeadingLevel = (typeof HEADING_LEVEL)[number];

export type HeaderSize = (typeof HEADER_SIZE)[number];

export type SquaredDimensions = (typeof SQUARED_DIMENSIONS)[number];

export type Ratio = (typeof RATIO)[number];

export type SortOrder = (typeof SORT_ORDER)[number];

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
  ascendantSortIcon?: ReactNode;
  descendantSortIcon?: ReactNode;
}

export type FixedForwardRef = <T, P = Record<string, never>>(
  render: (props: P, ref: Ref<T>) => JSX.Element
) => (props: P & RefAttributes<T>) => JSX.Element;

export type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends unknown
  ? Omit<T, TOmitted>
  : never;
