/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { Alignment, AnotherColors, Colors, Sizes } from '../../types';

interface FileFieldProps {
  name: string;
  fileLabel: string;
  fileName?: string;
  color?: Colors | Omit<AnotherColors, 'is-text' | 'is-ghost'>;
  size?: Sizes;
  alignment?: Alignment;
  isFullWidth?: boolean;
  isBoxed?: boolean;
}

export type FileFieldType = FileFieldProps & React.InputHTMLAttributes<HTMLInputElement>;

const FileField: React.FC<FileFieldType> = ({
  name,
  fileLabel,
  fileName,
  color,
  size,
  alignment,
  isFullWidth,
  isBoxed,
  ...others
}) => (
  <div
    className={clsx(
      'file',
      fileName && 'has-name',
      color,
      size,
      alignment,
      isFullWidth && 'is-fullwidth',
      isBoxed && 'is-boxed'
    )}
  >
    <label className="file-label">
      <input className="file-input" type="file" name={name} {...others} />
      <span className="file-cta">
        <span className="file-icon">
          <FontAwesomeIcon icon={faDownload} />
        </span>
        <span className="file-label">{fileLabel}</span>
      </span>
      {fileName && <span className="file-name">{fileName}</span>}
    </label>
  </div>
);

export default FileField;
