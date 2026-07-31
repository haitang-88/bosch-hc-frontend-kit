import BaseComponent from '../../baseComponent';
import ElementWithComponent from '../../ElementWithComponent';
import EscapeKeyHelper from '../../helpers/escapeKey.helper';
import MenuGroup, { MenuGroupElement } from '../../molecules/menuGroup';
import Popover from '../../molecules/popover';

export default class SplitButton extends BaseComponent {
  private menuGroup: MenuGroup;
  private splitButtonTrigger: HTMLButtonElement;
  private popoverElement: ElementWithComponent<Popover>;
  public popover: Popover;
  private escapeKeyHelper: EscapeKeyHelper;
  private recalculatePopoverPosition: boolean = false;

  constructor(container: HTMLElement) {
    super(container);

    if (this.alreadyInitialized === true) {
      return;
    }

    this.splitButtonTrigger = container.querySelector(
      '.o-split-button__trigger',
    );

    this.popoverElement = container.querySelector('.m-popover');
    this.popover = new Popover(this.popoverElement);
    this.popover.attach(this.splitButtonTrigger, this.container);
    this.popover.resetPosition();

    const menuGroupElement: MenuGroupElement =
      container.querySelector('.m-menu-group');

    if (menuGroupElement.component) {
      this.menuGroup = menuGroupElement.component;
    } else {
      this.menuGroup = new MenuGroup(menuGroupElement);
    }

    this.menuGroup = this.menuGroup as MenuGroup;

    this.escapeKeyHelper = new EscapeKeyHelper(
      this.close.bind(this),
      this.popover.isOpen.bind(this),
    );

    /**
     * Define Events
     */
    this.splitButtonTrigger.addEventListener('click', () => {
      if (this.popover.isOpen()) {
        this.close();
      } else {
        this.open();
      }
    });

    document.addEventListener('click', (event) => {
      if (!event.composedPath().includes(this.container)) {
        this.close();
      }
    });
  }

  public open(): void {
    if (this.recalculatePopoverPosition) {
      this.popover.recalculatePosition();
    }

    this.popover.show(false);

    const result = this.checkHorizontalOverflow();
    // if overflow to the left window edge, align popover on the left
    if (result.leftOverflow) {
      this.popoverElement.style.insetInlineStart = '0';
      this.popoverElement.style.insetInlineEnd = '';
    }

    this.escapeKeyHelper.enable();
    this.menuGroup.focusFirstMenuItem();
  }

  public close(): void {
    this.popover.hide();
    this.menuGroup.closeGroups();
    this.menuGroup.closeFlyouts();
    this.escapeKeyHelper.disable();

    // reset popover styles
    this.popoverElement.style.insetInlineStart = '';
    this.popoverElement.style.insetInlineEnd = '0';
  }

  public setRecalculatePopoverPositionOnOpen(set: boolean) {
    this.recalculatePopoverPosition = set;
  }

  /**
   * Checks if the hidden popover will overflow the viewport
   * when positioned relative to the container element.
   */
  private checkHorizontalOverflow() {
    const viewportWidth = window.innerWidth;

    // Show hidden element invisibly to measure size
    const prevVisibility = this.popoverElement.style.visibility;
    const prevDisplay = this.popoverElement.style.display;
    this.popoverElement.style.visibility = 'hidden';
    this.popoverElement.style.display = 'block';

    const refRect = this.container.getBoundingClientRect();
    const hiddenRect = this.popoverElement.getBoundingClientRect();

    this.popoverElement.style.visibility = prevVisibility;
    this.popoverElement.style.display = prevDisplay;

    const hiddenRight = refRect.right;
    const hiddenLeft = hiddenRight - hiddenRect.width;

    const leftOverflow = hiddenLeft < 0;
    const rightOverflow = hiddenRight > viewportWidth;

    return { leftOverflow, rightOverflow };
  }
}

export type {
  SplitButton
}