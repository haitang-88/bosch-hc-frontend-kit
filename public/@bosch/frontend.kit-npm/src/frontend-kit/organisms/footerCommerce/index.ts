import BaseComponent from '../../baseComponent';

export default class FooterCommerce extends BaseComponent {
  private scrollToTopButton: HTMLButtonElement;

  constructor(container: HTMLElement) {
    super(container);

    this.scrollToTopButton = container.querySelector('.o-footer-commerce__scroll-to-top');

    if (this.scrollToTopButton) {
      this.scrollToTopButton.addEventListener('click', this.scrollToTop);
    }
  }

  private scrollToTop(): void {
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}
