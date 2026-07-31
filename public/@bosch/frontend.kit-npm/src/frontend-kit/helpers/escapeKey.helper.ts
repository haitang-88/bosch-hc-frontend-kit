/**
 * Helper class to listen for escape key presses
 *
 * @param {boolean}  isListening - Whether escape key is currently being listened for
 * @param {Function} closeFn - Function to call when escape key is pressed
 * @param {Function} shouldListen - Function to call to determine if escape key should be listened for
 */
export default class EscapeKeyHelper {
  public isListening: boolean;
  private closeFn: () => void;
  private shouldListen: () => boolean;

  constructor(closeFn: () => void, shouldListen: () => boolean) {
    this.closeFn = closeFn;
    this.shouldListen = shouldListen;
    this.isListening = false;

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  /**
   * Handles the keydown event for the escape key.
   *
   * @param {KeyboardEvent} event - The keyboard event object.
   * @returns {void}
   */
  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.shouldListen()) {
      this.disable();
      this.closeFn();
    }
  }

  /**
   * Add event listener for escape key presses
   * @returns {void}
   */
  public enable(): void {
    if (!this.isListening) {
      document.addEventListener('keydown', this.handleKeyDown);
      this.isListening = true;
    }
  }

  /**
   * Remove event listener for escape key presses
   * @returns {void}
   */
  public disable(): void {
    document.removeEventListener('keydown', this.handleKeyDown);
    this.isListening = false;
  }
}
