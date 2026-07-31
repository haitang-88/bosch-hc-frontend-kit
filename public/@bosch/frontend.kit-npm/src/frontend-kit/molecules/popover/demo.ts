import ElementWithComponent from '../../ElementWithComponent';
import Popover from '.';

export default (): void => {
  // every button with the right class will show the "demo" modal on click
  const examples = document.getElementsByClassName(
    'frontend-kit-example_attached-popover',
  );
  [...examples].forEach(container => {
    const showTrigger = container.querySelector(
      '.a-button[data-frok-action="show"]',
    ) as HTMLElement;

    const popoverElement = container.querySelector(
      '.m-popover',
    ) as ElementWithComponent<Popover>;

    if (!popoverElement) {
      console.warn('Could not find a popover inside the example - skipping.');
      return;
    }

    const popover = popoverElement.component;

    popover.attach(showTrigger);

    showTrigger.addEventListener('click', () => popover.show(true));

    popover.addEventListener('buttonClicked', () => popover.hide());
    popover.addEventListener('closeButtonClicked', () => popover.hide());
  });

  // every button with the right class will show the "demo" modal on click
  // nested popovers: when a popover is used within another popover
  const examples = document.getElementsByClassName(
    'frontend-kit-example_nested-popover',
  );
  [...examples].forEach(container => {
    const showTriggerBase = container.querySelector(
      ':scope > .a-button[data-frok-action="show"]',
    ) as HTMLElement;

    const showTriggerNested = container.querySelector(
      ':scope > .m-popover .a-button[data-frok-action="show"]',
    ) as HTMLElement;

    const popoverElementBase = container.querySelector(
      ':scope > .m-popover',
    ) as ElementWithComponent<Popover>;

    const popoverElementNested = container.querySelector(
      ':scope > .m-popover .m-popover',
    ) as ElementWithComponent<Popover>;

    if (!popoverElementBase) {
      console.warn('Could not find a popover inside the example - skipping.');
      return;
    }

    if (!popoverElementNested) {
      console.warn('Could not find a popover inside the popover - skipping.');
      return;
    }

    const popoverBase = popoverElementBase.component;
    const popoverNested = popoverElementNested.component;

    popoverBase.attach(showTriggerBase);

    // nesting the inner popover within the popoverElementBase
    popoverNested.attach(showTriggerNested, popoverElementBase);

    showTriggerBase.addEventListener('click', () => popoverBase.show(true));
    showTriggerNested.addEventListener('click', () => popoverNested.show(true));

    // when closing the base popover, the nested popover will also be closed
    popoverBase.addEventListener('buttonClicked', () => {
      popoverBase.hide();
      popoverNested.hide();
    });
    popoverBase.addEventListener('closeButtonClicked', () => {
      popoverBase.hide();
      popoverNested.hide();
    });

    popoverNested.addEventListener('buttonClicked', () => popoverNested.hide());
    popoverNested.addEventListener('closeButtonClicked', () =>
      popoverNested.hide(),
    );
  });

  const galleryExamples = document.querySelectorAll(
    '.frontend-kit-example_attached-popover-gallery',
  );
  [...galleryExamples].forEach(galleryExample => {
    const singleExamples = galleryExample.children;

    [...singleExamples].forEach(example => {
      const trigger = [...example.children].filter(child =>
        child.classList.contains('a-button'),
      )[0] as HTMLElement;

      const popoverElement = [...example.children].filter(child =>
        child.classList.contains('m-popover'),
      )[0] as ElementWithComponent<Popover>;

      if (!popoverElement) {
        console.warn(
          'Could not find a popover inside the gallery example - skipping.',
        );
        return;
      }

      const popover = popoverElement.component;

      popover.attach(trigger);

      trigger.addEventListener('click', () => {
        if (popoverElement.classList.contains('-show')) {
          popover.hide();
        } else {
          popover.show(true);
        }
      });

      popover.addEventListener('buttonClicked', () => popover.hide());
      popover.addEventListener('closeButtonClicked', () => popover.hide());
    });
  });
};
