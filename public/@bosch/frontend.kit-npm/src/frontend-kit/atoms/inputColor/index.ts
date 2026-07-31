import BaseComponent from '../../baseComponent';

class InputColor extends BaseComponent {
  private colorInput: HTMLInputElement;

  constructor(container: HTMLElement) {
    super(container);

    /**
     * Define DOM Elements and Variables
     */
    this.colorInput = this.container.querySelector('input');

    if (this.colorInput) {
      this.colorInput.addEventListener('focus', this.handleFocus.bind(this));
      this.colorInput.addEventListener('blur', this.handleBlur.bind(this));
      this.colorInput.addEventListener('input', this.handleChange.bind(this));
      this.colorInput.addEventListener('keyup', this.handleKeyup.bind(this));
    }

    document.addEventListener('click', this.handleDocumentClick.bind(this));
  }

  /**
   * @name handleFocus
   * @description
   * When input receives focus add color to its parent
   */
  private handleFocus(): void {
    this.container.style.backgroundColor =
      'var(--nested-minor__enabled__default__fill, var(--accent-minor__enabled__default__fill))';
  }

  /**
   * @name handleBlur
   * @description
   * When input loses focus remove color to its parent
   */
  private handleBlur(): void {
    this.container.style.backgroundColor = '';
    this.container.classList.remove('-focus-visible');
  }

  /**
   * @name handleChange
   * @description
   * Sync the color of the :before element with the input's selection
   */
  private handleChange(event: Event): void {
    const selectedColor = (event.target as HTMLInputElement).value;
    this.container.style.setProperty('--before-color', selectedColor);
  }

  /**
   * @name handleKeyup
   * @description
   * Handle keyup event to determine if the Tab key is released
   * also listen for Shift key release to catch backwards incoming focus selection
   * Apply outline only if the Tab key is released
   */
  private handleKeyup(event: KeyboardEvent): void {
    if (event.key === 'Tab' || event.key === 'Shift') {
      this.container.classList.add('-focus-visible');
    } else {
      this.container.classList.remove('-focus-visible');
    }
  }

  /**
   * @name handleDocumentClick
   * @description
   * Handle document click to remove outline if the click is outside the component
   */
  private handleDocumentClick(event: MouseEvent): void {
    if (!this.container.contains(event.target as Node)) {
      this.container.classList.remove('-focus-visible');
    }
  }
}

export default InputColor;
