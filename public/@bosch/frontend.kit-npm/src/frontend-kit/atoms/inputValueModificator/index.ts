/* eslint-disable class-methods-use-this */
import BaseComponent from '../../baseComponent';

const MINUS_BUTTON = 'a-value-modificator__minus-button';
const PLUS_BUTTON = 'a-value-modificator__plus-button';

const PRESSED = '-pressed';

export default class InputValueModificator extends BaseComponent {
  protected static events = ['onInput'];

  private readonly minusButton: HTMLElement;

  private readonly plusButton: HTMLElement;

  private readonly input: HTMLInputElement;

  constructor(container: HTMLElement) {
    super(container);

    /**
     * Define DOM Elements and Variables
     */
    this.minusButton = container.querySelector(`.${MINUS_BUTTON}`);
    this.plusButton = container.querySelector(`.${PLUS_BUTTON}`);
    this.input = container.querySelector('input');

    if (this.input instanceof HTMLInputElement) {
      if (!this.input.value) {
        this.input.value = '0';
      }
    }

    if (this.minusButton instanceof HTMLElement) {
      this.initElement(this.minusButton);

      this.minusButton.onclick = (): void => {
        this.stepDownInputValue();
      };
      this.minusButton.addEventListener('mousedown', () => {
        this.togglePressed(this.minusButton);
      });
      this.minusButton.addEventListener('mouseup', () => {
        this.togglePressed(this.minusButton);
      });
    }

    if (this.plusButton instanceof HTMLElement) {
      this.initElement(this.plusButton);

      this.plusButton.onclick = (): void => {
        this.stepUpInputValue();
      };
      this.plusButton.addEventListener('mousedown', () => {
        this.togglePressed(this.plusButton);
      });
      this.plusButton.addEventListener('mouseup', () => {
        this.togglePressed(this.plusButton);
      });
    }
  }

  initElement(element: HTMLElement): void {
    if (this.input.value === this.input.min && element === this.minusButton) {
      this.disable(element);
    }

    if (this.input.value === this.input.max && element === this.plusButton) {
      this.disable(element);
    }
  }

  stepUpInputValue(): void {
    const value = Number.isNaN(this.input.valueAsNumber)
      ? 0
      : this.input.valueAsNumber;

    const step: number = +this.input.step;
    let update = value + step;

    this.enable(this.minusButton);

    if (update >= +this.input.max) {
      this.disable(this.plusButton);
      update = +this.input.max;
    }

    this.input.value = update.toString();
    this.triggerEvent('onInput', update);
  }

  stepDownInputValue(): void {
    if (
      this.container.classList.contains('-disabled') ||
      this.container.classList.contains('-readonly')
    ) {
      return;
    }

    const value = Number.isNaN(this.input.valueAsNumber)
      ? 0
      : this.input.valueAsNumber;

    const step: number = +this.input.step;
    let update = value - step;

    this.enable(this.plusButton);

    if (update <= +this.input.min) {
      this.disable(this.minusButton);
      update = +this.input.min;
    }

    this.input.value = update.toString();
    this.triggerEvent('onInput', update);
  }

  disable(element: HTMLElement): void {
    element.setAttribute('disabled', '');
  }

  enable(element: HTMLElement): void {
    element.removeAttribute('disabled');
  }

  togglePressed(element: HTMLElement): void {
    if (element.classList.contains(PRESSED)) {
      element.classList.remove(PRESSED);
    } else {
      element.classList.add(PRESSED);
    }
  }

  /**
   * @param value new value of the value modificator input
   * @description sets the value of the value modificator input
   */
  public setValue(value: number): void {
    // check if value is really a number
    const checkedValue = Number.isNaN(value) ? this.input.value : value;

    this.input.value = checkedValue.toString();
    this.triggerEvent('onInput', checkedValue);
  }
}
