/* eslint-disable max-classes-per-file */
import classNames from 'classnames';
import * as React from 'react';
import { Icon } from '../icon/icon';
import { Button } from '../button/button';

/**
 * a typescript helper function that tells typescript that a TabLink is indeed a TabLink
 */
const isLinkTab = (tab: Tab): tab is LinkTab => tab.type === 'link';

interface Tab {
  type: 'link' | 'button';
  identifier: string;
  label?: string;
  icon?: string;
  isDisabled?: boolean;
  isSelected?: boolean;
  isOnlyIcon?: boolean;
  additionalClasses?: string[];
  'aria-controls'?: React.AriaAttributes['aria-controls'];
  role?: React.AriaRole;
  'aria-haspopup'?: React.AriaAttributes['aria-haspopup'];
  'aria-expanded'?: React.AriaAttributes['aria-expanded'];
}

interface LinkTab extends Tab {
  type: 'link';
  href: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  role?: React.AriaRole,
}

/**
 * helper for the CSS classes a tab should have
 */
const tabClassNames = ({
  isSelected, isDisabled, isOnlyIcon, additionalClasses = [] }: Tab): string =>
  classNames(['a-tab-navigation__tab'], {
    '-selected': isSelected,
    '-disabled': isDisabled,
    '-only-icon': isOnlyIcon,
  },
    ...additionalClasses
  );

/**
 * render helper for repeating parts in the branches of TabNavigation
 */
const TabLabelContent: React.FunctionComponent<{ tab: Tab }> = ({ tab }) => (
  <span className="a-tab-navigation__tab-content">
    {tab.icon && (
      <Icon iconName={tab.icon} className="a-tab-navigation__icon" />
    )}
    {tab.label && !tab.isOnlyIcon && (
      <span className="a-tab-navigation__label">{tab.label}</span>
    )}
  </span>
);

/**
 * @name      a-tab-navigation
 * @type      atom
 * @author    Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param   {string}    type    Type of Tabs Definition (Labels, Icons, or Labels&Icons)
 * @param   {TabProps}  tabs    The tabs the TabNavigation consists of
 * @param   {React.AriaRole}    role    The aria role of the tab navigation itself

 *
 * @description
 * representation of Tab Navigation components
 */

const TabNavigation: React.FunctionComponent<TabNavigationProps> = ({
  tabs = [],
  role = 'tablist',
}: TabNavigationProps) => {
  return (
    <div className="a-tab-navigation__wrapper">
      <Button
        isUiIcon
        additionalClasses={['a-tab-navigation__button-left']}
        icon="left-small"
        aria-label="scroll to left"
        mode="integrated"
      />
      <ol className="a-tab-navigation" role={role}>
        {tabs.map((tab) => {
          return (
            <li
              key={tab.identifier}
              className="a-tab-navigation__item"
              role="none"
            >
              {isLinkTab(tab) && (
                <a
                  id={`tab-${tab.identifier}`}
                  href={tab.href}
                  className={tabClassNames(tab)}
                  tabIndex={tab.isDisabled ? -1 : 0}
                  role="tab"
                  aria-disabled={tab.isDisabled}
                  aria-controls={`tab-${tab.identifier}`}
                  aria-label={tab.isOnlyIcon ? tab.label : undefined}
                >
                  <TabLabelContent tab={tab} />
                </a>
              )}
              {!isLinkTab(tab) && (
                <button
                  id={`tab-${tab.identifier}`}
                  type="button"
                  className={tabClassNames(tab)}
                  data-frok-tab-identifier={tab.identifier}
                  tabIndex={tab.isDisabled ? -1 : 0}
                  role={tab.role || 'tab'}
                  aria-disabled={tab.isDisabled}
                  aria-controls={tab['aria-controls'] || `tab-${tab.identifier}`}
                  aria-label={tab.isOnlyIcon ? tab.label : undefined}
                  aria-haspopup={tab['aria-haspopup'] ? tab['aria-haspopup'] : null}
                  aria-expanded={tab['aria-expanded']}
                >
                  <TabLabelContent tab={tab} />
                </button>
              )}
            </li>
          );
        })}
      </ol>
      <Button
        isUiIcon
        additionalClasses={['a-tab-navigation__button-right']}
        icon="right-small"
        aria-label="scroll to right"
        mode="integrated"
      />
    </div>
  );
};

export { TabNavigation };
export type { TabNavigationProps };
