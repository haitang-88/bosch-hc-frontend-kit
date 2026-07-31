import InputSearch, { EVENT_ON_INPUT } from '../../atoms/inputSearch';
import BaseComponent from '../../baseComponent';
import ElementWithComponent from '../../ElementWithComponent';
import EscapeKeyHelper from '../../helpers/escapeKey.helper';

const SELECTOR_INPUT = '.a-search-input';
export const EVENT_SEARCH_CLEAR = 'searchClear';
export const EVENT_SEARCH_CLOSE = 'searchClose';

/**
 * SearchForm is a class that represents a search form component.
 * @extends BaseComponent
 */
export default class SearchForm extends BaseComponent {
  /**
   * The HTML element of the search form.
   */
  public element: HTMLElement;

  /**
   * A function that determines whether the search form should listen to events.
   */
  public shouldListen: () => boolean;

  /**
   * An instance of the EscapeKeyHelper class.
   */
  private escapeKeyHelper: EscapeKeyHelper;

  /**
   * The search input element of the search form.
   */
  public searchInput: InputSearch;

  /**
   * An array of events that the search form can trigger.
   */
  protected static events = [EVENT_SEARCH_CLEAR, EVENT_SEARCH_CLOSE];

  /**
   * Creates an instance of SearchForm.
   * @param {HTMLElement} container - The container element of the search form.
   * @param {Function} [shouldListen=true] - A function that determines whether the search form should listen to events.
   * @throws {Error} - Throws an error if no search input has been found for the search form component.
   */
  constructor(
    container: HTMLElement,
    shouldListen: () => boolean = () => true,
  ) {
    super(container);

    this.container = container;
    this.element = container;

    // get input-search element and check if it was already initialized
    const searchInputElement: ElementWithComponent<InputSearch> =
      this.container.querySelector(SELECTOR_INPUT);

    if (searchInputElement) {
      if (searchInputElement.component) {
        this.searchInput = searchInputElement.component;
      } else {
        this.searchInput = new InputSearch(searchInputElement);
      }
    }

    this.shouldListen = shouldListen;

    if (!this.searchInput) {
      throw new Error('No SearchInput has been found for SearchFrom-Component');
    }

    this.initKeyHelper();
    this.initSearchInput();
  }

  /**
   * Enables the escape key listener for the search form.
   * @returns {void}
   */
  public enableListeners(): void {
    this.escapeKeyHelper.enable();
  }

  /**
   * Disables the escape key listener for the search form.
   * @returns {void}
   */
  public disableListeners(): void {
    this.escapeKeyHelper.disable();
  }

  /**
   * Initializes the search input event listener.
   * @returns {void}
   */
  public initSearchInput(): void {
    this.searchInput.addEventListener(EVENT_ON_INPUT, (value: string) => {
      /**
       * Enable escape key listener when search input is not
       * empty and not listening to be able to clear the input
       */
      if (value.length > 0 && !this.escapeKeyHelper.isListening) {
        this.enableListeners();
      }
    });
  }

  /**
   * Initializes the escape key helper for the search form.
   * @returns {void}
   */
  public initKeyHelper(): void {
    this.escapeKeyHelper = new EscapeKeyHelper(() => {
      if (this.searchInput.getInputLength() === 0) {
        this.triggerEvent(EVENT_SEARCH_CLOSE);
        return;
      }

      /**
       * Clear search input and trigger 'clear'-event
       */
      this.searchInput.resetInputAndHideButton();
      this.searchInput.focusInput();
      this.triggerEvent(EVENT_SEARCH_CLEAR);
    }, this.shouldListen);
  }
}
