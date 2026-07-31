import BaseComponent from '../../baseComponent';
import EscapeKeyHelper from '../../helpers/escapeKey.helper';
import SearchForm, {
  EVENT_SEARCH_CLEAR,
  EVENT_SEARCH_CLOSE,
} from '../../molecules/searchForm';

/**
 * returns the entry for the given trigger
 */
const entryFor = (trigger: Element): Element => trigger.parentElement;

/**
 * returns the menu for the given entry
 */
const menuFor = (entry: Element): Element =>
  Array.from(entry.children).find((child) =>
    child.classList.contains('o-header__navigation-sub-level'),
  );

/**
 * returns the trigger for the given entry
 */
const triggerFor = (entry: Element): Element =>
  Array.from(entry.children).find((child) =>
    child.classList.contains('o-header__navigation-trigger'),
  );

/**
 * set the given tabindex for all "direct-descendant" buttons and links in the given menu
 */
const sebTabIndexForButtonsAndLinks = (
  menu: Element,
  tabIndex: number,
): void => {
  const secondLevelChildren = Array.from(menu.children)
    .map((child) => Array.from(child.children))
    .reduce((flat, list) => flat.concat(list));

  const triggers = secondLevelChildren.filter((child) =>
    child.classList.contains('o-header__navigation-trigger'),
  );

  triggers.forEach((trigger) => {
    const tabbableElement =
      trigger.tagName.toLowerCase() === 'button'
        ? trigger
        : trigger.children.item(0);

    tabbableElement.setAttribute('tabindex', tabIndex.toString(10));
  });
};

/**
 * closes the given menu entry - only handles DOM state updates
 */
const close = (entry: Element): void => {
  const associatedMenu = menuFor(entry);
  if (!associatedMenu) {
    // entries without any submenu do not need handling;
    return;
  }
  entry.classList.remove('-open');
  triggerFor(entry).setAttribute('aria-expanded', 'false');
  associatedMenu.setAttribute('aria-hidden', 'true');
  sebTabIndexForButtonsAndLinks(associatedMenu, -1);
};

/**
 * opens the given menu entry - only handles DOM state updates
 */
const open = (entry: Element): void => {
  const associatedMenu = menuFor(entry);
  if (!associatedMenu) {
    // entries without any submenu do not need handling;
    return;
  }
  entry.classList.add('-open');
  triggerFor(entry).setAttribute('aria-expanded', 'true');
  menuFor(entry).setAttribute('aria-hidden', 'false');
  sebTabIndexForButtonsAndLinks(associatedMenu, 0);
};

const setSearchFormState = (
  form: SearchForm,
  trigger: Element,
  closer: Element,
  enabled: boolean,
): void => {
  form.element.setAttribute('aria-hidden', enabled ? 'false' : 'true');
  if (enabled) {
    form.enableListeners();
  } else {
    form.disableListeners();
  }

  const searchFormControls = Array.from(
    form.element.children[0].children,
  ).filter((child) => {
    return (
      child.tagName.toLowerCase() === 'button' ||
      child.tagName.toLowerCase() === 'input'
    );
  });

  searchFormControls.forEach((control) =>
    control.setAttribute('tabindex', enabled ? '0' : '-1'),
  );

  trigger.setAttribute('aria-expanded', enabled ? 'true' : 'false');
  trigger.setAttribute('tabindex', enabled ? '-1' : '0');
  closer.setAttribute('tabindex', enabled ? '0' : '-1');
};

const enableSearchForm = (
  form: SearchForm,
  trigger: Element,
  closer: Element,
): void => setSearchFormState(form, trigger, closer, true);

const disableSearchForm = (
  form: SearchForm,
  trigger: Element,
  closer: Element,
): void => setSearchFormState(form, trigger, closer, false);

/**
 * close all of the listed entries
 */
const closeAll = (navigationEntries: HTMLElement[]): void => {
  navigationEntries.forEach(close);
};

export default class Header extends BaseComponent {
  protected static events = ['searchClear', 'searchClose'];
  private menuTrigger: HTMLButtonElement;
  private searchTrigger: HTMLButtonElement;
  private searchCloseTrigger: HTMLButtonElement;
  private searchForm: SearchForm;
  private pageMarginContainer: HTMLDivElement;
  private navigationTriggers: HTMLButtonElement[];
  private navigationCloseTriggers: HTMLButtonElement[];
  private firstLevelNavigationEntries: HTMLLIElement[];
  private secondLevelNavigationEntries: HTMLLIElement[];
  private escapeKeyHelperMenu: EscapeKeyHelper;

