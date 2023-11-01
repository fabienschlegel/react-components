import React, { FunctionComponent, InputHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import { Alignment, AnotherColors, Colors, Sizes } from '../../types';

export interface FileFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  fileLabel: string;
  fileName?: string;
  downloadIcon?: ReactNode;
  color?: Colors | AnotherColors;
  sizes?: Sizes;
  alignment?: Alignment;
  isFullWidth?: boolean;
  isBoxed?: boolean;
  className?: string;
}

const FileField: FunctionComponent<FileFieldProps> = ({
  name,
  fileLabel,
  fileName,
  downloadIcon,
  color,
  sizes,
  alignment,
  isFullWidth,
  isBoxed,
  className,
  ...others
}) => (
  <div
    className={clsx(
      'file',
      fileName && 'has-name',
      color,
      sizes,
      alignment,
      isFullWidth && 'is-fullwidth',
      isBoxed && 'is-boxed',
      className
    )}
  >
    <label className="file-label">
      <input className="file-input" type="file" name={name} {...others} />
      <span className="file-cta">
        <span className="file-icon">{downloadIcon || <>&#x1F817;</>}</span>
        <span className="file-label">{fileLabel}</span>
      </span>
      {fileName && <span className="file-name">{fileName}</span>}
    </label>
  </div>
);

export default FileField;
