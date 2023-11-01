import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
  MouseEvent,
  KeyboardEvent,
  HTMLAttributes,
} from 'react';

import clsx from 'clsx';

import Button, { ButtonProps } from '../button/Button';
import DropdownItem from './dropdown-item/DropdownItem';
import DropdownDivider, { DropdownDividerProps } from './dropdown-divider/DropdownDivider';

interface DropdownComposition {
  Item: typeof DropdownItem;
  Divider: FunctionComponent<DropdownDividerProps>;
}

export interface DropdownProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  title: string;
  name?: string;
  isActive?: boolean;
  isHoverable?: boolean;
  isRight?: boolean;
  isUp?: boolean;
  buttonConfig?: ButtonProps;
  dropdownIcon?: ReactNode;
  className?: string;
}

const Dropdown: FunctionComponent<DropdownProps> & DropdownComposition = ({
  children,
  title,
  isActive,
  isHoverable,
  isRight,
  isUp,
  buttonConfig,
  dropdownIcon,
  className,
  name = 'dropdown',
  ...others
}) => {
  const [isActiveState, setIsActive] = useState(isActive);

  const toggleDropdown = (
    e: MouseEvent<HTMLButtonElement | MouseEvent> | KeyboardEvent<HTMLButtonElement>
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
        isRight && 'is-right',
        isUp && 'is-up',
        className
      )}
      {...others}
    >
      <div className="dropdown-trigger">
        <Button
          aria-haspopup="true"
          aria-controls={name}
          type="button"
          onClick={toggleDropdown}
          {...buttonConfig}
        >
          <span>{title}</span>
          <span className="icon is-small">{dropdownIcon || <>&#9207;</>}</span>
        </Button>
      </div>
      <div className="dropdown-menu" id={name} role="menu">
        <div className="dropdown-content">{children}</div>
      </div>
    </div>
  );
};

Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;

export default Dropdown;
