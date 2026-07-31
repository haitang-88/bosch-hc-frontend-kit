import ElementWithComponent from '../../ElementWithComponent';
import SearchForm from '../../molecules/searchForm';

const CLASS_SHOW_SUGGESTIONS = '-show-suggestions';

const suggestionsShown = (footer: Element): boolean => {
  return footer.classList.contains(CLASS_SHOW_SUGGESTIONS);
};

export default (): void => {
  // every button with the right class will show the "demo" modal on click
  // Exclude from selection the footers (those with class '-minimal') without an input inside
  const footers = Array.from(
    document.querySelectorAll('.o-footer:not(.-minimal)'),
  );

  footers.forEach((footer) => {
    let addSuggestionTimeout: ReturnType<typeof setTimeout> = null;

    const form: ElementWithComponent<SearchForm> =
      footer.querySelector('.m-search-form');
    const allResultsLink = footer.querySelector(
      '.a-search-suggestions__results-link a',
    );

    form.component.searchInput.addEventListener('onInput', (value) => {
      /**
       * Show suggestions if:
       * - the input has at least 3 characters
       * and
       * - the suggestions are not already shown
       * and
       * - there is no timeout set to show the suggestions
       */
      if (
        value.length >= 3 &&
        !suggestionsShown(footer) &&
        addSuggestionTimeout === null
      ) {
        addSuggestionTimeout = setTimeout(() => {
          footer.classList.add(CLASS_SHOW_SUGGESTIONS);
          allResultsLink.removeAttribute('tabindex');
          addSuggestionTimeout = null;
        }, 750);
      }

      /**
       * Hide suggestions if:
       * - the input has less than 3 characters
       * and
       * - the suggestions are currently visible
       */
      if (value.length < 3 && suggestionsShown(footer)) {
        addSuggestionTimeout = setTimeout(() => {
          footer.classList.remove(CLASS_SHOW_SUGGESTIONS);
          allResultsLink.setAttribute('tabindex', '-1');
          addSuggestionTimeout = null;
        }, 250);
      }
    });
  });
};
