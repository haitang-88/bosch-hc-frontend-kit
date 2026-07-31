import BaseComponent from '../../baseComponent';

const CLASS_OPEN = '-open';
const NESTED_LIST_SELECTOR =
  'li:not(.-disabled) > .a-menu-item__wrapper > [class^="a-menu-item"]';
export const ON_FLYOUT_OPEN = 'onFlyoutOpen';
export const ON_FLYOUT_CLOSE = 'onFlyoutClose';

export type MenuGroupElement = { component: MenuGroup } & HTMLElement;

export default class MenuGroup extends BaseComponent {
  protected static events = [ON_FLYOUT_OPEN, ON_FLYOUT_CLOSE];

  private firstMenuItem: HTMLButtonElement | HTMLLinkElement;
  private firstLevelItems: (HTMLButtonElement | HTMLLinkElement)[];
  private groupTriggers: HTMLButtonElement[];
  private groups: HTMLButtonElement[];
  private flyoutTriggers: HTMLButtonElement[];
  private flyouts: HTMLButtonElement[];
  private isRtlMode: boolean;
  private KEY_OPEN: 'ArrowLeft' | 'ArrowRight';
  private KEY_CLOSE: 'ArrowLeft' | 'ArrowRight';

  /**
   * @name enableMenus
   * @description
   * function to enable all first level menu items and setting there tabindex to "0"
   */
  public enableMenus(): void {
    this.firstLevelItems.forEach((item) => {
      const element = item.querySelector(
        '.a-menu-item .a-menu-item__wrapper > *',
      ) as HTMLButtonElement;

      element.setAttribute('tabindex', '0');
    });
  }

  /**
   * @name disableMenus
   * @description
   * function to disable all first level menu items and setting there tabindex to "-1"
   */
  public disableMenus(): void {
    this.firstLevelItems.forEach((item) => {
      const element = item.querySelector(
        '.a-menu-item .a-menu-item__wrapper > *',
      ) as HTMLButtonElement;

      element.setAttribute('tabindex', '-1');
    });
  }

  /**
   * @name focusFirstMenuItem
   * focuses the first element of the menu group component
   */
  public focusFirstMenuItem(): void {
    this.firstMenuItem.focus();
  }

  /**
   * @name closeGroups
   * @description
   * close all groups
   */
  public closeGroups() {
    this.groupTriggers.forEach((menuItem: HTMLElement): void => {
      // close groups
      menuItem.classList.remove(CLASS_OPEN);

      // remove items from tabbing order
      const list = menuItem.querySelector('.m-menu-group__group');
      list.querySelectorAll(NESTED_LIST_SELECTOR).forEach((item) => {
        item.setAttribute('tabIndex', '-1');
      });
    });

    // adjust aria-expanded for all groups
    this.groups.forEach((menuSubItem) => {
      const selectedMenuSubItem = menuSubItem;
      selectedMenuSubItem.ariaExpanded = 'false';
    });
  }

  /**
   * @name closeFlyouts
   * @description
   * close all flyouts
   */
  public closeFlyouts() {
    this.flyoutTriggers.forEach((menuItem: HTMLElement): void => {
      // close flyouts
      menuItem.classList.remove(CLASS_OPEN);

      // remove items from tabbing order
      const list = menuItem.querySelector('.m-menu-group__flyout');
      list.querySelectorAll(NESTED_LIST_SELECTOR).forEach((item) => {
        item.setAttribute('tabIndex', '-1');
      });
    });

    // adjust aria-expanded for all flyouts
    this.flyouts.forEach((menuSubItem) => {
      const selectedMenuSubItem = menuSubItem;
      selectedMenuSubItem.ariaExpanded = 'false';
    });
  }

