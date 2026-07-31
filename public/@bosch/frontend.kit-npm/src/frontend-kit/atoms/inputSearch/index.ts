import BaseComponent from '../../baseComponent';

const SEARCH_INPUT_SELECTOR = '.a-search-input input';
const SEARCH_INPUT_CLOSE_BUTTON_SELECTOR = '.a-search-input__icon-close';
const CLASS_CLOSE_BUTTON_VISIBLE = '--close-visible';
export const EVENT_ON_INPUT = 'onInput';

export default class InputSearch extends BaseComponent {
  private searchInput: HTMLInputElement;
  private closeButton: HTMLButtonElement;
  public alwaysShowCloseButton: boolean;

  /**
   * An array of events that the search form can trigger.
   */
  protected static events = [EVENT_ON_INPUT];

  constructor(container: HTMLElement) {
    super(container);

    // do not set up event handlers twice, as they will not work
    if (this.alreadyInitialized === true) {
      return;
    }

    // bind methods
    this.resetInputValue = this.resetInputValue.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.resetInputAndHideButton = this.resetInputAndHideButton.bind(this);
    this.showCloseButton = this.showCloseButton.bind(this);
    this.hideCloseButton = this.hideCloseButton.bind(this);
    this.getInputLength = this.getInputLength.bind(this);
    this.handleInput = this.handleInput.bind(this);

    /**
     * Define DOM Elements and Variables
     */
    this.searchInput = this.container.querySelector(SEARCH_INPUT_SELECTOR);
    this.closeButton = this.container.querySelector(
      SEARCH_INPUT_CLOSE_BUTTON_SELECTOR,
    );

    if (this.searchInput) {
      this.searchInput.addEventListener('input', (event) => {
        const { value } = event.target as HTMLInputElement;

        this.handleInput();
        this.triggerEvent(EVENT_ON_INPUT, value);
      });
    }

    if (this.closeButton)
      this.closeButton.addEventListener('click', () => {
        this.resetInputAndHideButton();
        this.focusInput();
      });
  }

  /**
   * @name handleInput
   * @description
   * Show or hide the close button based on input
   */
  private handleInput(): void {
    if (this.searchInput.value.trim() !== '') {
      this.showCloseButton();
    } else {
      this.hideCloseButton();
    }
  }

  /**
   * @name hideCloseButton
   * @description
   * Hide the close button
   */
  private hideCloseButton(): void {
    if (this.alwaysShowCloseButton) return;

    this.container.classList.remove(CLASS_CLOSE_BUTTON_VISIBLE);
  }

  /**
   * @name showCloseButton
   * @description
   * Show the close button
   */
  private showCloseButton(): void {
    this.container.classList.add(CLASS_CLOSE_BUTTON_VISIBLE);
  }

  /**
   * @name resetInputValue
   * @description
   * Reset the input value
   */
  public resetInputValue(): void {
    this.searchInput.value = '';
    this.triggerEvent(EVENT_ON_INPUT, '');
  }

  /**
   * @name resetInputAndHideButton
   * @description
   * Reset the input value and hide the close button
   */
  public resetInputAndHideButton(): void {
    this.resetInputValue();
    this.hideCloseButton();
  }

  /**
   * @name focusInput
   * @description
   * focused the input element
   */
  public focusInput(): void {
    this.searchInput.focus();
  }

  /**
   * @name getInputLength
   * @returns the length of the current input
   */
  public getInputLength(): number {
    return this.searchInput.value.length;
  }

  /**
   * @name alwaysShowCloseButton
   * @param {boolean} show      wether to always show the close or not
   * @description
   * if set to true, the close button will always be shown, even without content
   */
  public setAlwaysShowCloseButton(show: boolean): void {
    this.alwaysShowCloseButton = show;
    if (show) {
      this.showCloseButton();
    } else {
      this.hideCloseButton();
    }
  }
}
