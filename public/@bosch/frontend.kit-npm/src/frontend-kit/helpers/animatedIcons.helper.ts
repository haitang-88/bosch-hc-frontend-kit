export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const scriptAdded = (scriptSelector: string) => {
  return !!document.querySelector(scriptSelector);
};
