import type TabNavigation from "../../atoms/tabNavigation";
import type SplitButton from "../splitButton";
import type ElementWithComponent from "../../ElementWithComponent";

const COMMERCE_HEADER = document.querySelector('.o-header-commerce');
const NAVIGATION_WRAPPER = COMMERCE_HEADER?.querySelector(
  '.o-header-commerce__main-navigation__content__wrapper',
);
const NAVIGATION_CONTENT = COMMERCE_HEADER?.querySelector(
  '.o-header-commerce__main-navigation__content',
);
const SUPERGRAPHIC = COMMERCE_HEADER?.querySelector(
  'div.o-header-commerce__supergraphic',
);
const PREV_LEVEL_BUTTON = COMMERCE_HEADER?.querySelector(
  '#previous-level-button',
);
const MENU_CLOSE_BUTTON = COMMERCE_HEADER?.querySelector('#menu-close-button');
const MENU_CLOSE_BUTTON_DESKTOP = COMMERCE_HEADER?.querySelector(
  '#menu-close-button__desktop',
);
const MENU_CLOSE_BUTTON_DESKTOP_WRAPPER = COMMERCE_HEADER?.querySelector('.o-header-commerce__main-navigation__close__button');
const NAVIGATION_LEVELS = ['-level-0', '-level-1', '-level-2', '-level-3'];
const UTILITY_BAR = COMMERCE_HEADER?.querySelector(
  '.o-header-commerce__utility-bar',
);
const UTILITY_BAR_MOBILE = COMMERCE_HEADER?.querySelector(
  '#utility_bar_mobile',
);
const TAB_NAVIGATION = document.querySelector('.a-tab-navigation') as ElementWithComponent<TabNavigation>;
const TAB_NAVIGATION_BUTTONS = Array.from(
  COMMERCE_HEADER?.querySelectorAll('.a-tab-navigation__tab') || [],
) as HTMLButtonElement[];

const PRESENTATION_ELEMENTS = Array.from(NAVIGATION_CONTENT?.querySelectorAll(
  '.o-header-commerce__main-navigation__content__teaser',
) || []);

const clearTabs = () => {
  TAB_NAVIGATION_BUTTONS.forEach((btn) => {
    btn.classList.remove('-selected', '-expanded');
    btn.setAttribute('aria-expanded', 'false');
  });
};

const clearHighlights = () => {
  const highlightElements = NAVIGATION_WRAPPER?.querySelectorAll('.-expanded');
  highlightElements?.forEach((element) => {
    element.classList.remove('-expanded');
  });
};

const clearVisible = () => {
  const visibleElements = NAVIGATION_WRAPPER?.querySelectorAll('.-visible');
  visibleElements?.forEach((element) => {
    element.classList.remove('-visible');
  });
};

const clearTeasers = () => {
  if (MENU_CLOSE_BUTTON_DESKTOP_WRAPPER) {
    MENU_CLOSE_BUTTON_DESKTOP_WRAPPER.classList.remove('-secondary');
  }

  PRESENTATION_ELEMENTS.forEach((element) => {
    element.classList.remove('-visible');
  });
};

const clearLevelClasses = () => {
  NAVIGATION_LEVELS.forEach((levelClass) => {
    NAVIGATION_WRAPPER?.classList.remove(levelClass);
  });
};

const openMenu = () => {
  if (NAVIGATION_WRAPPER) {
    NAVIGATION_WRAPPER.classList.add('-open');
    NAVIGATION_WRAPPER.classList.add('-floating-shadow-m');
  }
  if (NAVIGATION_CONTENT) {
    NAVIGATION_CONTENT.classList.add('-visible');
  }
};

