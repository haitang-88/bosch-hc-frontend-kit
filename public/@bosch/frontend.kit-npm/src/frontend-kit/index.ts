/**
 * This file contains all logic part of the components
 * The file will be used to load components logic
 * on static sites
 */
import Accordion from './atoms/accordion';
import InputText from './atoms/inputText';
import InputPassword from './atoms/inputPassword';
import InputDate from './atoms/inputDate';
import InputDatetime from './atoms/inputDatetime';
import InputTime from './atoms/inputTime';
import InputMonth from './atoms/inputMonth';
import InputWeek from './atoms/inputWeek';
import TextArea from './atoms/textArea';
import Checkbox from './atoms/checkbox';
import InputColor from './atoms/inputColor';
import AnimatedIcon from './atoms/animatedIcon';
import Box from './atoms/box/index';
import InputFileUpload from './atoms/inputFileUpload';
import Meter from './atoms/meter';
import Notification from './atoms/notification/index';
import Timeline from './atoms/timeline/index';
import ProgressIndicator from './atoms/progressIndicator/index';
import ValueModificator from './atoms/inputValueModificator';
import Rating from './atoms/rating/index';
import InputSearch from './atoms/inputSearch';
import Slider from './atoms/slider/index';
import TabNavigation from './atoms/tabNavigation/index';

import Audio from './molecules/audio';
import Dialog from './molecules/dialog/index';
import Popover from './molecules/popover';
import Lightbox from './molecules/lightbox/index';
import MenuGroup from './molecules/menuGroup/index';
import SearchBar from './molecules/searchBar/index';
import UploadArea from './molecules/uploadArea/index';
import Video from './molecules/video';

import SideNavigation from './molecules/sideNavigation/index';

import ElementWithComponent from './ElementWithComponent';
import WindowWithFrontendKit from './WindowWithFrontendKit';
import FormField from './molecules/formField';
import SearchForm from './molecules/searchForm/index';
import PageIndicator from './atoms/pageIndicator/index';

import ContextMenu from './organisms/contextMenu/index';
import Header from './organisms/header/index';
import MinimalHeader from './organisms/minimalHeader/index';
import SplitButton from './organisms/splitButton/index';
import FooterCommerce from './organisms/footerCommerce/index';

/**
 * @WARNING
 * the order of these entries determines the loading order
 * of component behavior code.
 *
 * Keep this in mind when adding components here
 */
const components = [
  {
    Component: Accordion,
    selector: '.a-accordion',
  },
  {
    Component: Checkbox,
    selector: '.a-checkbox',
  },
  {
    Component: InputSearch,
    selector: '.a-search-input',
  },
  {
    Component: InputColor,
    selector: '.a-color-input',
  },
  {
    Component: AnimatedIcon,
    selector: '.a-animated-icon',
  },
  {
    Component: Lightbox,
    selector: '.m-lightbox',
  },
  {
    Component: Dialog,
    selector: '.m-dialog',
  },
  {
    Component: Box,
    // here, we only need functionality for modal boxes
    selector: '.a-box--modal',
  },
  {
    Component: Meter,
    // here, we only need functionality for modal boxes
    selector: '.a-meter',
  },
  {
    Component: InputFileUpload,
    // here, we only need functionality for modal boxes
    selector: '.a-file-upload-input',
  },
  {
    Component: Audio,
    selector: '.m-audio',
  },
  {
    Component: Popover,
    // here, we only need functionality for detached popovers
    selector: '.m-popover:not(.-detached)',
  },
  {
    Component: UploadArea,
    selector: '.m-upload-area',
  },
  {
    Component: SearchBar,
    selector: '.m-search-bar',
  },
  {
    Component: InputText,
    selector: '.a-text-field',
  },
  {
    Component: InputPassword,
    selector: '.a-password-input',
  },
  {
    Component: InputDate,
    selector: '.a-date-input',
  },
  {
    Component: InputDatetime,
    selector: '.a-datetime-input',
  },
  {
    Component: InputTime,
    selector: '.a-time-input',
  },
  {
    Component: InputMonth,
    selector: '.a-month-input',
  },
  {
    Component: InputWeek,
    selector: '.a-week-input',
  },
  {
    Component: TextArea,
    selector: '.a-text-area',
  },
  {
    Component: Notification,
    // here, we only need functionality for banner notifications
    selector: '.a-notification--banner',
  },
  {
    Component: Timeline,
    selector: '.a-timeline',
  },
  {
    Component: ProgressIndicator,
    selector: '.a-progress-indicator-container',
  },
  {
    Component: FormField,
    selector: '.m-form-field',
  },
  {
    Component: SideNavigation,
    selector: '.m-side-navigation:not(.-detached)',
  },
  {
    Component: Slider,
    selector: '.a-slider',
  },
  {
    Component: PageIndicator,
    selector: '.a-page-indicator',
  },
  {
    Component: ValueModificator,
    selector: '.a-value-modificator',
  },
  {
    Component: TabNavigation,
    selector: '.a-tab-navigation',
  },
  {
    Component: ContextMenu,
    selector: '.o-context-menu',
  },
  {
    Component: Header,
    selector: '.o-header',
  },
  {
    Component: MinimalHeader,
    selector: '.o-minimal-header:not(.-detached)',
  },
  {
    Component: Rating,
    selector: '.a-rating',
  },
  {
    Component: SearchForm,
    selector: '.m-search-form',
  },
  {
    Component: Video,
    selector: '.m-video',
  },
  {
    Component: MenuGroup,
    selector: '.m-menu-group',
  },
  {
    Component: SplitButton,
    selector: '.o-split-button',
  },
  {
    Component: FooterCommerce,
    selector: '.o-footer-commerce',
  },
];

/**
 * a registry of components that should be published to the
 * global object
 *
 * add any components to be published here
 * @TODO should we just publish all of them somehow?
 */
const componentRegistry = {
  Box,
  Dialog,
  Lightbox,
  Popover,
  Notification,
};

/**
 * prohibit any changes after here to ensure API stability
 */
Object.freeze(componentRegistry);

/**
 * make the registry publicly available
 * the guard is there to ensure that this only happens once,
 * because this code may run more than once in e.g. HMR environments
 */
if (!(window as undefined as WindowWithFrontendKit).boschFrontendKit) {
  Object.defineProperty(window, 'boschFrontendKit', {
    get: () => componentRegistry,
  });
  Object.defineProperty(window, 'initBoschFrontendKit', {
    get: () => initBoschFrontendKit,
  });
}

initBoschFrontendKit();

// // dispatch an event when bootstrapping of frontend-kit is done
const event = new CustomEvent('bosch.frontend-kit-done');
document.dispatchEvent(event);

export default components;

function initBoschFrontendKit() {
  components.forEach((component) => {
    Array.from(document.querySelectorAll(component.selector)).forEach(
      (element) => {
        if (!(element as ElementWithComponent).component) {
          // eslint-disable-next-line no-new
          new component.Component(element as ElementWithComponent);
        }
      },
    );
  });
}
