import InputSearch from '../../atoms/inputSearch';
import BaseComponent from '../../baseComponent';

const SEARCH_BAR_SEARCH_INPUT_COMPONENT_SELECTOR = '.a-search-input';
const SEARCH_BAR_INPUT_SELECTOR = '.m-search-bar input';
const SEARCH_BAR_BUTTON_SELECTOR = '.m-search-bar__icon-search';

type Search = { component: InputSearch } & HTMLElement;

export default class SearchBar extends BaseComponent {
  private searchInputComponent: Search;
  private searchInput: HTMLInputElement;
  private searchButton: HTMLButtonElement;

  constructor(container: HTMLElement) {
    super(container);

    /**
     * Define DOM Elements and Variables
     */
    this.searchInputComponent = this.container.querySelector(
      SEARCH_BAR_SEARCH_INPUT_COMPONENT_SELECTOR,
    );
    this.searchInput = this.container.querySelector(SEARCH_BAR_INPUT_SELECTOR);
    this.searchButton = this.container.querySelector(
      SEARCH_BAR_BUTTON_SELECTOR,
    );

    if (this.searchButton && !this.searchInput.hasAttribute('readonly'))
      this.searchButton.addEventListener('click', () => {
        this.searchInputComponent.component.resetInputAndHideButton();
      });
  }
}
