import BaseComponent from '../../baseComponent';

const OPEN_DIALOG_BUTTON_SELECTOR = '.a-week-input__button';
const INPUT_WEEK_SELECTOR = 'input[type="week"]';

export default class InputWeek extends BaseComponent {
  private openDialogButton: HTMLButtonElement;
  private input: HTMLInputElement;

  constructor(container: HTMLElement) {
    super(container);

    /**
     * Define DOM Elements and Variables
     */
    this.openDialogButton = container.querySelector(
      OPEN_DIALOG_BUTTON_SELECTOR,
    );
    this.input = container.querySelector(INPUT_WEEK_SELECTOR);

    // register click event for the button
    if (this.openDialogButton instanceof HTMLButtonElement) {
      this.openDialogButton.addEventListener('click', () => {
        const { input } = this;
        input.showPicker();
      });
    }
  }
}
