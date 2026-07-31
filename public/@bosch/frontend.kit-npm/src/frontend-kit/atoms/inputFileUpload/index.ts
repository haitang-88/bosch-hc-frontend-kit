import { ChangeEvent } from 'react';
import BaseComponent from '../../baseComponent';

class InputFileUpload extends BaseComponent {
  private fileUploadInput: HTMLInputElement;
  private fileUploadLabel: HTMLLabelElement;

  constructor(container: HTMLElement) {
    super(container);

    /**
     * Define DOM Elements and Variables
     */

    this.fileUploadInput = this.container.querySelector('input');
    this.fileUploadLabel = this.container.querySelector('label');

    if (this.fileUploadInput) {
      this.fileUploadInput.addEventListener(
        'change',
        this.updateImageDisplay.bind(this),
      );

      this.fileUploadLabel.addEventListener('click', (e) => {
        e.preventDefault();
        this.fileUploadInput.click();
      });

      this.fileUploadInput.addEventListener(
        'focus',
        this.handleFocus.bind(this),
      );
      this.fileUploadInput.addEventListener('blur', this.handleBlur.bind(this));
    }
  }

  /**
   * @name handleFocus
   * @description
   * Handle when the container has focus
   */
  private handleFocus(): void {
    this.container.classList.add('-focus-visible');
  }

  /**
   * @name handleBlur
   * @description
   * Handle when the container has no focus
   */
  private handleBlur(): void {
    this.container.classList.remove('-focus-visible');
  }

  /**
   * @name updateImageDisplay
   * @description
   * Update the label based on file selection
   */
  // eslint-disable-next-line class-methods-use-this
  private updateImageDisplay(e: ChangeEvent<HTMLInputElement>): void {
    const currentInput = e.target;
    const currentFiles = currentInput.files;
    const currentPreview = currentInput.nextElementSibling;

    if (currentFiles.length > 0) {
      currentPreview.innerHTML = '';
      Array.from(currentFiles).forEach((file) => {
        const fileToDisplay = document.createElement('p');
        fileToDisplay.textContent = file.name;
        currentPreview.appendChild(fileToDisplay);
      });
    } else {
      currentPreview.innerHTML = '<p>No file chosen</p>';
    }
  }
}

export default InputFileUpload;
