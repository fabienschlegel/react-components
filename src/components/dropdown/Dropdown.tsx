import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react';

import clsx from 'clsx';

import Button, { ButtonType } from '../button/Button';
import DropdownItem, { IDropdownItemProps } from './dropdown-item/DropdownItem';
import DropdownDivider from './dropdown-divider/DropdownDivider';

interface IStates {
  'is-right'?: boolean;
  'is-up'?: boolean;
}

interface IDropdownComposition {
  Item: FunctionComponent<IDropdownItemProps>;
  Divider: FunctionComponent;
}

export interface IDropdownProps {
  children: ReactNode;
  title: string;
  isActive?: boolean;
  isHoverable?: boolean;
  states?: IStates;
  buttonConfig?: ButtonType;
  dropdownIcon?: ReactNode;
}

type DropdownType = FunctionComponent<IDropdownProps> & IDropdownComposition;

const Dropdown: DropdownType = ({
  children,
  title,
  isActive,
  isHoverable,
  states,
  buttonConfig,
  dropdownIcon,
}) => {
  const [isActiveState, setIsActive] = useState(isActive);

  const toggleDropdown = (
    e: React.MouseEvent<HTMLButtonElement | MouseEvent> | React.KeyboardEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    if (!isHoverable) {
      setIsActive(!isActiveState);
    }
  };

  useEffect(() => {
    setIsActive(isActive);
  }, [isActive, setIsActive]);
  
  return (
    <div
      className={clsx(
        'dropdown',
        isActiveState && 'is-active',
        isHoverable && 'is-hoverable',
        states
      )}
    >
      <div className="dropdown-trigger">
        <Button
          aria-haspopup="true"
          aria-controls="dropdown"
          type="button"
          onClick={toggleDropdown}
          {...buttonConfig}
        >
          <span>{title}</span>
          <span className="icon is-small">{dropdownIcon || <>&#9207;</>}</span>
        </Button>
      </div>
      <div className="dropdown-menu" id="dropdown" role="menu">
        <div className="dropdown-content">{children}</div>
      </div>
    </div>
  );
};

Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;

export default Dropdown;
