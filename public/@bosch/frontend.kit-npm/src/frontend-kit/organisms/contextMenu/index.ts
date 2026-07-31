import BaseComponent from '../../baseComponent';
import ElementWithComponent from '../../ElementWithComponent';
import EscapeKeyHelper from '../../helpers/escapeKey.helper';
import MenuGroup from '../../molecules/menuGroup';
import Popover from '../../molecules/popover';
import { ArrowPosition } from '../../molecules/popover/constants';

const CLASS_OPEN = '-open';

export default class ContextMenu extends BaseComponent {
  private menuGroup: MenuGroup;
  private contextMenuTriggerOpen: HTMLButtonElement;
  private contextMenuTriggerClose: HTMLButtonElement;
  private popoverElement: ElementWithComponent<Popover>;
  private popover: Popover;
  private escapeKeyHelper: EscapeKeyHelper;

  constructor(container: HTMLElement) {
    super(container);

    // do not set up event handlers twice, as they will not work
    if (this.alreadyInitialized === true) {
      return;
    }

    this.escapeKeyHelper = new EscapeKeyHelper(
      this.close.bind(this),
      this.isOpen.bind(this),
    );

    this.contextMenuTriggerOpen = container.querySelector(
      '.o-context-menu__trigger[data-frok-action="open"]',
    );

    this.contextMenuTriggerClose = container.querySelector(
      '.o-context-menu__trigger[data-frok-action="close"]',
    );

    this.popoverElement = container.querySelector('.m-popover');
    this.popover = new Popover(this.popoverElement);

    const menuGroupElement: HTMLElement =
      container.querySelector('.m-menu-group');

    if (menuGroupElement) {
      this.menuGroup = new MenuGroup(menuGroupElement);
    }

    /**
     * Define Events
     */

    // The button logic: Clicking it will show the context menu, clicking again will hide it again.
    if (this.contextMenuTriggerOpen || this.contextMenuTriggerClose) {
      this.contextMenuTriggerOpen.addEventListener('click', () => {
        this.open();
      });

      this.contextMenuTriggerClose.addEventListener('click', () => {
        this.close();
      });
    }

    document.addEventListener('click', (event) => {
      if (!event.composedPath().includes(this.container)) {
        this.menuGroup.closeGroups();
        this.menuGroup.closeFlyouts();
        this.close();
      }
    });
  }

  public open(): void {
    this.container.classList.add(CLASS_OPEN);
    this.popover.attach(this.contextMenuTriggerClose, this.container);
    this.popover.show();
    this.escapeKeyHelper.enable();
    this.menuGroup.focusFirstMenuItem();
  }

  public close(): void {
    this.container.classList.remove(CLASS_OPEN);
    this.popover.hide();
    this.menuGroup.closeGroups();
    this.menuGroup.closeFlyouts();
    this.escapeKeyHelper.disable();

    // check focus on close via keyboard navigation
    if (this.contextMenuTriggerClose === document.activeElement) {
      this.contextMenuTriggerOpen.focus();
    }
  }

  public setPosition(position: ArrowPosition): void {
    this.popover.setPosition(position);
  }

  public isOpen(): boolean {
    return this.container.classList.contains(CLASS_OPEN);
  }
}
