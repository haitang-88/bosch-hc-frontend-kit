/* eslint-disable import/prefer-default-export */
/* eslint-disable-next-line no-use-before-define */
import * as React from 'react';
import { Divider, MenuItem } from '../../components';
import { MenuItemProps } from '../../atoms/menuItem/menuItem';

interface MenuGroupProps {
  menuItems: MenuItemProps[];
}

/**
 *
 * @name m-menu-group
 * @type molecule
 * @author Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param {array} menuItems         Menu items to display.
 *
 * @description
 * representation of a menu group
 */

const MenuGroup: React.FunctionComponent<MenuGroupProps> = ({ menuItems }) => {
  return (
    <ul className="m-menu-group" role="menubar" aria-orientation="vertical">
      {menuItems.map((menuItem, index) => {
        if (menuItem.isSectionHeader) {
          return (
            <div className="m-menu-group__section-header">
              {menuItem.hasDivider && <Divider />}
              <span className="-size-s-bold">{menuItem.label}</span>
            </div>
          );
        }

        return menuItem.subItems ? (
          <MenuItem
            // eslint-disable-next-line
            {...menuItem}
            key={index}
          >
            {menuItem.hasGroup && (
              <ul
                id={`group-id-${menuItem.groupId}`}
                className="m-menu-group__group"
                role="menu"
              >
                {menuItem.subItems.map((subItem, i) => {
                  return (
                    <MenuItem
                      // eslint-disable-next-line
                      {...subItem}
                      key={i}
                      isIndent
                    />
                  );
                })}
              </ul>
            )}
            {menuItem.hasSideMenu && (
              <ul
                id={`group-id-${menuItem.groupId}`}
                className="m-menu-group__flyout -primary"
                role="menu"
              >
                {menuItem.subItems.map((subItem, i) => {
                  return (
                    <MenuItem
                      // eslint-disable-next-line
                      {...subItem}
                      key={i}
                      isIndent
                    />
                  );
                })}
              </ul>
            )}
          </MenuItem>
        ) : (
          <MenuItem
            // eslint-disable-next-line
            {...menuItem}
            key={index}
          />
        );
      })}
    </ul>
  );
};

export { MenuGroup };
export type { MenuGroupProps };