  constructor(container: HTMLElement) {
    super(container);

    // do not set up event handlers twice, as they will not work
    if (this.alreadyInitialized === true) {
      return;
    }

    /**
     *  1) check if which reading direction is set
     *  2) set opening and closing buttons accordingly
     *  */
    this.isRtlMode = getComputedStyle(container).direction === 'rtl';

    if (this.isRtlMode) {
      this.KEY_OPEN = 'ArrowLeft';
      this.KEY_CLOSE = 'ArrowRight';
    } else {
      this.KEY_OPEN = 'ArrowRight';
      this.KEY_CLOSE = 'ArrowLeft';
    }

    /**
     * Define DOM Elements and Variables
     */
    this.firstMenuItem = container.querySelector(
      '.m-menu-group > .a-menu-item > .a-menu-item__wrapper > *',
    );

    this.firstLevelItems = Array.from(
      container.querySelectorAll(
        '.m-menu-group > .a-menu-item:not(.-disabled)',
      ),
    );

    this.groupTriggers = Array.from(
      container.querySelectorAll(
        '.a-menu-item:not(.-disabled):has(.a-menu-item__group)',
      ),
    );

    this.groups = Array.from(
      container.querySelectorAll(
        '.a-menu-item:not(.-disabled) .m-menu-group__group',
      ),
    );

    this.flyoutTriggers = Array.from(
      container.querySelectorAll(
        '.a-menu-item:not(.-disabled):has(.a-menu-item__side-menu)',
      ),
    );

    this.flyouts = Array.from(
      container.querySelectorAll(
        '.a-menu-item:not(.-disabled) .m-menu-group__flyout',
      ),
    );

    /**
     * Define Event handler
     */
    this.container.addEventListener('keydown', (e) => {
      // close all flyouts when pressing ESC
      if (e.code === 'Escape') {
        const flyoutTrigger = container.querySelector(
          '.a-menu-item.-open:has(> .m-menu-group__flyout)',
        );

        if (flyoutTrigger) {
          const button: HTMLElement =
            flyoutTrigger.querySelector('[type=button]');
          button.focus();
        }

        this.closeFlyouts();
        this.triggerEvent(ON_FLYOUT_CLOSE);
      }
    });

    this.groupTriggers.forEach((menuItem) => {
      const button = menuItem.querySelector('.a-menu-item__group');
      const list = menuItem.querySelector('.m-menu-group__group');

      button.addEventListener('click', () => {
        // close menu item when currently open
        if (menuItem.classList.contains(CLASS_OPEN)) {
          // remove items from tab order
          list.querySelectorAll(NESTED_LIST_SELECTOR).forEach((item) => {
            item.setAttribute('tabIndex', '-1');
          });
          menuItem.classList.remove(CLASS_OPEN);
          list.ariaExpanded = 'false';
        } else {
          // Close all former open groups and flyouts
          this.closeGroups();
          // Open the group that was clicked
          menuItem.classList.add(CLASS_OPEN);
          // adding items to tab order
          list
            .querySelectorAll(NESTED_LIST_SELECTOR)
            .forEach((item) => item.removeAttribute('tabIndex'));
          list.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // The flyout logic
    // If you navigate via keyboard it'll open while closing previously opened flyouts.
    // If I click again it'll close the flyout.
    this.flyoutTriggers.forEach((menuItem) => {
      const button = menuItem.querySelector(
        '.a-menu-item__side-menu',
      ) as HTMLButtonElement;
      const list = menuItem.querySelector('.m-menu-group__flyout');

      button.addEventListener('keydown', (event) => {
        if (event.code === 'Enter' || event.code === 'Space') {
          event.preventDefault();

          if (menuItem.classList.contains(CLASS_OPEN)) {
            list.querySelectorAll(NESTED_LIST_SELECTOR).forEach((item) => {
              item.setAttribute('tabIndex', '-1');
            });
            menuItem.classList.remove(CLASS_OPEN);
            list.setAttribute('aria-expanded', 'false');
          } else {
            this.closeFlyouts();
            // open the flyout that was clicked
            menuItem.classList.add(CLASS_OPEN);
            // adding items to tab order
            list
              .querySelectorAll(NESTED_LIST_SELECTOR)
              .forEach((item) => item.removeAttribute('tabIndex'));
            list.setAttribute('aria-expanded', 'true');
            this.triggerEvent(ON_FLYOUT_OPEN);
          }
        }
      });

      // if arrow right is pressed, open the side menu
      // if arrow right is pressed while the side menu is already open, focus the first element
      button.addEventListener('keydown', (event) => {
        if (event.code === this.KEY_OPEN) {
          event.preventDefault();

          if (menuItem.classList.contains(CLASS_OPEN)) {
            (list.querySelector(NESTED_LIST_SELECTOR) as HTMLElement).focus();
          } else {
            this.closeFlyouts();
            // open the flyout that has focus
            menuItem.classList.add(CLASS_OPEN);
            // adding items to tab order
            list
              .querySelectorAll(NESTED_LIST_SELECTOR)
              .forEach((item) => item.removeAttribute('tabIndex'));
            list.setAttribute('aria-expanded', 'true');
            this.triggerEvent(ON_FLYOUT_OPEN);
          }
        }
      });

      // if arrow left is pressed while focus is inside the side menu, move focus to parent
      // if arrow left is pressed while side menu is open and focus is no parent, close the side menu
      button.addEventListener('keydown', (event) => {
        if (event.code === this.KEY_CLOSE) {
          event.preventDefault();

          list.querySelectorAll(NESTED_LIST_SELECTOR).forEach((item) => {
            item.setAttribute('tabIndex', '-1');
          });
          menuItem.classList.remove(CLASS_OPEN);
          list.setAttribute('aria-expanded', 'false');
        }
      });

      button.addEventListener('click', (event) => {
        event.preventDefault();

        // close all formerly opened flyouts
        this.closeFlyouts();
        // open the flyout that was clicked
        menuItem.classList.add(CLASS_OPEN);
        // adding items to tab order
        list
          .querySelectorAll(NESTED_LIST_SELECTOR)
          .forEach((item) => item.removeAttribute('tabIndex'));
        list.setAttribute('aria-expanded', 'true');
        this.triggerEvent(ON_FLYOUT_OPEN);
      });
    });

    // always close all flyout menus when hovering a different first level menu item
    this.firstLevelItems.forEach((menuItem: HTMLElement, index) => {
      const button = menuItem.querySelector(
        '.a-menu-item__side-menu',
      ) as HTMLButtonElement;
      const list = menuItem.querySelector('.m-menu-group__flyout');

      menuItem.addEventListener('mouseenter', () => {
        this.closeFlyouts();

        if (button && list) {
          menuItem.classList.add(CLASS_OPEN);
          // adding items to tab order
          list
            .querySelectorAll(NESTED_LIST_SELECTOR)
            .forEach((item) => item.removeAttribute('tabIndex'));
          list.setAttribute('aria-expanded', 'true');
          this.triggerEvent(ON_FLYOUT_OPEN);
        }
      });

      // arrow key navigation for arrow down and up on first level
      menuItem.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowDown') {
          event.preventDefault();
          // when in side menu mode, close all of them
          this.closeFlyouts();

          // when in group menu mode, jump to first non-disabled second level entry when group is open
          if (
            menuItem.classList.contains(CLASS_OPEN) &&
            menuItem.querySelector('.m-menu-group__group')
          ) {
            (
              menuItem.querySelector(
                '.m-menu-group__group .a-menu-item:not(.-disabled) .a-menu-item__wrapper > *',
              ) as HTMLElement
            ).focus();
          } else if (index + 1 === this.firstLevelItems.length) {
            // when in group menu mode, jump to first first level entry when last element was in focus
            // this brings back he focus from last element to the first element of the first level
            (
              this.firstLevelItems[0].querySelector(
                '.a-menu-item__wrapper > *',
              ) as HTMLElement
            ).focus();
          } else {
            // when in group menu mode, jump to next first level entry when group is closed
            (
              this.firstLevelItems[index + 1].querySelector(
                '.a-menu-item__wrapper > *',
              ) as HTMLElement
            ).focus();
          }
        }

        if (event.code === 'ArrowUp') {
          event.preventDefault();
          // when in side menu mode, close all of them
          this.closeFlyouts();

          if (index === 0) {
            // when in group menu mode and focus is on first entry, set focus to last element
            // in case the last element would be an open group, set focus to the last element of the open group
            // get previous element and check if it is a open group
            const previousFocusableElement: HTMLElement =
              this.firstLevelItems[this.firstLevelItems.length - 1];

            if (
              previousFocusableElement.classList.contains(CLASS_OPEN) &&
              previousFocusableElement.querySelector('.m-menu-group__group')
            ) {
              const previousGroup: HTMLElement[] = Array.from(
                previousFocusableElement.querySelectorAll(
                  '.m-menu-group__group .a-menu-item:not(.-disabled) .a-menu-item__wrapper > *',
                ),
              );

              previousGroup[previousGroup.length - 1].focus();
            } else {
              (
                previousFocusableElement.querySelector(
                  '.a-menu-item__wrapper > *',
                ) as HTMLElement
              ).focus();
            }
          } else {
            // get previous element and check if it is a open group
            const previousFocusableElement: HTMLElement =
              this.firstLevelItems[index - 1];
            if (
              previousFocusableElement.classList.contains(CLASS_OPEN) &&
              previousFocusableElement.querySelector('.m-menu-group__group')
            ) {
              const previousGroup: HTMLElement[] = Array.from(
                previousFocusableElement.querySelectorAll(
                  '.m-menu-group__group .a-menu-item:not(.-disabled) .a-menu-item__wrapper > *',
                ),
              );

              previousGroup[previousGroup.length - 1].focus();
            } else {
              (
                previousFocusableElement.querySelector(
                  '.a-menu-item__wrapper > *',
                ) as HTMLElement
              ).focus();
            }
          }
        }
      });
    });

    this.flyouts.forEach((flyout, index) => {
      // get all elements that can receive focus
      const menuItems = Array.from(
        flyout.querySelectorAll(NESTED_LIST_SELECTOR),
      ) as HTMLElement[];

      // get parent flyout trigger
      const flyoutTriggerButton = this.flyoutTriggers[index].querySelector(
        '.a-menu-item__side-menu',
      ) as HTMLElement;

      menuItems.forEach((menuItem, menuItemIndex) => {
        menuItem.addEventListener('keydown', (event) => {
          // whenever on a menu item left arrow is pressed, focus parent element
          if (event.code === this.KEY_CLOSE) {
            flyoutTriggerButton.focus();
          }

          // move focus up and down inside the flyout menu
          if (event.code === 'ArrowDown') {
            if (menuItemIndex + 1 === menuItems.length) {
              menuItems[0].focus();
            } else {
              menuItems[menuItemIndex + 1].focus();
            }
          }

          if (event.code === 'ArrowUp') {
            if (menuItemIndex === 0) {
              menuItems[menuItems.length - 1].focus();
            } else {
              menuItems[menuItemIndex - 1].focus();
            }
          }

          event.stopImmediatePropagation();
        });
      });
    });

    this.groups.forEach((group, index) => {
      // get all elements that can receive focus
      const menuItems = Array.from(
        group.querySelectorAll(NESTED_LIST_SELECTOR),
      ) as HTMLElement[];
      // get parent trigger button
      const groupTriggerButton = this.groupTriggers[index].querySelector(
        '.a-menu-item__group',
      ) as HTMLElement;

      // get next focusable element one level above
      let nextFocusableElement;
      const currentFirstLevelItemIndex = this.firstLevelItems.indexOf(
        this.groupTriggers[index],
      );

      // check if there is a next element below, otherwise get first first level entry to receive focus
      if (this.firstLevelItems[currentFirstLevelItemIndex + 1]) {
        nextFocusableElement = this.firstLevelItems[
          currentFirstLevelItemIndex + 1
        ].querySelector('.a-menu-item__wrapper > *') as HTMLElement;
      } else {
        nextFocusableElement = this.firstLevelItems[0].querySelector(
          '.a-menu-item__wrapper > *',
        ) as HTMLElement;
      }

      // if available move focus to next/previous group menu entry, otherwise move focus to the next focusableElement
      menuItems.forEach((menuItem, menuItemIndex) => {
        menuItem.addEventListener('keydown', (event) => {
          if (event.code === 'ArrowDown') {
            if (menuItemIndex + 1 === menuItems.length) {
              nextFocusableElement.focus();
            } else {
              menuItems[menuItemIndex + 1].focus();
            }
          }

          if (event.code === 'ArrowUp') {
            if (menuItemIndex === 0) {
              groupTriggerButton.focus();
            } else {
              menuItems[menuItemIndex - 1].focus();
            }
          }

          event.stopImmediatePropagation();
        });
      });
    });
  }
}
