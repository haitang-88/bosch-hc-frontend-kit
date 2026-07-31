/**
 * This file contains every given component
 * It is used as the main file to import components from
 * and to include a component inside another one
 */

// Basics
import { Layout } from './basics/layout/layout';
import { Typography } from './basics/typography/typography';

// Atoms
import { Accordion } from './atoms/accordion/accordion';
import { Details } from './atoms/details/details';
import { Text } from './atoms/text/text';
import { Image } from './atoms/image/image';
import { Link } from './atoms/link/link';
import { Background } from './atoms/background/background';
import { Badge } from './atoms/badge/badge';
import { Button } from './atoms/button/button';
import { RadioButton } from './atoms/radioButton/radioButton';
import { Chip } from './atoms/chip/chip';
import { InputDate } from './atoms/inputDate/inputDate';
import { InputDatetime } from './atoms/inputDatetime/inputDatetime';
import { InputTime } from './atoms/inputTime/inputTime';
import { InputMonth } from './atoms/inputMonth/inputMonth';
import { InputWeek } from './atoms/inputWeek/inputWeek';
import { InputEmail } from './atoms/inputEmail/inputEmail';
import { InputColor } from './atoms/inputColor/inputColor';
import { ActivityIndicator } from './atoms/activityIndicator/activityIndicator';
import { Toggle } from './atoms/toggle/toggle';
import { InputFileUpload } from './atoms/inputFileUpload/inputFileUpload';
import { Legend } from './atoms/legend/legend';
import { List } from './atoms/list/list';
import { Checkbox } from './atoms/checkbox/checkbox';
import { Divider } from './atoms/divider/divider';
import { InputSearch } from './atoms/inputSearch/inputSearch';
import { Tooltip } from './atoms/tooltip/tooltip';
import { MenuItem } from './atoms/menuItem/menuItem';
import { Meter } from './atoms/meter/meter';
import { PageIndicator } from './atoms/pageIndicator/pageIndicator';
import { InputPassword } from './atoms/inputPassword/inputPassword';
import { SearchBar } from './molecules/searchBar/searchBar';
import { Box } from './atoms/box/box';
import { InputTelephone } from './atoms/inputTelephone/inputTelephone';
import { InputText } from './atoms/inputText/inputText';
import { TextArea } from './atoms/textArea/textArea';
import { Icon } from './atoms/icon/icon';
import { AnimatedIcon } from './atoms/animatedIcon/animatedIcon';
import { Notification } from './atoms/notification/notification';
import { Dropdown } from './atoms/dropdown/dropdown';
import { Timeline } from './atoms/timeline/timeline';
import { ProgressIndicator } from './atoms/progressIndicator/progressIndicator';
import { Rating } from './atoms/rating/rating';
import { Slider } from './atoms/slider/slider';
import { Sticker } from './atoms/sticker/sticker';
import { TableCell } from './atoms/tableCell/tableCell';
import { Tile } from './atoms/tile/tile';
import { SelectableTile } from './atoms/selectableTile/selectableTile';
import { InputValueModificator } from './atoms/inputValueModificator/inputValueModificator';
import { SearchSuggestions } from './atoms/searchSuggestions/searchSuggestions';
import { TabNavigation } from './atoms/tabNavigation/tabNavigation';
import { OptionBar } from './atoms/optionBar/optionBar';

// Molecules
import { Audio } from './molecules/audio/audio';
import { TextImage } from './molecules/textImage/textImage';
import { Dialog } from './molecules/dialog/dialog';
import { Popover } from './molecules/popover/popover';
import { FormField } from './molecules/formField/formField';
import { Table } from './molecules/table/table';
import { Lightbox } from './molecules/lightbox/lightbox';
import { MenuGroup } from './molecules/menuGroup/menuGroup';
import { SearchForm } from './molecules/searchForm/searchForm';
import { LanguageSelector } from './molecules/languageSelector/languageSelector';
import { SideNavigation } from './molecules/sideNavigation/sideNavigation';
import { StepIndicator } from './molecules/stepIndicator/stepIndicator';
import { UploadArea } from './molecules/uploadArea/uploadArea';
import { Video } from './molecules/video/video';
import { Breadcrumbs } from './molecules/breadcrumbs/breadcrumbs';
import { DetailsGroup } from './molecules/detailsGroup/detailsGroup';
import { FloatingButtonGroup } from './molecules/floatingButtonGroup/floatingButtonGroup';

