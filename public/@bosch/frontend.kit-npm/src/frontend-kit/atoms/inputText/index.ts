import BaseComponent from '../../baseComponent';

const EDIT_BUTTON = '.a-text-field__icon-edit';
const CLEAR_BUTTON = '.a-text-field__icon-close';

export default class InputText extends BaseComponent {
  protected static events = ['onClear'];

  private editButton: HTMLButtonElement;
  private clearButton: HTMLButtonElement;
  private input: HTMLInputElement;

  constructor(container: HTMLElement) {
    super(container);

    /**
     * Define DOM Elements and Variables
     */
    this.input = container.querySelector('input');
    this.editButton = container.querySelector(EDIT_BUTTON);
    this.clearButton = container.querySelector(CLEAR_BUTTON);

    if (this.container.classList.contains('a-text-field--integrated')) {
      this.input.addEventListener('focus', () => {
        if (!this.input.hasAttribute('readonly')) {
          this.showClearButton.bind(this)();
        }
      });

      this.editButton.addEventListener('focus', () => {
        this.showClearButton.bind(this)();
        this.input.focus();
      });

      this.editButton.addEventListener('click', () => {
        this.showClearButton.bind(this)();
        this.input.focus();
      });

      container.addEventListener('focusout', (event) => {
        if (
          event.relatedTarget !== this.clearButton &&
          !this.input.hasAttribute('readonly')
        ) {
          this.hideClearButton();
        }
      });

      this.clearButton.addEventListener(
        'click',
        this.resetInputAndHideButton.bind(this),
      );
    }
  }

  /**
   * @name hideClearButton
   * @description
   * Hide the clear button
   */
  private hideClearButton(): void {
    this.clearButton.style.display = 'none';
    this.editButton.style.display = 'inline-flex';
  }

  /**
   * @name showClearButton
   * @description
   * Show the clear button
   */
  private showClearButton(): void {
    this.clearButton.style.display = 'inline-flex';
    this.editButton.style.display = 'none';
  }

  /**
   * @name resetInputValue
   * @description
   * Reset the input value
   */
  private resetInputValue(): void {
    this.input.value = '';
  }

  /**
   * @name setInputFocus
   * @description
   * Focus the input field
   */
  private setInputFocus(): void {
    this.input.focus();
  }

  /**
   * @name resetInputAndHideButton
   * @description
   * Reset the input value and hide the clear button
   */
  public resetInputAndHideButton(): void {
    this.resetInputValue();
    this.hideClearButton();
    this.clearButton.blur();
    this.triggerEvent('onClear');
  }
}
