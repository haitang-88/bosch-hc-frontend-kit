import BaseComponent from '../../baseComponent';

const TAB_NAVIGATION_TAB = '.a-tab-navigation__tab';
const TAB_LINKS_SCROLL_LEFT_CLASS = 'a-tab-navigation--scrollLeft';
const TAB_LINKS_SCROLL_RIGHT_CLASS = 'a-tab-navigation--scrollRight';
const TAB_NAVIGATION_BUTTON_SCROLL_LEFT = '.a-tab-navigation__button-left';
const TAB_NAVIGATION_BUTTON_SCROLL_RIGHT = '.a-tab-navigation__button-right';
const TAB_SELECTED_CLASS = `-selected`;
const TAB_DISABLED_CLASS = `-disabled`;

function isButton(element: HTMLElement) {
  return element instanceof HTMLButtonElement;
}
export default class TabNavigation extends BaseComponent {
  protected static events = ['selected'];

  private readonly tabNavigations: HTMLElement;
  private readonly tabs: NodeList;
  private dir = 'ltr';
  private updateTimeout: NodeJS.Timeout;
  private scrollLeft: number;
  private scrollRight: number;
  private scrollPadding: number;
  private scrollIntoViewPadding: number;
  private scrollLeftButton: HTMLElement;
  private scrollRightButton: HTMLElement;
  private wrapper: HTMLElement;

  constructor(container: HTMLElement) {
    super(container);

    this.updateTimeout = null;
    this.scrollLeft = 0;
    this.scrollRight = 0;

    // arrows appear, when the text starts being not visible after 1rem padding
    this.scrollPadding = 16;

    // 32px is the width of the arrows to scroll left/right
    // due to 16px padding of tabs and 12px padding for icon-only tabs: 32px-12px = 20px
    this.scrollIntoViewPadding = 20;

    /**
     * Define DOM Elements and Variables
     */
    this.wrapper = container.parentElement;
    this.tabs = container.querySelectorAll(TAB_NAVIGATION_TAB);
    this.tabNavigations = container;
    this.scrollLeftButton = this.wrapper.querySelector(
      TAB_NAVIGATION_BUTTON_SCROLL_LEFT,
    );
    this.scrollRightButton = this.wrapper.querySelector(
      TAB_NAVIGATION_BUTTON_SCROLL_RIGHT,
    );

    this.scrollLeftButton.addEventListener('click', () => {
      container.scrollBy({ left: -150, behavior: 'smooth' });
    });

    this.scrollRightButton.addEventListener('click', () => {
      container.scrollBy({ left: 150, behavior: 'smooth' });
    });

    Array.from(this.tabs).forEach((tab) => {
      if (tab instanceof HTMLElement) {
        tab.addEventListener('scrollToView', () => {
          const containerRect = container.getBoundingClientRect();
          const tabRect = tab.getBoundingClientRect();

          const offsetRight =
            tabRect.right - containerRect.right + this.scrollIntoViewPadding;
          const offsetLeft =
            containerRect.left - tabRect.left + this.scrollIntoViewPadding;

          if (offsetRight > 0) {
            // active tab not fully visible
            container.scrollBy({
              top: 0,
              left: offsetRight,
              behavior: 'smooth',
            });
          }
          if (offsetLeft > 0) {
            // active tab not fully visible
            container.scrollBy({
              top: 0,
              left: -offsetLeft,
              behavior: 'smooth',
            });
          }
        });

        tab.addEventListener('click', () => {
          if (
            !tab.classList.contains(TAB_SELECTED_CLASS) &&
            !tab.classList.contains(TAB_DISABLED_CLASS)
          ) {
            this.deselectAllTabs();
            tab.classList.add(TAB_SELECTED_CLASS);
            tab.setAttribute(isButton(tab) ? 'aria-expanded' : 'aria-selected', 'true');
            this.triggerEvent('selected', tab.dataset.frokTabIdentifier);

            // after setting active tab, check if it is fully visible and scroll into view if necessary
            tab.dispatchEvent(new CustomEvent('scrollToView'));
          }
        });
      }
    });

    this.registerScrollUpdates();
  }

  private deselectAllTabs(): void {
    Array.from(this.tabs).forEach((tab) => {
      if (tab instanceof HTMLElement) {
        tab.classList.remove(TAB_SELECTED_CLASS);
        tab.setAttribute(isButton(tab) ? 'aria-expanded' : 'aria-selected', 'false');
      }
    });
  }

  private registerScrollUpdates(): void {
    this.updateTimeout = null;
    const update = () => {
      if (!this.updateTimeout) {
        this.updateTimeout = setTimeout(
          () => this.updateScrollingInformation(),
          100,
        );
      }
    };

    update();
    window.addEventListener('resize', update);
    this.tabNavigations.addEventListener('scroll', update);
  }

  private updateScrollingInformation(): void {
    clearTimeout(this.updateTimeout);

    this.scrollLeft = this.tabNavigations.scrollLeft;
    this.scrollRight =
      this.tabNavigations.scrollWidth -
      this.tabNavigations.offsetWidth -
      Math.abs(this.scrollLeft);
    this.toggleScrollingClass();
  }

  private toggleScrollingClass() {
    // get current reading direction
    this.dir = getComputedStyle(this.container).direction;
    this.updateTimeout = null;

    if (!this.wrapper) {
      return;
    }

    const [startClass, endClass] =
      this.dir === 'ltr'
        ? [TAB_LINKS_SCROLL_LEFT_CLASS, TAB_LINKS_SCROLL_RIGHT_CLASS]
        : [TAB_LINKS_SCROLL_RIGHT_CLASS, TAB_LINKS_SCROLL_LEFT_CLASS];

    this.wrapper.classList.toggle(
      startClass,
      Math.abs(this.scrollLeft) > 1 + this.scrollPadding,
    );

    this.wrapper.classList.toggle(
      endClass,
      Math.abs(this.scrollRight) > 1 + this.scrollPadding,
    );
  }

  public setScrollPadding(scrollPadding: number) {
    this.scrollPadding = scrollPadding
  }
}

export type {
  TabNavigation
}
