import React, { Fragment, useEffect, useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Button, { ButtonType } from '../button/Button';
import DropdownItem, { IDropdownItem, IDropdownLinkItem } from '../dropdown-item/DropdownItem';

interface IStates {
  'is-right'?: boolean;
  'is-up'?: boolean;
}

export interface DropdownProps {
  title: string;
  items: Array<IDropdownItem | IDropdownLinkItem>;
  isActive?: boolean;
  isHoverable?: boolean;
  states?: IStates;
  buttonConfig?: ButtonType;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  isActive,
  isHoverable,
  states,
  buttonConfig,
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
          <span className="icon is-small">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </Button>
      </div>
      <div className="dropdown-menu" id="dropdown" role="menu">
        <div className="dropdown-content">
          {items.map((item) => (
            <Fragment key={item.id}>
              <DropdownItem item={item} />
              {item.hasDivider && <hr className="dropdown-divider" />}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
