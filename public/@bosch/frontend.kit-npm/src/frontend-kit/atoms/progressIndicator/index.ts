import BaseComponent from '../../baseComponent';

export default class ProgressIndicator extends BaseComponent {
  constructor(container: HTMLElement) {
    super(container);

    const observerOptions = {
      childList: false,
      subtree: false,
      attributes: true,
      attributeFilter: ['data-progress'],
    };

    const observer = new MutationObserver(ProgressIndicator.callback);
    observer.observe(container.querySelector('progress'), observerOptions);
  }

  static setWidth(innerBar: HTMLElement, progress: number): void {
    innerBar.setAttribute('style', `width:${progress}%`);
  }

  static callback(mutationList): void {
    mutationList.forEach((mutation) => {
      const innerBar = mutation.target.nextElementSibling;
      const { progress } = mutation.target.dataset;

      mutation.target.setAttribute('value', progress);

      ProgressIndicator.setWidth(innerBar, mutation.target.dataset.progress);
    });
  }
}
