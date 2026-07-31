import * as React from 'react';
import { Button } from '../../atoms/button/button';
import { Icon } from '../../atoms/icon/icon';
import { Popover } from '../../molecules/popover/popover';
import { MenuGroup } from '../../components';
import { MenuItemProps } from '../../atoms/menuItem/menuItem';
import type { groups, groupTypes, size } from '../../atoms/button/button';

/**
 * @name      o-split-button
 * @type      organism
 * @author    diconium Germany GmbH
 * @copyright Robert Bosch GmbH
 *
 * @param {object} menuItems               The navigation's links to display.
 *
 * @description
 * representation of Split Button
 */

interface SplitButtonProps {
  group: groups;
  groupType: groupTypes;
  size?: size;
  leftButton?: {
    label: string,
    iconName: string,
  };
  rightButton: {
    label: string,
    iconName: string,
  };
  menuItems: MenuItemProps[];
}

const SplitButton: React.FunctionComponent<SplitButtonProps> = ({
  group = 'brand',
  groupType = 'primary',
  size = "medium",
  leftButton = null,
  rightButton = null,
  menuItems = [],
}) => {
  return (
    <div
      className="o-split-button"
    >  
      {leftButton && 
        <>
          <Button
            type="button"
            group={group}
            groupType={groupType}
            size={size}
            icon={leftButton.iconName}
            label={leftButton.label}
          />
          <Button
            type="button"
            group={group}
            groupType={groupType}
            size={size}
            isUiIcon
            icon="down-small"
            aria-label="Open menu"
            aria-haspopup="true"
            additionalClasses={['o-split-button__trigger']}
            action="open"
          />
        </>
      }
      {rightButton && 
        <Button
          type="button"
          group={group}
          groupType={groupType}
          size={size}
          label="not needed"
          additionalClasses={['o-split-button__trigger']}
        > 
          {rightButton.iconName &&
            <Icon 
              iconName={rightButton.iconName}
              className='a-button__icon'
            />
          }
          {rightButton.label &&
            <span className="a-button__label">{rightButton.label}</span>
          }
          <Icon 
            isUiIcon
            iconName='down-small'
            className='a-button__icon'
          />
        </Button>
      }
      <Popover isPopoverArrowMissing detached={false}>
        <MenuGroup menuItems={menuItems} />
      </Popover>
    </div>
  );
};

export { SplitButton };
export type { SplitButtonProps };
