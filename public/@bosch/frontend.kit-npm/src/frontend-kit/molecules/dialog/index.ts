import BaseComponent from '../../baseComponent';

class Dialog extends BaseComponent {
  closeButtons: Element[];
  cancelButtons: Element[];
  confirmButtons: Element[];

  constructor(container: HTMLDialogElement) {
    super(container);

    if (container.classList.contains('-non-modal')) {
      container.addEventListener('click', (e) => {
        const dialogDimensions = container.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          container.close();
        }
      });
    }

    this.confirmButtons = Array.from(
      container.querySelectorAll('[data-frok-action="confirm"]'),
    );

    this.closeButtons = Array.from(
      container.querySelectorAll('[data-frok-action="close"]'),
    );

    this.cancelButtons = Array.from(
      container.querySelectorAll('[data-frok-action="cancel"]'),
    );

    if (this.confirmButtons) {
      this.confirmButtons.forEach((confirmButton) => {
        confirmButton.addEventListener('click', () => {
          container.close();
        });
      });
    }

    if (this.closeButtons) {
      this.closeButtons.forEach((closeButton) => {
        closeButton.addEventListener('click', () => {
          container.close();
        });
      });
    }

    if (this.cancelButtons) {
      this.cancelButtons.forEach((cancelButton) => {
        cancelButton.addEventListener('click', () => {
          container.close();
        });
      });
    }
  }
}

export default Dialog;
