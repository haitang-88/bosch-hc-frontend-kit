export const availableBrands = [
  "pro",
  "dremel",
  "diy",
  "bosch"
];

export const BRAND_LOADERS = {
  "pro": () => import('./brands/pro/tokens'),
  "dremel": () => import('./brands/dremel/tokens'),
  "diy": () => import('./brands/diy/tokens'),
  "bosch": () => import('./brands/bosch/tokens')
};