// Organisms
import { Form } from './organisms/form/form';
import Header from './organisms/header/header';
import { HeaderCommerce } from './organisms/headerCommerce/headerCommerce';
import { Footer } from './organisms/footer/footer';
import { FooterCommerce } from './organisms/footerCommerce/footerCommerce';
import MinimalHeader from './organisms/minimalHeader/minimalHeader';
import { ContextMenu } from './organisms/contextMenu/contextMenu';
import { SplitButton } from './organisms/splitButton/splitButton';

// Demonstrators
import MultiAccordionDemonstrator from './atoms/accordion/demonstrators/multiAccordion';
import BadgeIconDemonstrator from './atoms/badge/demonstrator/badgeIcon';
import BadgeSmallIconDemonstrator from './atoms/badge/demonstrator/badgeSmallIcon';
import BadgeInlineDemonstrator from './atoms/badge/demonstrator/badgeInline';
import ConfirmPasswordExampleDemonstrator from './atoms/inputPassword/demonstrators/confirmPasswordExample';
import LegendInsideFieldsetDemonstrator from './atoms/legend/demonstrators/legendInsideFieldset';
import InlineLinkDemonstrator from './atoms/link/demonstrators/inlineLink';
import LinkWithLineBreaksDemonstrator from './atoms/link/demonstrators/linkWithLineBreaks';
import LargeLinkDemonstrator from './atoms/link/demonstrators/largeLink';
import DimmedBackgroundDemonstrator from './atoms/background/demonstrators/dimmedBackground';
import ModalBoxDemonstrator from './atoms/box/demonstrators/modalBox';
import DivDemonstrator from './atoms/divider/demonstrators/div';
import AllIconsDemonstrator from './atoms/icon/demonstrators/allIcons';
import UiIconsDemonstrator from './atoms/icon/demonstrators/uiIcons';
import MultilineCheckboxDemonstrator from './atoms/checkbox/demonstrators/multilineCheckbox';
import BannerNotificationDemonstrator from './atoms/notification/demonstrators/bannerNotification';
import ProgressExampleDemonstrator from './atoms/progressIndicator/demonstrators/progressExample';
import MeterWithoutOptimumValueDemonstrator from './atoms/meter/demonstrators/meterWithoutOptimumValueDemonstrator';
import MeterWithOptimumValueDemonstrator from './atoms/meter/demonstrators/meterWithOptimumValueDemonstrator';
import SimpleTabbedContentDemonstrator from './atoms/tabNavigation/demonstrators/simpleTabbedContent';
import HoveringTooltipDemonstrator from './atoms/tooltip/demonstrators/hoveringTooltipDemonstrator';
import TileDemonstrator from './atoms/tile/demonstrators/tileDemonstrator';
import TileInteractiveDemonstrator from './atoms/tile/demonstrators/tileInteractiveDemonstrator';
import AllTilesDemonstrator from './atoms/tile/demonstrators/allTilesDemonstrator';
import AnimatedIconDemonstrator from './atoms/animatedIcon/demonstrators/animatedIconDemonstrator';
import AllAnimatedIconsDemonstrator from './atoms/animatedIcon/demonstrators/allAnimatedIconsDemonstrator';
import AllButtonsDemonstrator from './atoms/button/demonstrators/allButtons';
import AllFloatingButtonGroupsDemonstrator from './molecules/floatingButtonGroup/demonstrators/allFloatingButtonGroups';

import FullWidthAudioDemonstrator from './molecules/audio/demonstrators/fullWidthAudio';

