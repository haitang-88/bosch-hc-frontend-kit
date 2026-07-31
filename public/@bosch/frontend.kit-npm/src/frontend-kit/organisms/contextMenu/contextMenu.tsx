/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import { Button } from '../../atoms/button/button';
import { Popover } from '../../molecules/popover/popover';
import { MenuGroup } from '../../components';
import { MenuItemProps } from '../../atoms/menuItem/menuItem';

/**
 * @name      o-context-menu
 * @type      organism
 * @author    Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param {string}  name                    The context menu's name. Optional.
 * @param {boolean} menuItems               The navigation's links to display.
 * @param {boolean} isPopoverArrowMissing   Wether or not showing the arrow's popover.
 *
 * @description
 * representation of Context Menu
 */

interface ContextMenuProps {
  name?: string;
  menuItems: MenuItemProps[];
  isPopoverArrowMissing?: boolean;
}

const ContextMenu: React.FunctionComponent<ContextMenuProps> = ({
  name,
  menuItems = [],
  isPopoverArrowMissing = false,
}) => {
  return (
    <nav
      className="o-context-menu"
      aria-label={`Context Menu Navigation ${name}`}
      aria-hidden="false"
    >
      {!isPopoverArrowMissing && (
        <>
          <Button
            type="button"
            aria-label="Open Context Menu"
            mode="integrated"
            icon="options"
            aria-haspopup="true"
            additionalClasses={['o-context-menu__trigger']}
            action="open"
          />
          <Button
            type="button"
            mode="integrated"
            icon="close"
            aria-label="Close Context Menu"
            aria-haspopup="false"
            additionalClasses={['o-context-menu__trigger']}
            action="close"
          />
        </>
      )}
      <Popover isPopoverArrowMissing={isPopoverArrowMissing} detached={false}>
        <MenuGroup menuItems={menuItems} />
      </Popover>
    </nav>
  );
};

export { ContextMenu };
export type { ContextMenuProps };
