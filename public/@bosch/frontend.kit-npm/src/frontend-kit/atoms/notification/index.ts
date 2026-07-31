import BaseComponent from '../../baseComponent';
import ElementWithComponent from '../../ElementWithComponent';
import EscapeKeyHelper from '../../helpers/escapeKey.helper';

const BANNER_CLASS = 'a-notification--banner';
const SHOW_CLASS = '-show';

/**
 * Behavior of a banner notification
 */
class Notification extends BaseComponent {
  private static events = ['closeClicked'];
  private escapeKeyHelper: EscapeKeyHelper;

  /**
   * returns a DOM id for the given notification id
   */
  public static notificationId = (id: string): string =>
    `frontend-kit-notification-${id}`;

  /**
   * finds a notification for the given notification id
   */
  public static findNotification = (
    id: string,
    getElementByID: typeof window.document.getElementById = (
      elementId: string,
    ) => window.document.getElementById(Notification.notificationId(elementId)),
  ): ElementWithComponent<Notification> | null => {
    return getElementByID(id) as ElementWithComponent<Notification>;
  };

  /**
   * shows the notification with the given notification id
   */
  public static showNotification = (id: string): void => {
    const notificationElement = Notification.findNotification(id);

    if (!notificationElement) {
      console.warn(`Could not find a notification with id ${id} to show`);
    } else {
      notificationElement.component.show();
    }
  };

  /**
   * hides the notification with the given notification id
   */
  public static hideNotification = (id: string): void => {
    const notificationElement = Notification.findNotification(id);

    if (!notificationElement) {
      console.warn(`Could not find a notification with id ${id} to hide`);
    } else {
      notificationElement.component.hide();
    }
  };

  constructor(container: HTMLElement) {
    super(container);

    this.escapeKeyHelper = new EscapeKeyHelper(
      this.hide.bind(this),
      this.isVisible.bind(this),
    );

    // if this is a banner, move it to the end of the DOM to ensure that layout is correct
    if (container.classList.contains(BANNER_CLASS)) {
      document.body.appendChild(container);
    }

    /**
     * the close button
     */
    const closeButton = container.querySelector('[data-frok-action="close"]');

    if (closeButton) {
      closeButton.addEventListener('click', () => {
        this.triggerEvent('closeClicked');
      });
    }
  }

  /**
   * shows this notification
   */
  public show(): void {
    this.container.classList.add(SHOW_CLASS);
    this.escapeKeyHelper.enable();
  }

  /**
   * hides this notification
   */
  public hide(): void {
    this.container.classList.remove(SHOW_CLASS);
  }

  /**
   * returns true if this notification is currently visible
   */
  public isVisible(): boolean {
    return this.container.classList.contains(SHOW_CLASS);
  }
}

export default Notification;