const closeMenu = () => {
  // get current active tab to set focus back to it
  const activeTab = TAB_NAVIGATION_BUTTONS.find((btn) =>
    btn.classList.contains('-selected'),
  );

  NAVIGATION_CONTENT?.classList.remove('-visible');
  NAVIGATION_WRAPPER?.classList.remove('-open');
  NAVIGATION_WRAPPER?.classList.remove('-floating-shadow-m');
  clearLevelClasses();
  clearVisible();
  clearHighlights();
  clearTabs();
  clearTeasers();

  // focus tab after all layout calculation is done, to preserve focus
  if (activeTab) activeTab.focus();
};

// Function to go to previous level in navigation
const goToPrevLevel = () => {
  if (!NAVIGATION_WRAPPER) return;

  clearTeasers();

  // Find the current level class
  let currentLevel = '';
  const levelMatch = Array.from(NAVIGATION_WRAPPER.classList).find((cls) =>
    cls.match(/^-level-\d+$/),
  );

  if (levelMatch) {
    currentLevel = levelMatch;
    const levelNumber = Number(levelMatch.replace('-level-', ''));

    if (levelNumber === 1 && PREV_LEVEL_BUTTON) {
      (PREV_LEVEL_BUTTON as HTMLElement).style.visibility = 'hidden';
    }

    NAVIGATION_WRAPPER.classList.remove(levelMatch);
    NAVIGATION_WRAPPER.classList.add(`-level-${levelNumber - 1}`);
    NAVIGATION_WRAPPER.classList.remove('-with-teaser');
    // Find elements with current level class within wrapper
    const currentLevelElements = NAVIGATION_WRAPPER.querySelectorAll(
      `.${currentLevel}`,
    );
    currentLevelElements.forEach((element) => {
      element.classList.remove('-visible');
    });
    const highlightElements = NAVIGATION_CONTENT?.querySelectorAll(
      '.o-header-commerce__main-navigation__content__links button.-expanded',
    );
    highlightElements?.forEach((highlightEl) => {
      highlightEl.classList.remove('-expanded');
    });
  }
};

const unsetHeight = () => {
  if (NAVIGATION_CONTENT) {
    if ((NAVIGATION_CONTENT as HTMLElement).style.height) {
      (NAVIGATION_CONTENT as HTMLElement).style.height = '';
    }
  }
};

// state for which tab is currently open
let currentActiveTab = null;

