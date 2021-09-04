import React, { Fragment, ReactNode, useEffect, useState } from 'react';

import clsx from 'clsx';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Button, { ButtonType } from '../button/Button';

interface DropdownItem {
  id: string;
  content: string | ReactNode;
  hasDivider?: boolean;
}

interface DropdownLinkItem extends DropdownItem {
  to: string;
  isActive?: boolean;
}

export interface DropdownProps {
  title: string;
  items: (DropdownItem | DropdownLinkItem)[];
  isActive?: boolean;
  isHoverable?: boolean;
  isRightAligned?: boolean;
  isUp?: boolean;
  buttonConfig?: ButtonType;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  isActive,
  isHoverable,
  isRightAligned,
  isUp,
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

  const dropdownItem = (item: DropdownItem | DropdownLinkItem) =>
    item instanceof Object && 'to' in item ? (
      <Link to={item.to} className={clsx('dropdown-item', item.isActive ? 'is-active' : undefined)}>
        {item.content}
      </Link>
    ) : (
      <div className="dropdown-item">{item.content}</div>
    );

  return (
    <div
      className={clsx(
        'dropdown',
        isActiveState ? 'is-active' : undefined,
        isHoverable ? 'is-hoverable' : undefined,
        isRightAligned ? 'is-right' : undefined,
        isUp ? 'is-up' : undefined
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
              {dropdownItem(item)}
              {item.hasDivider ? <hr className="dropdown-divider" /> : null}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