import LayoutWithImageDemonstrator from './basics/layout/demonstrators/layoutWithImage';
import LayoutWithTextImageDemonstrator from './basics/layout/demonstrators/layoutWithTextImage';
import LayoutWithTextImageFullWidthDemonstrator from './basics/layout/demonstrators/layoutWithTextImageFullWidth';

import H1Demonstrator from './basics/typography/demonstrators/h1';
import H2Demonstrator from './basics/typography/demonstrators/h2';
import H3Demonstrator from './basics/typography/demonstrators/h3';
import H4Demonstrator from './basics/typography/demonstrators/h4';
import H5Demonstrator from './basics/typography/demonstrators/h5';
import PDemonstrator from './basics/typography/demonstrators/p';
import LiDemonstrator from './basics/typography/demonstrators/li';
import ButtonDemonstrator from './basics/typography/demonstrators/button';
import FigcaptionDemonstrator from './basics/typography/demonstrators/figcaption';
import LabelDemonstrator from './basics/typography/demonstrators/label';
import SmallDemonstrator from './basics/typography/demonstrators/small';
import SupDemonstrator from './basics/typography/demonstrators/sup';
import SubDemonstrator from './basics/typography/demonstrators/sub';
import BdoRTLDemonstrator from './basics/typography/demonstrators/bdoRTL';
import BdoLTRDemonstrator from './basics/typography/demonstrators/bdoLTR';
import EmDemonstrator from './basics/typography/demonstrators/em';
import IDemonstrator from './basics/typography/demonstrators/i';
import StrongDemonstrator from './basics/typography/demonstrators/strong';
import BDemonstrator from './basics/typography/demonstrators/b';
import DelDemonstrator from './basics/typography/demonstrators/del';
import UDemonstrator from './basics/typography/demonstrators/u';
import QDemonstrator from './basics/typography/demonstrators/q';

import AllDialogDemonstrator from './molecules/dialog/demonstrators/allDialogDemonstrator';
import ModalDialogDemonstrator from './molecules/dialog/demonstrators/modalDialog';
import AttachedPopoverDemonstrator from './molecules/popover/demonstrators/attachedPopover';
import NestedPopoverDemonstrator from './molecules/popover/demonstrators/nestedPopover';
import AttachedPopoverGalleryDemonstrator from './molecules/popover/demonstrators/attachedPopoverGallery';
import NotificationFormFieldDemonstrator from './molecules/formField/demonstrators/notification';
import ModalLightboxDemonstrator from './molecules/lightbox/demonstrators/modalLightbox';
import SearchAutoSuggestionsDemonstrator from './molecules/searchForm/demonstrators/suggestions';
import SideNavigationDemonstrator from './molecules/sideNavigation/demonstrators/sideNavigationDemonstrator';
import StepIndicatorDemonstrator from './molecules/stepIndicator/demonstrators/stepIndicatorDemonstrator';
import StepIndicatorIconsOnlyDemonstrator from './molecules/stepIndicator/demonstrators/stepIndicatorIconsOnlyDemonstrator';
import StepIndicatorSmallDemonstrator from './molecules/stepIndicator/demonstrators/stepIndicatorSmallDemonstrator';
import UploadAreaDemonstrator from './molecules/uploadArea/demonstrators/uploadAreaDemonstrator';

import ContextMenuDemonstrator from './organisms/contextMenu/demonstrators/contextMenu';

import ExampleFormDemonstrator from './organisms/form/demonstrators/exampleForm';
import MinimalHeaderWithContentDemonstrator from './organisms/minimalHeader/demonstrators/minimalHeaderWithContent';

