import * as React from 'react';
import classNames from 'classnames';

import { Badge, BadgeProps } from '../badge/badge';
import { Divider } from '../divider/divider';
import { Icon } from '../icon/icon';

class MenuItemProps {
  label: string;
  secondaryLabel?: string;
  badge?: BadgeProps;
  isIndent?: boolean;
  iconName?: string;
  hasGroup?: boolean;
  hasSideMenu?: boolean;
  isButton?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  hasDivider?: boolean;
  isDisabled?: boolean;
  isActive?: boolean;
  isSelected?: boolean;
  url?: string;
  groupId?: string;
  subItems?: MenuItemProps[];
  isSectionHeader?: boolean;
}

/**
 * @name            a-menuItem
 * @type            atom
 * @author          Experience One AG
 * @copyright       Robert Bosch GmbH
 *
 * @param           {string}      label           Label to display inside the menu item.
 * @param           {string}      secondaryLabel  optional - additional label for the menu item
 * @param           {BadgeProps}  badge           optional - badge component that can be placed after the secondary label
 * @param           {boolean}     isIndent        optional - if set to true, menuitem content will be place with indentation
 * @param           {string}      iconName        optional - The icon to display if the menu item has one.
 * @param           {boolean}     hasGroup        optional - if set to true, an arrow down will be placed at the end to visualize a group of menu items
 * @param           {boolean}     hasSideMenu     optional - if set to true, an arrow right will be placed at the end to visualize a side menu
 * @param           {React.ReactNode} children    optional - content of the group or side menu
 * @param           {boolean}     hasDivider      Wheter or not the menu item has a divider after it.
 * @param           {boolean}     isDisabled      Wheter or not the menu item is disabled.
 * @param           {boolean}     isActive        optional - if set to true, a checkmark will be placed at the left of the component
 * @param           {boolean}     isSelected      optional - if set to true, component is visualized with the contrast background to indicate selection
 * @param           {string}      url             The menu item's link.
 * @param           {string}      groupId         The item groups' Id. It syncs the controllers via the aria-controls and the Id.
 *
 * @description
 * representation of menuItems
 */

const menuLabel = (label, secondaryLabel, iconName, badge, isDisabled) => {
  return (
    <>
      {iconName && <Icon iconName={iconName} />}
      <span className="a-menu-item__label">{label}</span>
      {secondaryLabel && (
        <span className="a-menu-item__label">{secondaryLabel}</span>
      )}
      {badge && <Badge label={badge.label} type={badge.type} />}
    </>
  );
};

const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  label,
  secondaryLabel,
  badge,
  isIndent,
  iconName,
  hasGroup,
  hasSideMenu,
  isButton = false,
  children,
  hasDivider,
  isDisabled = false,
  isActive = false,
  isSelected = false,
  url,
  groupId,
}) => {
  const menuItemClasses = classNames('a-menu-item', {
    '-disabled': isDisabled,
    '-indent': isIndent,
    '-selected': isActive,
  });

  return (
    <>
      <li className={menuItemClasses} role="none">
        <div className="a-menu-item__wrapper">
          {/* active state indicator */}
          {isSelected && isIndent && (
            <Icon
              className="a-menu-item__state"
              isUiIcon
              iconName="checkmark"
            />
          )}

          {/* Link Variant of the menuItem */}
          {!hasGroup && !hasSideMenu && !isButton && (
            <a
              href={url}
              role="menuitem"
              className="a-menu-item__link"
              aria-disabled={isDisabled}
              tabIndex={isDisabled && -1}
            >
              {menuLabel(label, secondaryLabel, iconName, badge, isDisabled)}
            </a>
          )}

          {/* Button Variant of the menuItem */}
          {!hasGroup && !hasSideMenu && isButton && (
            <button
              type="button"
              role="menuitem"
              className="a-menu-item__button"
              aria-disabled={isDisabled}
              tabIndex={isDisabled && -1}
            >
              {menuLabel(label, secondaryLabel, iconName, badge, isDisabled)}
            </button>
          )}

          {/* Group Variant of the menuItem */}
          {hasGroup && (
            <button
              type="button"
              role="menuitem"
              className="a-menu-item__group"
              aria-disabled={isDisabled}
              tabIndex={isDisabled && -1}
              aria-controls={groupId && `group-id-${groupId}`}
              aria-label="open group"
            >
              {menuLabel(label, secondaryLabel, iconName, badge, isDisabled)}
              <Icon isUiIcon iconName="down-small" />
            </button>
          )}

          {/* Side Menu Variant of the menuItem */}
          {hasSideMenu && (
            <button
              type="button"
              role="menuitem"
              className="a-menu-item__side-menu"
              aria-disabled={isDisabled}
              tabIndex={isDisabled && -1}
              aria-controls={groupId && `group-id-${groupId}`}
            >
              {menuLabel(label, secondaryLabel, iconName, badge, isDisabled)}
              <Icon isUiIcon iconName="nosafe-lr-forward-small" />
            </button>
          )}
        </div>
        {children}
      </li>
      {hasDivider && <Divider />}
    </>
  );
};

export { MenuItem };
export type { MenuItemProps };
