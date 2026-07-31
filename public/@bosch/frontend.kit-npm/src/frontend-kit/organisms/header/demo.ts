const SELECTOR_INPUT = '.m-search-form input[type="search"]';
const MIN_INPUT_LENGTH = 3;

const has = (header: Element, className: string): boolean =>
  header.classList.contains(className);
const add = (header: Element, className: string): void =>
  header.classList.add(className);
const remove = (header: Element, className: string): void =>
  header.classList.remove(className);

export default (): void => {
  // every button with the right class will show the "demo" modal on click
  const headers = Array.from(document.querySelectorAll('.o-header'));

  if (headers) {
    headers.forEach((header) => {
      const input = header.querySelector(SELECTOR_INPUT);

      /**
       * This event fires on every input to make sure the header
       * is in the right state (showing suggestions or not)
       */
      if (input) {
        input.addEventListener('input', (event) => {
          const { value } = event.target as HTMLInputElement;

          if (
            value.length >= MIN_INPUT_LENGTH &&
            !has(header, '-show-suggestions')
          ) {
            add(header, '-show-suggestions');
          }

          if (
            value.length < MIN_INPUT_LENGTH &&
            has(header, '-show-suggestions')
          ) {
            remove(header, '-show-suggestions');
          }
        });
      }
    });
  }
};
