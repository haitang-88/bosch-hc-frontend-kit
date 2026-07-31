import BaseComponent from '../../baseComponent';
import Viewports from '../../viewports';
import MenuGroup from '../menuGroup';

/**
 * @name handleOpeningTransitionEnd
 * @param {HTMLElement} container     the element which should receive the transitionend eventHandler
 * @description
 * function will add transitionend eventHandler to received element
 * handler function will be attached
 * handler function itself will detach itself form element after transitionend
 */
const handleOpeningTransitionEnd = (container: HTMLElement): void => {
  const handler = () => {
    container.classList.add('-open');
    container.classList.remove('-opening');

    container.removeEventListener('transitionend', handler);
  };

  container.addEventListener('transitionend', handler);
};

export default class SideNavigation extends BaseComponent {
  private sideMenuTriggerOpen: HTMLButtonElement;
  private sideMenuTriggerClose: HTMLButtonElement;
  private menuGroup: MenuGroup;
  private menuItems: HTMLButtonElement[];
  private externalTrigger?: HTMLElement;

  constructor(container: HTMLElement, externalTrigger?: HTMLElement) {
    super(container);

    // do not set up event handlers twice, as they will not work
    if (this.alreadyInitialized === true) {
      return;
    }

    if (externalTrigger) this.externalTrigger = externalTrigger;
    /**
     * Define DOM Elements and Variables
     */
    this.sideMenuTriggerOpen = container.querySelector(
      '.m-side-navigation__header__trigger.-open',
    );

    this.sideMenuTriggerClose = container.querySelector(
      '.m-side-navigation__header__trigger.-close',
    );

    this.menuItems = Array.from(
      container.querySelectorAll(
        ':scope > .m-menu-group > .a-menu-item:not(.-disabled)',
      ),
    );

    const menuGroupElement: HTMLElement = container.querySelector(
      ':scope > .m-menu-group',
    );

    if (menuGroupElement) {
      this.menuGroup = new MenuGroup(menuGroupElement);
    }

    /**
     * Define Events
     */
    // Click the burger icon's button and open the side navigation
    // Make the burger icon's accessible
    this.sideMenuTriggerOpen.addEventListener('click', () => {
      container.classList.add('-opening');
      handleOpeningTransitionEnd(this.container);
      this.sideMenuTriggerOpen.setAttribute('tabindex', '-1');
      this.sideMenuTriggerClose.setAttribute('tabindex', '0');
      this.menuGroup.focusFirstMenuItem();
    });

    // Click the close icon's button and close the side navigation
    // Make the close icon's no longer accessible
    // Close all the open subitems
    this.sideMenuTriggerClose.addEventListener('click', () => {
      container.classList.remove('-open');
      container.classList.remove('-opening');
      this.sideMenuTriggerOpen.setAttribute('tabindex', '0');
      this.sideMenuTriggerClose.setAttribute('tabindex', '-1');
      this.sideMenuTriggerOpen.focus();
      this.menuGroup.closeGroups();

      if (!window.matchMedia(Viewports.DESKTOP_AND_UP).matches) {
        this.menuGroup.disableMenus();
        this.disableTrigger();
        this.disableNavigation();
        this.externalTrigger.focus();
      }
    });

    // Click the icons and open the side navigation
    // Once the navigation is open make those items clickable
    this.menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', (event) => {
        if (!container.classList.contains('-open')) {
          event.preventDefault();
          container.classList.add('-opening');
          handleOpeningTransitionEnd(this.container);
          this.sideMenuTriggerOpen.setAttribute('tabindex', '-1');
          this.sideMenuTriggerClose.setAttribute('tabindex', '0');
        }
      });
    });

    // add listener to handle the enabling and disabling of the
    // menu items and side avigation trigger
    window.addEventListener('resize', () => {
      if (window.matchMedia(Viewports.DESKTOP_AND_UP).matches) {
        this.menuGroup.enableMenus();
        this.enableTrigger();
        this.enableNavigation();
      } else if (!this.container.classList.contains('-open')) {
        this.menuGroup.disableMenus();
        this.disableTrigger();
        this.disableNavigation();
      }
    });

    if (
      !window.matchMedia(Viewports.DESKTOP_AND_UP).matches &&
      !this.container.classList.contains('-open')
    ) {
      this.menuGroup.disableMenus();
      this.disableTrigger();
      this.disableNavigation();
    }
  }

  /**
   * @name show
   * @description
   * function to open the side navigation with an external trigger
   */
  public show(): void {
    if (
      !this.container.classList.contains('-open') &&
      !this.container.classList.contains('-opening')
    ) {
      handleOpeningTransitionEnd(this.container);
      this.container.classList.add('-opening');
      this.enableTrigger();
      this.menuGroup.enableMenus();
      this.menuGroup.focusFirstMenuItem();
    }
  }

  /**
   * @name enableTrigger
   * @description
   * function to enable the side navigation trigger buttons in relation to the current viewport
   */
  public enableTrigger(): void {
    if (
      this.container.classList.contains('-open') ||
      this.container.classList.contains('-opening')
    ) {
      this.sideMenuTriggerOpen.setAttribute('tabindex', '-1');
      this.sideMenuTriggerClose.setAttribute('tabindex', '0');
    } else {
      this.sideMenuTriggerOpen.setAttribute('tabindex', '0');
      this.sideMenuTriggerClose.setAttribute('tabindex', '-1');
    }
  }

  /**
   * @name disableTrigger
   * @description
   * function to disable the side navigation trigger buttons
   */
  public disableTrigger(): void {
    this.sideMenuTriggerOpen.setAttribute('tabindex', '-1');
    this.sideMenuTriggerClose.setAttribute('tabindex', '-1');
  }

  /**
   * @name enableNavigation
   * @description
   * enables the whole side navigation
   */
  private enableNavigation(): void {
    this.container.setAttribute('tabindex', '-1');
  }

  /**
   * @name disableNavigation
   * @description
   * disables the whole side navigation
   */
  private disableNavigation(): void {
    this.container.setAttribute('tabindex', '-1');
  }

  /**
   * @name setExternalTrigger
   * @param externalTrigger HTMLElement
   * @description
   * function to set an external HTML to trigger the opening of the side navigation
   * and where to focus will be put on smaller viewports when die side navigation
   * gets closed
   */
  public setExternalTrigger(externalTrigger: HTMLElement): void {
    this.externalTrigger = externalTrigger;
  }
}