  constructor(container: HTMLElement) {
    super(container);
    /**
     * Define DOM Elements and Variables
     */
    this.menuTrigger = container.querySelector('.o-header__menu-trigger');

    this.searchTrigger = container.querySelector('.o-header__search-open');
    this.searchCloseTrigger = container.querySelector(
      '.o-header__search .m-search-form .a-search-input__icon-close',
    );

    const searchFormElement: HTMLElement = container.querySelector(
      '.o-header__search .m-search-form',
    );

    if (searchFormElement) {
      this.searchForm = new SearchForm(
        searchFormElement,
        this.isSearchOpen.bind(this),
      );
    } else {
      this.searchForm = null;
    }

    this.pageMarginContainer = container.querySelector('.e-container');

    this.navigationTriggers = Array.from(
      container.querySelectorAll('button.o-header__navigation-trigger'),
    );

    this.navigationCloseTriggers = Array.from(
      container.querySelectorAll('button.o-header__navigation-close-trigger'),
    );

    this.firstLevelNavigationEntries = Array.from(
      container.querySelectorAll('.o-header__navigation-first-level-item'),
    );

    this.secondLevelNavigationEntries = Array.from(
      container.querySelectorAll(
        '.o-header__navigation-first-level-item > ul > .o-header__navigation-sub-level-item',
      ),
    );

    if (this.menuTrigger) {
      this.menuTrigger.addEventListener('click', () => {
        this.closeMenu();

        if (this.isMenuOpen()) {
          this.escapeKeyHelperMenu.enable();
        }
      });
    }

    if (this.searchTrigger) {
      this.searchTrigger.addEventListener('click', () => {
        this.escapeKeyHelperMenu.disable();

        container.classList.add('-search-open');
        container.classList.remove('-menu-open');
        this.adjustSearchFieldWidth();
        enableSearchForm(
          this.searchForm,
          this.searchTrigger,
          this.searchCloseTrigger,
        );
        this.searchForm.searchInput.focusInput();
      });
    }

    if (this.searchCloseTrigger) {
      this.searchCloseTrigger.addEventListener(
        'click',
        this.closeSearch.bind(this),
      );
    }

    if (this.searchForm && this.searchTrigger && this.searchCloseTrigger) {
      // disable the form when initializing
      disableSearchForm(
        this.searchForm,
        this.searchTrigger,
        this.searchCloseTrigger,
      );
    }

    if (this.searchForm) {
      window.addEventListener('resize', () => this.adjustSearchFieldWidth());

      // setup the close button of search to always be visible
      this.searchForm.searchInput.setAlwaysShowCloseButton(true);
    }

    this.navigationTriggers.forEach((trigger) => {
      const associatedEntry = entryFor(trigger);
      const isOnFirstLevel = trigger.parentElement.classList.contains(
        'o-header__navigation-first-level-item',
      );

      trigger.addEventListener('click', () => {
        const associatedCloseTrigger = associatedEntry.querySelector(
          '.o-header__navigation-close-trigger',
        );
        // Give focus to trigger when menu is open
        associatedCloseTrigger.setAttribute('tabindex', '0');

        associatedEntry.parentElement.scrollTop = 0;
        closeAll(this.secondLevelNavigationEntries);
        if (isOnFirstLevel) {
          closeAll(this.firstLevelNavigationEntries);
          container.classList.add('-second-level-open');
          container.classList.remove('-third-level-open');
        } else {
          container.classList.remove('-second-level-open');
          container.classList.add('-third-level-open');
        }
        open(associatedEntry);
      });
    });

    this.navigationCloseTriggers.forEach((trigger) => {
      // If the menu is not open, trigger has no focus
      trigger.setAttribute('tabindex', '-1');

      const associatedEntry = trigger.parentElement.parentElement;
      const isOnFirstLevel = associatedEntry.classList.contains(
        'o-header__navigation-first-level-item',
      );
      trigger.addEventListener('click', () => {
        // Remove the focus when closing the menu
        trigger.setAttribute('tabindex', '-1');
        container.classList.remove('-third-level-open');
        if (!isOnFirstLevel) {
          container.classList.add('-second-level-open');
        } else {
          container.classList.remove('-second-level-open');
        }

        close(associatedEntry);
      });
    });

    this.closeMenu = this.closeMenu.bind(this);
    this.isMenuOpen = this.isMenuOpen.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
    this.isSearchOpen = this.isSearchOpen.bind(this);

    this.escapeKeyHelperMenu = new EscapeKeyHelper(
      this.menuTrigger && this.closeMenu,
      this.isMenuOpen,
    );

    if (this.searchForm) this.initSearchForm();
  }

  private adjustSearchFieldWidth(): void {
    if (this.container.classList.contains('-search-open')) {
      // when menu trigger is not present, it is necessary to reduce the resulting width
      // to take the "+1rem" into account
      const menuTriggerWidth = this.menuTrigger
        ? this.menuTrigger.offsetWidth
        : 16;

      const containerWIdth = this.pageMarginContainer.offsetWidth;
      // some 16px are still missing from the width - I don't know where, but let's add them here
      this.searchForm.element.style.width = `calc(${
        containerWIdth - menuTriggerWidth
      }px + 1rem)`;
    } else {
      this.searchForm.element.style.width = '0px';
    }
  }

  public closeMenu() {
    this.container.classList.toggle('-menu-open');
    closeAll(this.firstLevelNavigationEntries);
    closeAll(this.secondLevelNavigationEntries);
    this.container.classList.remove('-second-level-open');
    this.container.classList.remove('-third-level-open');
    if (this.searchForm && this.searchTrigger && this.searchCloseTrigger) {
      this.container.classList.remove('-search-open');
      disableSearchForm(
        this.searchForm,
        this.searchTrigger,
        this.searchCloseTrigger,
      );
    }
    this.menuTrigger.focus();
  }

  public isMenuOpen() {
    return this.container.classList.contains('-menu-open');
  }

  public isSearchOpen() {
    return this.container.classList.contains('-search-open');
  }

  public closeSearch() {
    this.adjustSearchFieldWidth();

    this.container.classList.remove('-search-open');
    this.container.classList.remove('-show-suggestions');
    if (this.searchForm && this.searchTrigger && this.searchCloseTrigger) {
      disableSearchForm(
        this.searchForm,
        this.searchTrigger,
        this.searchCloseTrigger,
      );
    }

    this.searchTrigger.focus();
  }

  private initSearchForm() {
    this.searchForm.addEventListener(EVENT_SEARCH_CLEAR, () => {
      // Keep listeners enabled to be able to listen for the close event
      this.searchForm.enableListeners();
    });

    this.searchForm.addEventListener(EVENT_SEARCH_CLOSE, () => {
      this.closeSearch();
    });
  }
}
