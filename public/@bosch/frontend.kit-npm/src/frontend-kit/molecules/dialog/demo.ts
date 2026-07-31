export default (): void => {
  const dialogExamples = document.getElementsByClassName(
    'frontend-kit-example_modal-dialog',
  );

  Array.from(dialogExamples).forEach((container) => {
    const triggers = Array.from(
      container.getElementsByClassName('a-button-dialog'),
    ) as HTMLButtonElement[];
    const dialogs = Array.from(
      container.querySelectorAll(
        'dialog[id^="demo-"], dialog[id^="default"], dialog[id^="alert-dialog"], dialog[id^="dialog-non-modal"]',
      ),
    ) as HTMLDialogElement[];

    triggers.forEach((trigger, index) => {
      trigger.addEventListener('click', () => {
        const dialogId = dialogs[index].id;

        if (dialogId.startsWith('modal')) {
          dialogs[index].show();
        } else {
          dialogs[index].showModal();
        }

        if (dialogId.startsWith('non-modal')) {
          dialogs[index].addEventListener('click', (e) => {
            const dialogDimensions = dialogs[index].getBoundingClientRect();
            if (
              e.clientX < dialogDimensions.left ||
              e.clientX > dialogDimensions.right ||
              e.clientY < dialogDimensions.top ||
              e.clientY > dialogDimensions.bottom
            ) {
              dialogs[index].close();
            }
          });
        }
      });
    });
  });
};
