const FULLPAGE_ONLY_COMPONENTS: string[] = [
  'header',
  'footer',
  'footer commerce',
  'layout',
  'side navigation',
  'minimal header',
  'header commerce',
  'lightbox',
  'audio',
];

/**
 * usually full page components, do not to be centered, but we need to distinct between
 * full page components and components that do not need to be centered on the preview-layout
 */
const NOT_CENTERED_IN_PREVIEW_PAGE_COMPONENTS: string[] = [
  'header',
  'footer',
  'footer commerce',
  'layout',
  'side navigation',
  'minimal header',
  'header commerce',
  'lightbox',
  'audio',
];

const FULLPAGE_ONLY_VARIANTS: string[] = [
  'dialog modal-less',
  'tab links with labels',
  'tab links with labels and icons',
  'tab links with labels and icons, 3rd disabled',
  'modal box',
  'attached example',
  'gallery of attachement positions',
  'slider vertical',
  'slider vertical disabled',
  'slider vertical with tooltip',
  'slider vertical with label',
  'slider vertical with absolute value tooltip',
  'slider vertical with absolute value tooltip and unit',
  'all buttons',
  'all floating button groups',
  'all tiles',
];

const WITHOUT_COMMANDBAR_COMPONENTS = [
  'minimal header',
  'header commerce',
  'footer commerce',
];

const DREMEL_ONLY_VARIANTS = ['dremel specific', 'dremel specific sticky'];

export {
  FULLPAGE_ONLY_COMPONENTS,
  FULLPAGE_ONLY_VARIANTS,
  NOT_CENTERED_IN_PREVIEW_PAGE_COMPONENTS,
  WITHOUT_COMMANDBAR_COMPONENTS,
  DREMEL_ONLY_VARIANTS,
};
