// Add randomly between 2 to 10% progress.
function setProgress(container: Element): void {
  let currentValue = Number(container.getAttribute('data-progress'));
  if (currentValue === 100) {
    currentValue = 0;
  }

  const progress: number = Math.floor(Math.random() * (10 - 2) + 5);
  let newValue: number = currentValue + progress;

  if (newValue > 100) {
    newValue = 100;
  }
  container.setAttribute('data-progress', `${newValue}`);
}

export default (): void => {
  const examples = document.querySelectorAll(
    '[id="meter-example-without-optimum-value"], [id="meter-example-with-optimum-value"]',
  );

  examples.forEach((container) => {
    window.setInterval(setProgress.bind(this, container), 1000);
  });
};
