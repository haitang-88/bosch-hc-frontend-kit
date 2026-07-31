import BaseComponent from '../../baseComponent';
import ElementWithComponent from '../../ElementWithComponent';
import { ArrowPosition } from '../../molecules/popover/constants';
import SideNavigation from '../../molecules/sideNavigation';
import Viewports from '../../viewports';
import ContextMenu from '../contextMenu';

const SIDEBAR_WIDTH_OPEN = 304; // Sync this value with the one in the SCSS file (304px = 19rem)
const TRANSITION = '250ms margin-left cubic-bezier(0.38, 0.04, 0.35, 0.96)';

export default class MinimalHeader extends BaseComponent {
  private sideNavigation: SideNavigation;
  private sideNavigationElement: ElementWithComponent<SideNavigation>;
  private burger: HTMLButtonElement;
  private contextMenuElement: ElementWithComponent<ContextMenu>;
  private contextMenu: ContextMenu;
  private content: HTMLElement;
  private openMenuDesktop: HTMLElement;
  private closeMenuDesktop: HTMLElement;
  private menuItemsDesktop: HTMLButtonElement[];

  constructor(container: HTMLElement) {
    super(container);

    this.sideNavigationElement = document.querySelector('.m-side-navigation');
    this.contextMenuElement = container.querySelector('.o-context-menu');

    if (this.contextMenuElement) {
      if (this.contextMenuElement.component) {
        this.contextMenu = this.contextMenuElement.component;
      } else {
        this.contextMenu = new ContextMenu(this.contextMenuElement);
      }
    }

    this.burger = container.querySelector('.o-minimal-header__burger button');
    this.content = document.querySelector('.e-container');

    this.openMenuDesktop = this.sideNavigationElement.querySelector(
      '.m-side-navigation__header__trigger.-open',
    );

    this.closeMenuDesktop = this.sideNavigationElement.querySelector(
      '.m-side-navigation__header__trigger.-close',
    );

    this.menuItemsDesktop = Array.from(
      container.querySelectorAll(
        '.m-side-navigation__menuItems > .a-menu-item',
      ),
    );

    // check if sidenavigation was already setup and pass external trigger element
    if (!this.sideNavigationElement.component) {
      this.sideNavigation = new SideNavigation(
        this.sideNavigationElement,
        this.burger,
      );
    } else {
      this.sideNavigation = this.sideNavigationElement.component;
      this.sideNavigation.setExternalTrigger(this.burger);
    }

    // Burger Icon showing only on Mobile and Tablet viewports
    this.burger.addEventListener('click', () => {
      this.sideNavigation.show();
    });

    this.adjustPopoverArrowPosition();
    this.pushContent();

    window.addEventListener('resize', () => {
      this.adjustPopoverArrowPosition();
      this.pushContent();
    });
  }

  private adjustPopoverArrowPosition() {
    if (window.matchMedia(Viewports.TABLET_AND_UP).matches) {
      this.contextMenu.setPosition(ArrowPosition.TOP_CENTER);
    } else {
      this.contextMenu.setPosition(ArrowPosition.TOP_RIGHT);
    }
  }

  private pushContent() {
    if (this.content) {
      // Push the content to the right when clicking..
      // the Burger Icon
      this.openMenuDesktop.addEventListener('click', () => {
        this.content.classList.add('-open');

        const marginLeft = this.calculateMarginLeft();
        this.content.style.marginLeft = `${marginLeft}px`;
        this.content.style.transition = TRANSITION;
      });

      // any button of the Side Navigation
      this.menuItemsDesktop.forEach((menuItem) => {
        menuItem.addEventListener('click', () => {
          this.content.classList.add('-open');

          const marginLeft = this.calculateMarginLeft();
          this.content.style.marginLeft = `${marginLeft}px`;
          this.content.style.transition = TRANSITION;
        });
      });

      // Push the content to the left when clicking the close icon
      this.closeMenuDesktop.addEventListener('click', () => {
        this.content.classList.remove('-open');
        this.content.style.marginLeft = `unset`;
        this.content.style.margin = `0 auto`;
      });
    }
  }

  private calculateMarginLeft() {
    const windowWidth = window.innerWidth;

    const contentWidth =
      this.content.getBoundingClientRect().right -
      this.content.getBoundingClientRect().left;

    const contentContainerWidth = windowWidth - SIDEBAR_WIDTH_OPEN;
    const paddingFromSidebarOpen = (contentContainerWidth - contentWidth) / 2;

    return SIDEBAR_WIDTH_OPEN + paddingFromSidebarOpen;
  }
}
