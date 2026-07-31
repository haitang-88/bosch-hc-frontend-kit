/* eslint-disable import/prefer-default-export */
/* eslint-disable-next-line no-use-before-define */
import * as React from 'react';
import { SideNavigationHeader } from './parts/sideNavigationHeader';
import { MenuGroup } from '../menuGroup/menuGroup';
import { MenuItemProps } from '../../atoms/menuItem/menuItem';

interface SideNavigationProps {
  appName: string;
  menuItems: MenuItemProps[];
}

/**
 *
 * @name m-side-navigation
 * @type molecule
 * @author Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param {string} appName              The App's name.
 * @param {boolean} menuItems           Menu items to display.
 *
 * @description
 * representation of side navigation
 */

const SideNavigation: React.FunctionComponent<SideNavigationProps> = ({
  appName,
  menuItems,
}) => {
  return (
    <nav
      className="m-side-navigation -contrast"
      aria-label="Side Navigation"
      aria-hidden="false"
    >
      <SideNavigationHeader appName={appName} />
      <MenuGroup menuItems={menuItems} />
    </nav>
  );
};

export { SideNavigation };
export type { SideNavigationProps };