export {
  // BASICS
  Typography,
  Layout,
  // ATOMS
  Accordion,
  Details,
  Text,
  Image,
  Legend,
  Link,
  Background,
  Badge,
  Button,
  RadioButton,
  InputEmail,
  Chip,
  InputColor,
  ActivityIndicator,
  Toggle,
  InputFileUpload,
  List,
  Checkbox,
  Divider,
  InputSearch,
  Tooltip,
  SearchSuggestions,
  MenuItem,
  Meter,
  InputDate,
  InputDatetime,
  InputTime,
  InputMonth,
  InputWeek,
  InputPassword,
  PageIndicator,
  Timeline,
  ProgressIndicator,
  SearchBar,
  Dropdown,
  Video,
  Box,
  InputValueModificator,
  TableCell,
  InputTelephone,
  InputText,
  TextArea,
  Tile,
  SelectableTile,
  Icon,
  AnimatedIcon,
  Rating,
  Slider,
  Sticker,
  TabNavigation,
  OptionBar,
  // ATOM DEMONSTRATORS
  LegendInsideFieldsetDemonstrator,
  SimpleTabbedContentDemonstrator,
  TileDemonstrator,
  TileInteractiveDemonstrator,
  AllTilesDemonstrator,
  AnimatedIconDemonstrator,
  AllAnimatedIconsDemonstrator,
  AllButtonsDemonstrator,
  // MOLECULES
  Audio,
  Popover,
  Lightbox,
  Dialog,
  TextImage,
  FormField,
  Notification,
  Table,
  SearchForm,
  LanguageSelector,
  SideNavigation,
  StepIndicator,
  UploadArea,
  Breadcrumbs,
  DetailsGroup,
  FloatingButtonGroup,
  // MOLECULE DEMONSTRATOR
  FullWidthAudioDemonstrator,
  MenuGroup,
  AllFloatingButtonGroupsDemonstrator,
  // ORGANISMS
  Form,
  Header,
  HeaderCommerce,
  Footer,
  FooterCommerce,
  MinimalHeader,
  ContextMenu,
  SplitButton,
  // DEMONSTRATORS
  LayoutWithImageDemonstrator,
  LayoutWithTextImageDemonstrator,
  LayoutWithTextImageFullWidthDemonstrator,
  MultiAccordionDemonstrator,
  BadgeIconDemonstrator,
  BadgeSmallIconDemonstrator,
  BadgeInlineDemonstrator,
  ConfirmPasswordExampleDemonstrator,
  InlineLinkDemonstrator,
  LinkWithLineBreaksDemonstrator,
  LargeLinkDemonstrator,
  DimmedBackgroundDemonstrator,
  ModalBoxDemonstrator,
  DivDemonstrator,
  H1Demonstrator,
  H2Demonstrator,
  H3Demonstrator,
  H4Demonstrator,
  H5Demonstrator,
  PDemonstrator,
  LiDemonstrator,
  ButtonDemonstrator,
  FigcaptionDemonstrator,
  LabelDemonstrator,
  SmallDemonstrator,
  SupDemonstrator,
  SubDemonstrator,
  BdoRTLDemonstrator,
  BdoLTRDemonstrator,
  EmDemonstrator,
  IDemonstrator,
  StrongDemonstrator,
  BDemonstrator,
  DelDemonstrator,
  UDemonstrator,
  QDemonstrator,
  AllIconsDemonstrator,
  MultilineCheckboxDemonstrator,
  UiIconsDemonstrator,
  ProgressExampleDemonstrator,
  MeterWithoutOptimumValueDemonstrator,
  MeterWithOptimumValueDemonstrator,
  SearchAutoSuggestionsDemonstrator,
  SideNavigationDemonstrator,
  StepIndicatorDemonstrator,
  StepIndicatorIconsOnlyDemonstrator,
  StepIndicatorSmallDemonstrator,
  // MOLECULE DEMONSTRATORS
  AllDialogDemonstrator,
  ModalDialogDemonstrator,
  AttachedPopoverDemonstrator,
  NestedPopoverDemonstrator,
  AttachedPopoverGalleryDemonstrator,
  NotificationFormFieldDemonstrator,
  ModalLightboxDemonstrator,
  HoveringTooltipDemonstrator,
  UploadAreaDemonstrator,
  // ORGANISM DEMONSTRATORS
  ExampleFormDemonstrator,
  BannerNotificationDemonstrator,
  ContextMenuDemonstrator,
  MinimalHeaderWithContentDemonstrator,
};
