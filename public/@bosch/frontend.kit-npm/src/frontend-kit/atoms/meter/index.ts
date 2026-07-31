import BaseComponent from '../../baseComponent';

export default class Meter extends BaseComponent {
  constructor(container: HTMLElement) {
    super(container);

    const observerOptions = {
      childList: false,
      subtree: false,
      attributes: true,
      attributeFilter: ['data-progress'],
    };

    const observer = new MutationObserver(Meter.callback);
    observer.observe(container.querySelector('meter'), observerOptions);
  }

  static callback(mutationList): void {
    mutationList.forEach((mutation) => {
      const { progress } = mutation.target.dataset;

      mutation.target.setAttribute('value', progress);
      mutation.target.setAttribute('aria-valuenow', progress);
    });
  }
}