// Simple function to toggle visibility based on aria-controls
const handleAriaControlsClick = (event: Event, level = 0) => {
  if (!NAVIGATION_WRAPPER || !NAVIGATION_CONTENT) return;

  const clickedButton = event.currentTarget as HTMLElement;

  if (
    currentActiveTab === clickedButton &&
    NAVIGATION_WRAPPER.classList.contains('-open') &&
    clickedButton?.classList.contains('-selected') &&
    clickedButton?.getAttribute('aria-expanded') === 'true'
  ) {
    closeMenu();
    return;
  }

  const controlsId = clickedButton?.getAttribute('aria-controls');

  openMenu();
  clearLevelClasses();

  const hasTeaser = clickedButton.getAttribute('aria-details') === 'teaser';
  NAVIGATION_WRAPPER.classList.add(`-level-${level}`);

  if (hasTeaser) {
    NAVIGATION_WRAPPER.classList.add(`-with-teaser`);
    MENU_CLOSE_BUTTON_DESKTOP?.parentElement?.classList.add('-main');
  } else {
    NAVIGATION_WRAPPER.classList.remove(`-with-teaser`);
    MENU_CLOSE_BUTTON_DESKTOP?.parentElement?.classList.remove('-main');
  }

  if (PREV_LEVEL_BUTTON && level === 0) {
    (PREV_LEVEL_BUTTON as HTMLElement).style.visibility = 'hidden';
  }

  const newButtons = NAVIGATION_CONTENT.querySelectorAll(
    `#${controlsId} button`,
  );
  // Find the parent LI element
  const parentLi = clickedButton.closest('li');
  if (parentLi) {
    // Find all sibling LI elements
    const siblings = Array.from(parentLi.parentElement?.children || []).filter(
      (child) => child !== parentLi && (child as HTMLElement).tagName === 'LI',
    );

    // Find buttons that are first child of these siblings and remove '-expanded' class
    siblings.forEach((sibling) => {
      // Find ALL buttons inside each sibling (children, grandchildren, etc.)
      const siblingButtons = (sibling as HTMLElement).querySelectorAll(
        'button',
      );
      [...siblingButtons, ...newButtons].forEach((btn) => {
        btn.classList.remove('-expanded');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }
  if (!clickedButton.classList.contains('a-tab-navigation__tab')) {
    clickedButton.classList.add('-expanded');
  }

  clickedButton.setAttribute('aria-expanded', 'true');

  // Find all ul elements with class "-visible"
  const visibleUls = NAVIGATION_CONTENT.querySelectorAll('ul.-visible');
  visibleUls.forEach((ul) => {
    // Check if ul is a parent or sibling of the button
    const isParent = ul.contains(clickedButton);
    const isSibling = ul.parentElement === clickedButton.parentElement;

    if (!isParent && !isSibling) {
      ul.classList.remove('-visible');
    }
  });

  unsetHeight();
  clearTeasers();

  const targetElement = document.getElementById(controlsId);

  if (controlsId) {
    if (targetElement) {
      targetElement.classList.add('-visible');
    }
  }

  // check if one of the presentational elements are open
  // to set the background on the desktop close button
  if (PRESENTATION_ELEMENTS.some((element) => element.classList.contains('-visible'))) {
    MENU_CLOSE_BUTTON_DESKTOP_WRAPPER.classList.add('-secondary')
  }

  const visibleElements = NAVIGATION_CONTENT.querySelectorAll('ul.-visible');
  if (visibleElements.length > 1 && window.innerWidth > 991) {
    const maxHeight = Math.max(
      ...Array.from(visibleElements).map(
        (el) => (el as HTMLElement).offsetHeight,
      ),
    );
    if (maxHeight === (visibleElements[0] as HTMLElement).offsetHeight) {
      unsetHeight();
      return;
    }
    if (maxHeight > 0) {
      (
        NAVIGATION_CONTENT as HTMLElement
      ).style.height = `calc(${maxHeight}px + 3rem)`;
    }
  } else {
    unsetHeight();
  }

  // set focus on first element inside the opened menu
  // doing this after all layout changes to preserve focus
  if (targetElement) {
    const elementToFocus = targetElement.querySelector('li > *') as HTMLElement;
    if (elementToFocus) {
      if (elementToFocus.tagName === 'BUTTON') {
        elementToFocus.focus();
      } else {
        (elementToFocus.firstChild as HTMLElement).focus();
      }
    }
  }
};

// Plain JavaScript function to attach click listeners to buttons with aria-controls
const setupButtonsListeners = () => {
  // get all opener buttons per level
  const buttonsLevel0 = Array.from(COMMERCE_HEADER?.querySelectorAll('.-open-level-0') || [])
  const buttonsLevel1 = Array.from(COMMERCE_HEADER?.querySelectorAll('.-open-level-1') || [])
  const buttonsLevel2 = Array.from(COMMERCE_HEADER?.querySelectorAll('.-open-level-2') || [])
  const buttonsLevel3 = Array.from(COMMERCE_HEADER?.querySelectorAll('.-open-level-3') || [])

  // add level specific opener with level for opening
  buttonsLevel0.forEach(btn => {
    btn.addEventListener('click', (e) => handleAriaControlsClick(e, 0))
  })
  buttonsLevel1.forEach(btn => {
    btn.addEventListener('click', (e) => handleAriaControlsClick(e, 1))
  })
  buttonsLevel2.forEach(btn => {
    btn.addEventListener('click', (e) => handleAriaControlsClick(e, 2))
  })
  buttonsLevel3.forEach(btn => {
    btn.addEventListener('click', (e) => handleAriaControlsClick(e, 3))
  })

  PREV_LEVEL_BUTTON?.addEventListener('click', goToPrevLevel);
  MENU_CLOSE_BUTTON?.addEventListener('click', closeMenu);
  MENU_CLOSE_BUTTON_DESKTOP?.addEventListener('click', closeMenu);
};

document.addEventListener('DOMContentLoaded', () => {
  setupButtonsListeners();

});

document.addEventListener('bosch.frontend-kit-done', () => {
  if (TAB_NAVIGATION) {
    TAB_NAVIGATION.component.setScrollPadding(0)
  }

  // setup mobile utility bar splitbutton
  const UTILITY_SPLIT_BUTTON_MOBILE =
  document.querySelector('#utility_bar_mobile .o-split-button') as ElementWithComponent<SplitButton>

  if (UTILITY_SPLIT_BUTTON_MOBILE) {
    UTILITY_SPLIT_BUTTON_MOBILE.component.setRecalculatePopoverPositionOnOpen(true);
    UTILITY_SPLIT_BUTTON_MOBILE.component.popover.attach(
      UTILITY_SPLIT_BUTTON_MOBILE,
      document.querySelector('.o-header-commerce'),
    )
  }
});

// Close menu when clicking outside of header element
document.addEventListener('click', (event) => {
  if (COMMERCE_HEADER && !COMMERCE_HEADER.contains(event.target as Node)) {
    closeMenu();
  }
});

// Close menu when pressing Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

// Handle scroll to add/remove -scrolled and -scrolled-more classes
const handleScroll = () => {
  if (!COMMERCE_HEADER || !SUPERGRAPHIC) return;

  let scrolledMoreClass = '-scrolled-more';
  let scrolledMoreValue = 95;

  if (!UTILITY_BAR) {
    scrolledMoreClass = '-scrolled-more__without-utility-bar';
    scrolledMoreValue = 80;
  }

  if (window.scrollY >= scrolledMoreValue && window.innerWidth > 1024) {
    COMMERCE_HEADER.classList.add(scrolledMoreClass);
    COMMERCE_HEADER.classList.add('-floating-shadow-m');
    SUPERGRAPHIC.classList.add('-scrolled-more');
  } else {
    COMMERCE_HEADER.classList.remove(scrolledMoreClass);
    COMMERCE_HEADER.classList.remove('-floating-shadow-m');
    SUPERGRAPHIC.classList.remove('-scrolled-more');
  }

  if (window.scrollY >= 32 && window.innerWidth > 1024) {
    COMMERCE_HEADER.classList.add('-scrolled');
    SUPERGRAPHIC.classList.add('-scrolled');
  } else {
    COMMERCE_HEADER.classList.remove('-scrolled');
    SUPERGRAPHIC.classList.remove('-scrolled');
  }
};

window.addEventListener('scroll', handleScroll);

// Watch for wrapper class changes to toggle previous-level-button visibility
if (NAVIGATION_WRAPPER && PREV_LEVEL_BUTTON) {
  const observer = new MutationObserver(() => {
    NAVIGATION_LEVELS.forEach((levelClass) => {
      if (
        NAVIGATION_WRAPPER.classList.contains(levelClass) &&
        levelClass !== '-level-0'
      ) {
        (PREV_LEVEL_BUTTON as HTMLElement).style.visibility = 'visible';
      }
    });
    if (NAVIGATION_WRAPPER.classList.contains('-level-0')) {
      UTILITY_BAR_MOBILE?.classList.add('-visible');
    } else {
      UTILITY_BAR_MOBILE?.classList.remove('-visible');
    }
  });

  observer.observe(NAVIGATION_WRAPPER, {
    attributes: true,
    attributeFilter: ['class'],
  });
}

// add listener to watch for resize between mobile and desktop view to close menu
const mediaQuerySwitch = window.matchMedia('(max-width: 991px)');
mediaQuerySwitch.addEventListener('change', () => {
  closeMenu();
})