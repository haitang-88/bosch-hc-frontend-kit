---
path: "/changelog"
title: "Changelog"
type: "changelog"
level: ""
---

<div class="a-notification -info" role="alert">
  <i class="a-icon ui-ic-alert-info"></i>
  <div
    id="notification-label-id-bar-warning-warning"
    class="a-notification__content"
  >
    Starting from v4.0.0 we indicate breaking changes with "markup" badges. For more information check <a href="/documentation/how-to-upgrade">How to upgrade</a> page.
  </div>
</div>

## 6-0-0 (24.07.2026)

<div class="a-notification -info" role="alert">
  <i class="a-icon ui-ic-alert-info"></i>
  <div
    id="notification-label-id-bar-warning-warning"
    class="a-notification__content"
  >
    The highlight of this release is adding new important components.
    <br />
    There are few breaking changes, if you are using the components listed in Features you have to update HTML markup.
  </div>
</div>

### New components

- <a href="/organisms/headerCommerce/guide">Header commerce</a>
- <a href="/organisms/footerCommerce/guide">Footer commerce</a>

### Features

- <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Interactive Tile: more variants added <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-1021">FROK-1021</a>
- <div class="a-badge -m -emphasis-03" role="status" aria-live="off">markup</div> Sticker: icon support added <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-1040">FROK-1040</a>
- <div class="a-badge -m -emphasis-03" role="status" aria-live="off">markup</div> Lightbox: right-to-left support added <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-954">FROK-954</a>
- <div class="a-badge -m -emphasis-03" role="status" aria-live="off">markup</div> Video: right-to-left support added <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-957">FROK-957</a>
- <div class="a-badge -m -emphasis-03" role="status" aria-live="off">markup</div> Menu item: right-to-left support added <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-941">FROK-941</a>

### Bugfixes

- Menu item: right-to-left CSS issue fixed <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-1041">FROK-1041</a>
- Context menu: section header height causes overflow <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-1038">FROK-1038</a>
- Font fallback configured via tokens package <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-1029">FROK-1029</a>

## 5-1-0 (01.06.2026)

<div class="a-notification -info" role="alert">
  <i class="a-icon ui-ic-alert-info"></i>
  <div
    id="notification-label-id-bar-warning-warning"
    class="a-notification__content"
  >
    There are no breaking changes. If you are already using CSS from v5.0.0 you can safely replace it with v5.1.0.
  </div>
</div>

### Highlights

- Icon Font has been updated to Bosch Icon font v2.18
- RTL support is added to multiple components
- 14 bugs are fixed
- Full changelog is listed in our <a href="https://inside-docupedia.bosch.com/confluence2/spaces/userinterface/pages/455389349/Release+Notes+FROK">Release notes</a> page

## 5-0-0 (29.01.2026)

<div class="a-notification -warning" role="alert">
  <i class="a-icon ui-ic-alert-warning"></i>
  <div
    id="notification-label-id-bar-warning-warning"
    class="a-notification__content"
  >
    <strong>FROK is now Multibrand!</strong>
    <br/>
    In v5.0.0 we added support for several brands from Bosch family.
    Explore it by selecting Theme from the top menu of this page, next to the logo.
  </div>
</div>

### Multibrand features

<div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> CSS classes renaming: 
<br />
 In order to provide multibrand setup we had to change our approach to color CSS variables. Each brand features different colors so we no longer provide explicit color names, such as "purple" or "turquoise". We have "-emphasis-03" or "-emphasis-04" instead.
<br />
<br />
<div class="a-badge -m -emphasis-03" role="status" aria-live="off">markup</div> The following components have markup changes, mainly css classes renamed:
<br />
<br />
<ul>
  <li><a href="/molecules/sideNavigation/guide">Side Navigation</a></li>
  <li><a href="/atoms/accordion/guide">Accordion</a></li>
  <li><a href="/atoms/tile/guide">Tile</a></li>
  <li><a href="/atoms/selectableTile/guide">Selectable tile</a></li>
  <li><a href="/molecules/menuGroup/guide">Menu Group</a></li>
  <li><a href="/atoms/badge/guide">Badge</a></li>
  <li><a href="/atoms/sticker/guide">Sticker</a></li>
</ul>
<br/>
<div>
All the features included in this release are related to Multibrand setup. For your information full changelog is published <a href="https://inside-docupedia.bosch.com/confluence2/spaces/userinterface/pages/909311221/Release+5.0.0">here</a>. 
</div>

### Fix
- Link: look-alike secondary button height mismatch <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-903">FROK-903</a>
- Link: icon not placed correctly in RTL mode <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-893">FROK-893</a>
- Chip: incorrect display in RTL mode <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-897">FROK-897</a>
- Checkbox/Radio: not affected RTL mode <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-896">FROK-896</a>


## 4-2-0 (17.11.2025)

<div class="a-notification -warning" role="alert">
  <i class="a-icon ui-ic-alert-warning"></i>
  <div
    id="notification-label-id-bar-warning-warning"
    class="a-notification__content"
  >
    <strong>Classic button variants are deprecated.</strong>
    <br/>
    In v4.2.0 we added many new variants of buttons. There are no breaking changes. We are in transition phase, therefore classic variants are deprecated.
    Please read the <a href="/atoms/button/guide">documentation</a>.
  </div>
</div>

### Buttons rework
- <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Button: new color variants <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-809">FROK-810</a>
- <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Button: sizing <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-809">FROK-809</a>
- <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Split/dropdown button <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-812">FROK-812</a>
- <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Floating button <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-811">FROK-811</a>
### Fix
- Invalid CSS Syntax - Pseudo-elements can`t be followed by selectors [FROK-883](https://rb-tracker.bosch.com/tracker03/browse/FROK-883)
- Option Bar: component does not support active disabled state [FROK-870](https://rb-tracker.bosch.com/tracker03/browse/FROK-870)
- Language Selector: broken dimension [FROK-866](https://rb-tracker.bosch.com/tracker03/browse/FROK-866)
- CSS import failed in Vite 7+ projects [FROK-864](https://rb-tracker.bosch.com/tracker03/browse/FROK-864)

### Features
- Icon Font updated to 2.17 [FROK-844](https://rb-tracker.bosch.com/tracker03/browse/FROK-844)

## 4-1-2 (18.09.2025)
### Fix
- <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Button: in the audio and video module some buttons got a background color change on hover, this should not be the case <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-830">FROK-830</a>
- <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Dropdown: margins/spacings within the dynamic dropdown do not look correct <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-832">FROK-832</a>
- <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Checkbox: label with inline link is missing space <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-841">FROK-841</a>

### Documentation
- [How to upgrade](/documentation/how-to-upgrade) page added
- All documentation is updated

## 4-1-1 (27.06.2025)
### Fix
- Color Scheme Definition: Emphasis Gray nested wrong [FROK-827](https://rb-tracker.bosch.com/tracker03/browse/FROK-827)

## 4-1-0 (19.06.2025)
### Fix
- <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Textarea: scroll area label clipping when focused <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-814">FROK-814</a>
- <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Accordion: Icon size in small variation <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-816">FROK-816</a>
- <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Slider: colors updated, minor fix for Firefox applied <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-750">FROK-750</a>

### Features
- <div class="a-badge -m -emphasis-03" role="status" aria-live="off">markup</div> <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Optionbar and rating: handling options with icons <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-800">FROK-800</a>

## 4-0-1 (14.05.2025)
### Fix

- Floating background removed from demos [FROK-805](https://rb-tracker.bosch.com/tracker03/browse/FROK-805)
- Add export fields for "frontend-kit.*.css fiels [FROK-807](https://rb-tracker.bosch.com/tracker03/browse/FROK-807)


## 4-0-0 (09.05.2025)
### Features

- FROK now uses color tokens [FROK-755](https://rb-tracker.bosch.com/tracker03/browse/FROK-755)
- Script created to handle the new color system JSON import [FROK-700](https://rb-tracker.bosch.com/tracker03/browse/FROK-700)
- New migration script is available [FROK-699](https://rb-tracker.bosch.com/tracker03/browse/FROK-699)
- FROK should use BDDS-Color-Scheme-Creator output [FROK-656](https://rb-tracker.bosch.com/tracker03/browse/FROK-656)
- Icon font update [FROK-783](https://rb-tracker.bosch.com/tracker03/browse/FROK-783)

### Refactor

- <div class="a-badge -m -emphasis-03" role="status" aria-live="off">markup</div> <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Floating background removed - affected components: dialog, menuGroup, lightbox, tile <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-794">FROK-794</a>
- <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Integrated button styles <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-782">FROK-782</a>
- Font styles separated from foundations <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-792">FROK-792</a>
- Split CSS export [FROK-657](https://rb-tracker.bosch.com/tracker03/browse/FROK-657)

### Fix

- <div class="a-badge -m -emphasis-03" role="status" aria-live="off">markup</div> Accessibility issues in Accordion component <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-791">FROK-791</a>
- <div class="a-badge -m -emphasis-03" role="status" aria-live="off">markup</div> <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Searchform "All Results" link is not part of the search suggestion results list <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-742">FROK-742</a>
- <div class="a-badge -m -emphasis-04" role="status" aria-live="off">style</div> Dialog component should not style native element <a href="https://rb-tracker.bosch.com/tracker03/browse/FROK-801">FROK-801</a>

## 3-10-0 (03.12.2024)
### Features

- New Components: Input type "date" [#FROK-690](https://rb-tracker.bosch.com/tracker03/browse/FROK-690)

### Refactor

-  UX of side menu - what is missing [#FROK-678](https://rb-tracker.bosch.com/tracker03/browse/FROK-678)
-  Badge sizes update [#FROK-696](https://rb-tracker.bosch.com/tracker03/browse/FROK-696)
-  Typography update [#FROK-705](https://rb-tracker.bosch.com/tracker03/browse/FROK-705)
-  SASS nesting adjustments [#FROK-716](https://rb-tracker.bosch.com/tracker03/browse/FROK-716)
-  Accordion - it is possible to nest accordions [#FROK-731](https://rb-tracker.bosch.com/tracker03/browse/FROK-731)
-  Details Component Ehancement [#FROK-738](https://rb-tracker.bosch.com/tracker03/browse/FROK-738)
-  TabNavigation - A11Y Findings [#FROK-743](https://rb-tracker.bosch.com/tracker03/browse/FROK-743)
-  Update: Icon Font 2.15 [#FROK-747](https://rb-tracker.bosch.com/tracker03/browse/FROK-747)
-  Dark Mode via media-query - prefers-color-scheme [#FROK-651](https://rb-tracker.bosch.com/tracker03/browse/FROK-651)

### Fix
- Menu item with class a-menu-item__group is always extended and can not be collapsed [#FROK-721](https://rb-tracker.bosch.com/tracker03/browse/FROK-721)
- Input with buttons - interaction inconsistency [#FROK-722](https://rb-tracker.bosch.com/tracker03/browse/FROK-722)
- Link - Icon is not positioned correctly [#FROK-729](https://rb-tracker.bosch.com/tracker03/browse/FROK-729)
- Header - working without menu trigger [#FROK-730](https://rb-tracker.bosch.com/tracker03/browse/FROK-721)

## 3-9-1 (23.09.2024)
### Refactor

- Added missing link to preview version 3.8.0

## 3-9-0 (01.08.2024)
### Features

- Tab Navigation | Arrow symbols (buttons) right/left are missing [#FROK-612](https://rb-tracker.bosch.com/tracker03/browse/FROK-612)
- Menu Group Components [#FROK-674](https://rb-tracker.bosch.com/tracker03/browse/FROK-674)
- New Components: Upload Area [#FROK-701](https://rb-tracker.bosch.com/tracker03/browse/FROK-701)

### Refactor

- Update Icon Font 2.14 [#FROK-712](https://rb-tracker.bosch.com/tracker03/browse/FROK-712)
- Refactor - "title" Attribute of icons [#FROK-703](https://rb-tracker.bosch.com/tracker03/browse/FROK-703)
- Visual regression test - increase performance [#FROK-668](https://rb-tracker.bosch.com/tracker03/browse/FROK-668)

### Fix
- MenuGroup - A11Y findings [#FROK-710](https://rb-tracker.bosch.com/tracker03/browse/FROK-710)
- Bug: Search from "X" [#FROK-691](https://rb-tracker.bosch.com/tracker03/browse/FROK-691)
- [Side-navigation] Sidebar text is centered (FROK 3.7.0) on Firefox 115.11.0esr [#FROK-695](https://rb-tracker.bosch.com/tracker03/browse/FROK-695)
- Integrated text field: Dimensions not like defined [#FROK-702](https://rb-tracker.bosch.com/tracker03/browse/FROK-702)
- Checkbox element appears outside of table cell [#FROK-680](https://rb-tracker.bosch.com/tracker03/browse/FROK-680)
- Sub-menus not visible in minimal header [#FROK-709](https://rb-tracker.bosch.com/tracker03/browse/FROK-709)
- Progess Indicator spacing [#FROK-711](https://rb-tracker.bosch.com/tracker03/browse/FROK-711)

## 3-8-0 (27.05.2024)
### Features

- Icon Font 2.13 - Update [#FROK-671](https://rb-tracker.bosch.com/tracker03/browse/FROK-671)

### Fix
- FROK UI breaks because of additional hidden "input" element in checkbox [#FROK-655](https://rb-tracker.bosch.com/tracker03/browse/FROK-655)
- Wrong behaviour for buttons inside input fields [#FROK-687](https://rb-tracker.bosch.com/tracker03/browse/FROK-687)

## 3-7-0 (06.05.2024)
### Features

- Custom tab focus state [#FROK-477](https://rb-tracker.bosch.com/tracker03/browse/FROK-477)
- HTML tag caption (for table) [#FROK-615](https://rb-tracker.bosch.com/tracker03/browse/FROK-615)
- Link - "look-alike-integrated button" variant is missing [#FROK-632](https://rb-tracker.bosch.com/tracker03/browse/FROK-632)
- Breadcrumb [#FROK-72](https://rb-tracker.bosch.com/tracker03/browse/FROK-72)
- Add Input value modificator with validation and notification [#FROK-126](https://rb-tracker.bosch.com/tracker03/browse/FROK-126)
- Add Input value modificator with validation and notification [#FROK-126](https://rb-tracker.bosch.com/tracker03/browse/FROK-126)
- Add Input value modificator with validation and notification [#FROK-126](https://rb-tracker.bosch.com/tracker03/browse/FROK-126)
- Add Input value modificator with validation and notification [#FROK-126](https://rb-tracker.bosch.com/tracker03/browse/FROK-126)

### Refactor

- Menu item (standard) [#FROK-641](https://rb-tracker.bosch.com/tracker03/browse/FROK-641)
- Menu item (standard) - Update components that use it [#FROK-642](https://rb-tracker.bosch.com/tracker03/browse/FROK-642)
- Footer social media icons update [#FROK-667](https://rb-tracker.bosch.com/tracker03/browse/FROK-667)
- Text field update: Typing state & Integrated text field [#FROK-636](https://rb-tracker.bosch.com/tracker03/browse/FROK-636)
- Current Color System Update (Contrast BG / Dark Mode) [#FROK-648](https://rb-tracker.bosch.com/tracker03/browse/FROK-648)

### Fix
- Minimal Header - Side navigation visually not correct [#FROK-677](https://rb-tracker.bosch.com/tracker03/browse/FROK-677)
- Input Fields - disabled state is not always correct [#FROK-633](https://rb-tracker.bosch.com/tracker03/browse/FROK-633)
- Button - wrong padding [#FROK-629](https://rb-tracker.bosch.com/tracker03/browse/FROK-629)
- fix scaling issue after rem() removal [#FROK-646](https://rb-tracker.bosch.com/tracker03/browse/FROK-646)
- FROK website uses old Cookie Manager (v2) [#FROK-644](https://rb-tracker.bosch.com/tracker03/browse/FROK-644)
- Chip - Scaling of image not working [#FROK-654](https://rb-tracker.bosch.com/tracker03/browse/FROK-654)
- Fix Links on FROK Start Page [#FROK-658](https://rb-tracker.bosch.com/tracker03/browse/FROK-658)
- No event is raised if values are changed by value modificator buttons. [#FROK-581](https://rb-tracker.bosch.com/tracker03/browse/FROK-581)
- Details tag: wrong behaviour [#FROK-618](https://rb-tracker.bosch.com/tracker03/browse/FROK-618)
- Nested Popover - wrong arrow position [#FROK-650](https://rb-tracker.bosch.com/tracker03/browse/FROK-650)
- Header - A11Y findings [#FROK-659](https://rb-tracker.bosch.com/tracker03/browse/FROK-659)
- Bade color update [#FROK-662](https://rb-tracker.bosch.com/tracker03/browse/FROK-662)
- Use of scss function `rem` without interpolation [#FROK-355](https://rb-tracker.bosch.com/tracker03/browse/FROK-355)

## 3-6-0 (11.01.2024)
### Features

- Icon font 2.12.0 update [#FROK-617](https://rb-tracker.bosch.com/tracker03/browse/FROK-617)
- HTML Tag fieldset styling [#FROK-614](https://rb-tracker.bosch.com/tracker03/browse/FROK-614)
- HTML tags optgroup and select [#FROK-616](https://rb-tracker.bosch.com/tracker03/browse/FROK-616)

### Refactor

- Popover rework [#FROK-517](https://rb-tracker.bosch.com/tracker03/browse/FROK-517)
- Chip – Icon and Label [#FROK-603](https://rb-tracker.bosch.com/tracker03/browse/FROK-603)
- Progress indicator - Disabled state [#FROK-604](https://rb-tracker.bosch.com/tracker03/browse/FROK-604)

### Fix
- BUG: Text field tab-focus problem [#FROK-606](https://rb-tracker.bosch.com/tracker03/browse/FROK-606)
- Search Field - Reset Button is wrong [#FROK-593](https://rb-tracker.bosch.com/tracker03/browse/FROK-593)
- Accessibility issues on the <audio> html tag. [#FROK-595](https://rb-tracker.bosch.com/tracker03/browse/FROK-595)
- Rework of <audio> and <video> elements after slider fix [#FROK-601](https://rb-tracker.bosch.com/tracker03/browse/FROK-601)

## 3-5-0 (30.11.2023)
### Features

- Animated icons [#FROK-509](https://rb-tracker.bosch.com/tracker03/browse/FROK-509)
- Link accessibility-docupedia page [#FROK-602](https://rb-tracker.bosch.com/tracker03/browse/FROK-602)
- Slider vertical [#FROK-555](https://rb-tracker.bosch.com/tracker03/browse/FROK-555)
- HTML tags: "meter" [#FROK-567](https://rb-tracker.bosch.com/tracker03/browse/FROK-567)
- HTML tag: "details" [#FROK-569](https://rb-tracker.bosch.com/tracker03/browse/FROK-569)

### Refactor

- Color System Update [#FROK-572](https://rb-tracker.bosch.com/tracker03/browse/FROK-572)
- Dropdown change icon [#FROK-554](https://rb-tracker.bosch.com/tracker03/browse/FROK-554)

### Fix

- Toggle design should not be made out of label [#FROK-576](https://rb-tracker.bosch.com/tracker03/browse/FROK-576)
- Gatsby console warnings on Slider component [#FROK-583](https://rb-tracker.bosch.com/tracker03/browse/FROK-583)
- File upload disabled status bug [#FROK-599](https://rb-tracker.bosch.com/tracker03/browse/FROK-599)
- Slider - Fix the visual regression tests [#FROK-545](https://rb-tracker.bosch.com/tracker03/browse/FROK-545)
- Dialog - Fix the visual regression tests [#FROK-546](https://rb-tracker.bosch.com/tracker03/browse/FROK-546)
- Video - Fix the visual regression tests [#FROK-547](https://rb-tracker.bosch.com/tracker03/browse/FROK-547)
- Form Field - Fix the visual regression tests [#FROK-548](https://rb-tracker.bosch.com/tracker03/browse/FROK-548)
- Lightbox - Fix the visual regression tests [#FROK-549](https://rb-tracker.bosch.com/tracker03/browse/FROK-549)
- "Uncaught TypeError: n.searchForm is null" if header is used without serach functionality (v3.2.0) [#FROK-580](https://rb-tracker.bosch.com/tracker03/browse/FROK-580)
- Accessibility issues on the button element [#FROK-594](https://rb-tracker.bosch.com/tracker03/browse/FROK-594)
- Accessibility issues on the slider element [#FROK-596](https://rb-tracker.bosch.com/tracker03/browse/FROK-596)
- A11Y - Dialog bug [#FROK-600](https://rb-tracker.bosch.com/tracker03/browse/FROK-600)

## 3-4-0 (27.07.2023)
### Refactor

- Update Bosch Icon fonts to version 2.11.0 [#FROK-577](https://rb-tracker.bosch.com/tracker03/browse/FROK-577)

## 3-3-0 (19.07.2023)

### Features

- Form input: Native file upload element [#FROK-562](https://rb-tracker.bosch.com/tracker03/browse/FROK-562)
- Form input: Legend for fieldsets [#FROK-563](https://rb-tracker.bosch.com/tracker03/browse/FROK-563)
- Form input: Color input [#FROK-564](https://rb-tracker.bosch.com/tracker03/browse/FROK-564)

### Refactor

- Form input: Read only attribute for text inputs [#FROK-478](https://rb-tracker.bosch.com/tracker03/browse/FROK-478)
- Refactor FROK dialog component to use native <dialog> HTML element [#FROK-499](https://rb-tracker.bosch.com/tracker03/browse/FROK-499)
- Accordion - arrow down button on secondary / constrast background [#FROK-553](https://rb-tracker.bosch.com/tracker03/browse/FROK-553)
- Form input: Simple standard inputs types [#FROK-561](https://rb-tracker.bosch.com/tracker03/browse/FROK-561)

### Fix

- BUG Header (keyboard navigation) [#FROK-543](https://rb-tracker.bosch.com/tracker03/browse/FROK-543)
- Footer Spacing [#FROK-481](https://rb-tracker.bosch.com/tracker03/browse/FROK-481)
- Unset Dark mode for the scroll hints (gradients) in the TabNavigation [#FROK-573](https://rb-tracker.bosch.com/tracker03/browse/FROK-573)

- 
## 3-2-0 (19.04.2023)

### Refactor

- Integrate the new Jira support process to FROK [#FROK-534](https://rb-tracker.bosch.com/tracker03/browse/FROK-534) 
- Update Icon Font 2.10 [#FROK-539](https://rb-tracker.bosch.com/tracker03/browse/FROK-539)

### Fix

- Text fields: placeholder text colors [#FROK-501](https://rb-tracker.bosch.com/tracker03/browse/FROK-501)
- Header links underlined [#FROK-538](https://rb-tracker.bosch.com/tracker03/browse/FROK-538)
- Tab Navigation Topics [#FROK-450](https://rb-tracker.bosch.com/tracker03/browse/FROK-450)  
- Dropdown label alignment (Firefox) [#FROK-508](https://rb-tracker.bosch.com/tracker03/browse/FROK-508)
- Page indicator numbered: Interaction colors wrong [#FROK-465](https://rb-tracker.bosch.com/tracker03/browse/FROK-465)
- Toggle/Switch focus [#FROK-537](https://rb-tracker.bosch.com/tracker03/browse/FROK-537)
- Minimal header overlapping issues [#FROK-403](https://rb-tracker.bosch.com/tracker03/browse/FROK-403)
- Overlapping burger icons when using minimal header without contrast [#FROK-473](https://rb-tracker.bosch.com/tracker03/browse/FROK-473)
- Warning: critical dependency [#FROK-475](https://rb-tracker.bosch.com/tracker03/browse/FROK-475)
- e-container - optical "error" [#FROK-498](https://rb-tracker.bosch.com/tracker03/browse/FROK-498)

## 3-1-0 (19.12.2022)

### Refactor

- license change from ISC to "Bosch Property" on demand of Bosch Legal Department. [more](https://frok.ui.bosch.tech/documentation/open-source), [#FROK-476](https://rb-tracker.bosch.com/tracker03/browse/FROK-476)
- update of Bosch Icon Fonts to version 2.9.0 [#FROK-495](https://rb-tracker.bosch.com/tracker03/browse/FROK-495)
- update of UI Icon Fonts to version 2.1.0 [#FROK-479](https://rb-tracker.bosch.com/tracker03/browse/FROK-479)
- webpack integration [#FROK-483](https://rb-tracker.bosch.com/tracker03/browse/FROK-483)

### Fix

- Chip close icon not clickable [#FROK-270](https://rb-tracker.bosch.com/tracker03/browse/FROK-270)
- Tab navigation Select indicator and bottom line color schemes  [#FROK-445](https://rb-tracker.bosch.com/tracker03/browse/FROK-445)

## 3-0-0 (31.08.2022)

### Refactor

- Update color schemes [#FROK-457](https://rb-tracker.bosch.com/tracker03/browse/FROK-457) 
- Activity Indicator (accessability audit) [#FROK-411](https://rb-tracker.bosch.com/tracker03/browse/FROK-411) 
- Badge (accessability audit) [#FROK-412](https://rb-tracker.bosch.com/tracker03/browse/FROK-412) 
- Button (accessability audit) [#FROK-413](https://rb-tracker.bosch.com/tracker03/browse/FROK-413) 
- Chip (accessability audit) [#FROK-414](https://rb-tracker.bosch.com/tracker03/browse/FROK-414) 
- Link (accessability audit) [#FROK-415](https://rb-tracker.bosch.com/tracker03/browse/FROK-415) 
- Rating (accessability audit) [#FROK-416](https://rb-tracker.bosch.com/tracker03/browse/FROK-416) 
- Switch (accessability audit) [#FROK-417](https://rb-tracker.bosch.com/tracker03/browse/FROK-417) 
- Text field (accessability audit) [#FROK-418](https://rb-tracker.bosch.com/tracker03/browse/FROK-418) 
- Tooltip (accessability audit) [#FROK-419](https://rb-tracker.bosch.com/tracker03/browse/FROK-419) 
- Value modifier [#FROK-420](https://rb-tracker.bosch.com/tracker03/browse/FROK-420) 
- Menu item (accessability audit) [#FROK-421](https://rb-tracker.bosch.com/tracker03/browse/FROK-421) 
- Text area (accessability audit) [#FROK-422](https://rb-tracker.bosch.com/tracker03/browse/FROK-422) 
- Search form (accessability audit) [#FROK-423](https://rb-tracker.bosch.com/tracker03/browse/FROK-423) 
- Language selector (accessability audit) [#FROK-424](https://rb-tracker.bosch.com/tracker03/browse/FROK-424) 
- Accordion (accessability audit) [#FROK-425](https://rb-tracker.bosch.com/tracker03/browse/FROK-425) 
- Context Menu (accessability audit) [#FROK-426](https://rb-tracker.bosch.com/tracker03/browse/FROK-426) 
- Dialog (accessability audit) [#FROK-427](https://rb-tracker.bosch.com/tracker03/browse/FROK-427) 
- Lightbox (accessability audit) [#FROK-428](https://rb-tracker.bosch.com/tracker03/browse/FROK-428) 
- Notification (accessability audit) [#FROK-429](https://rb-tracker.bosch.com/tracker03/browse/FROK-429) 
- Option Bar (accessability audit) [#FROK-430](https://rb-tracker.bosch.com/tracker03/browse/FROK-430) 
- Page Indicator (accessability audit) [#FROK-431](https://rb-tracker.bosch.com/tracker03/browse/FROK-431) 
- Popover (accessability audit) [#FROK-432](https://rb-tracker.bosch.com/tracker03/browse/FROK-432) 
- Progress Indicator (accesability audit) [#FROK-433](https://rb-tracker.bosch.com/tracker03/browse/FROK-433) 
- Slider (accessability audit) [#FROK-434](https://rb-tracker.bosch.com/tracker03/browse/FROK-434) 
- Step Indicator (accessability audit) [#FROK-435](https://rb-tracker.bosch.com/tracker03/browse/FROK-435) 
- Selectable Tile (accessability audit) [#FROK-436](https://rb-tracker.bosch.com/tracker03/browse/FROK-436) 
- Table (accessability audit) [#FROK-437](https://rb-tracker.bosch.com/tracker03/browse/FROK-437) 
- Tab Navigation (accessability audit) [#FROK-438](https://rb-tracker.bosch.com/tracker03/browse/FROK-438) 
- Box (accessability audit) [#FROK-439](https://rb-tracker.bosch.com/tracker03/browse/FROK-439) 
- Side navigation (accessability audit) [#FROK-440](https://rb-tracker.bosch.com/tracker03/browse/FROK-440) 
- update of Bosch Icon Fonts to version 2.8.0 [#FROK-362](https://rb-tracker.bosch.com/tracker03/browse/FROK-362)
- update of UI Icon Fonts to version 2.0.0 [#FROK-364](https://rb-tracker.bosch.com/tracker03/browse/FROK-364)
- update progress indicator [#FROK-366](https://rb-tracker.bosch.com/tracker03/browse/FROK-366)
- create integrated primary link component [#FROK-369](https://rb-tracker.bosch.com/tracker03/browse/FROK-369)
- update technical link [#FROK-384](https://rb-tracker.bosch.com/tracker03/browse/FROK-384)
- added Side Navigation menu animation [#FROK-409](https://rb-tracker.bosch.com/tracker03/browse/FROK-409)

### Fix

- Fixed Footer component [#FROK-382](https://rb-tracker.bosch.com/tracker03/browse/FROK-382)
- Fixed z-index in ContextMenu component [#FROK-328](https://rb-tracker.bosch.com/tracker03/browse/FROK-328)
- Fixed Checkbox background in ContextMenu [#FROK-330](https://rb-tracker.bosch.com/tracker03/browse/FROK-330)
- Fixed Floating Background with(out) shadow [#FROK-333](https://rb-tracker.bosch.com/tracker03/browse/FROK-333)
- Fixed Menu flickering on group exapand [#FROK-356](https://rb-tracker.bosch.com/tracker03/browse/FROK-356)
- Fixed Hamburger icon not centered in SideMenu [#FROK-357](https://rb-tracker.bosch.com/tracker03/browse/FROK-357)
- Fixed Menu flickering on group exapand [#FROK-356](https://rb-tracker.bosch.com/tracker03/browse/FROK-356)
- Fixed Buttons with fixed width and icon [#FROK-372](https://rb-tracker.bosch.com/tracker03/browse/FROK-372)
- Fixed wrong inner margins in Tile [#FROK-402](https://rb-tracker.bosch.com/tracker03/browse/FROK-402)
- Fixed LightBox ui elements missing [#FROK-451](https://rb-tracker.bosch.com/tracker03/browse/FROK-451)
- Fixed TableCell light height issue [#FROK-452](https://rb-tracker.bosch.com/tracker03/browse/FROK-452)
- Fixed Tile hover color wrong on contrast bg [#FROK-453](https://rb-tracker.bosch.com/tracker03/browse/FROK-453)
- Fixed Primary link in a table column has wrong alignment [#FROK-304](https://rb-tracker.bosch.com/tracker03/browse/FROK-304)
- Fixed wrong max-widht in layout container [#FROK-365](https://rb-tracker.bosch.com/tracker03/browse/FROK-365)
- Fixed Accordion [#FROK-387](https://rb-tracker.bosch.com/tracker03/browse/FROK-387)
- Fixed wrong color scheme in stickers [#FROK-388](https://rb-tracker.bosch.com/tracker03/browse/FROK-388)
- Fixed Radio button with outline missing and label in two lines [#FROK-399](https://rb-tracker.bosch.com/tracker03/browse/FROK-399)
- Fixed Accordion omponent is not focusable [#FROK-405](https://rb-tracker.bosch.com/tracker03/browse/FROK-405)
  
## 2-2-0 (15.03.2022)

### Features

- add Star Rating component [#FROK-349](https://rb-tracker.bosch.com/tracker03/browse/FROK-349)
- add Sticker component [#FROK-351](https://rb-tracker.bosch.com/tracker03/browse/FROK-351)
- add Accordion component [#FROK-352](https://rb-tracker.bosch.com/tracker03/browse/FROK-352)
- add Selectable Tile component [#FROK-353](https://rb-tracker.bosch.com/tracker03/browse/FROK-353)

### Refactor

- update of Bosch Icon Fonts to version 2.7.0 [#FROK-362](https://rb-tracker.bosch.com/tracker03/browse/FROK-362)
- update of UI Icon Fonts to version 1.4.0 [#FROK-380](https://rb-tracker.bosch.com/tracker03/browse/FROK-380)

## 2-1-2 (17.02.2022)

### Features

- add Lighthouse test [#FROK-363](https://rb-tracker.bosch.com/tracker03/browse/FROK-363)

### Fix

- Fixed horizontal scrollbar in overview pages [#FROK-359](https://rb-tracker.bosch.com/tracker03/browse/FROK-359)

## 2-1-1 (12.01.2022)

### Refactor

- Update docu page about access to the distribution package [#FROK-354](https://rb-tracker.bosch.com/tracker03/browse/FROK-354)

## 2-1-0 (09.11.2021)

### Features

- add Tile component compliant with DDS [#FROK-338](https://rb-tracker.bosch.com/tracker03/browse/FROK-338)
- migration from npm to yarn [#FROK-344](https://rb-tracker.bosch.com/tracker03/browse/FROK-344)

### Refactor

- Slider: changes aligned with DDS [#FROK-287](https://rb-tracker.bosch.com/tracker03/browse/FROK-287)
- upgrade of npm dependencies and fixed vurnabilities [#FROK-345](https://rb-tracker.bosch.com/tracker03/browse/FROK-345)

### Fix

- Popover: fixed problem with positioning [#FROK-133](https://rb-tracker.bosch.com/tracker03/browse/FROK-133) 
- check and fix all components regarding accesibility [#FROK-347](https://rb-tracker.bosch.com/tracker03/browse/FROK-347)

## 2-0-1 (11.10.2021)

### Fix

- remove Gatsby package from distribution dependency list [#FROK-343](https://rb-tracker.bosch.com/tracker03/browse/FROK-343)

## 2-0-0 (04.10.2021)

### Features

- add dark mode of all components [#FROK-271](https://rb-tracker.bosch.com/tracker03/browse/FROK-271)
- adjustment of color schemes [#FROK-303](https://rb-tracker.bosch.com/tracker03/browse/FROK-303)
- migration script to ease process of migration to new color schemes [#FROK-316](https://rb-tracker.bosch.com/tracker03/browse/FROK-316)
- change text and icon color in Notifications to black, remove validation states in Core components, add icons to all Notifications types
  [#FROK-228](https://rb-tracker.bosch.com/tracker03/browse/FROK-228)
- adapt FROK platform styling towards developed components [#FROK-206](https://rb-tracker.bosch.com/tracker03/browse/FROK-206)

### Refactor

- header: design aligned with a new design of bosch.com [#FROK-327](https://rb-tracker.bosch.com/tracker03/browse/FROK-327) 

### Fix

- dowpdown: Label/Option alignment (Firefox) [#FROK-306](https://rb-tracker.bosch.com/tracker03/browse/FROK-306)
- dialog: add z-index [#FROK-323](https://rb-tracker.bosch.com/tracker03/browse/FROK-323)
  
## 1-3-1 (02.08.2021)

### Fix

- password field: unwanted icon appears in MS Edge [#FROK-326](https://rb-tracker.bosch.com/tracker03/browse/FROK-326)
- table style is broken without gatsby [#FROK-323](https://rb-tracker.bosch.com/tracker03/browse/FROK-323)

## 1-3-0 (06.07.2021)

### Features

- added Header extension towards software / minimal header [#FROK-203](https://rb-tracker.bosch.com/tracker03/browse/FROK-203)
- added Footer extension towards software / minimal footer [#FROK-204](https://rb-tracker.bosch.com/tracker03/browse/FROK-204)
- added Side Navigation component [#FROK-205](https://rb-tracker.bosch.com/tracker03/browse/FROK-205)
- added Step Indicator  component [#FROK-182](https://rb-tracker.bosch.com/tracker03/browse/FROK-182)
- added Badge component [#FROK-198](https://rb-tracker.bosch.com/tracker03/browse/FROK-198)
- added Context Menu component [#FROK-199](https://rb-tracker.bosch.com/tracker03/browse/FROK-199)
- added Main Container component [#FROK-215](https://rb-tracker.bosch.com/tracker03/browse/FROK-215)

### Refactor

- Slider extenstion towards label [#FROK-181](https://rb-tracker.bosch.com/tracker03/browse/FROK-181)
- Table design adaption towards software [#FROK-201](https://rb-tracker.bosch.com/tracker03/browse/FROK-201)
- Notification update [#FROK-174](https://rb-tracker.bosch.com/tracker03/browse/FROK-174)
- Added close button to the search field component [#FROK-169](https://rb-tracker.bosch.com/tracker03/browse/FROK-169)
- Change slider tooltip to component tooltip [#FROK-103](https://rb-tracker.bosch.com/tracker03/browse/FROK-103)
- Added additional, optional button to dialog component [#FROK-147](https://rb-tracker.bosch.com/tracker03/browse/FROK-147)
- Clean up icon usage: checkbox, dropdown, icon, notification small (deleted), page indicator, textArea, textField,
        valueModificator, dialog, formField (all variants), header, footer [#FROK-189](https://rb-tracker.bosch.com/tracker03/browse/FROK-189)

### Fix

- fixed Notification: icon overlays scrollbar [#FROK-297](https://rb-tracker.bosch.com/tracker03/browse/FROK-297)
- fixed Textfield: password visible button toggle [#FROK-305](https://rb-tracker.bosch.com/tracker03/browse/FROK-305)

## 1-2-0 (05.05.2021)

### Fix

- added label to Language Selector component [#FROK-269](https://rb-tracker.bosch.com/tracker03/browse/FROK-269)
- reduced width of Dialog component [#FROK-282](https://rb-tracker.bosch.com/tracker03/browse/FROK-282)
- text overlays the label in TextArea component [#FROK-176](https://rb-tracker.bosch.com/tracker03/browse/FROK-176)
- TableCell default background overlays underlying layers [#FROK-259](https://rb-tracker.bosch.com/tracker03/browse/FROK-259)
- Checkbox breaks with line break in label [#FROK-267](https://rb-tracker.bosch.com/tracker03/browse/FROK-267)
- Dialogs do not work in WebComponents with shadow dom enabled [#FROK-273](https://rb-tracker.bosch.com/tracker03/browse/FROK-273)
- Scrollbar in Dialogs appears only when needed [#FROK-274](https://rb-tracker.bosch.com/tracker03/browse/FROK-274)
- Checkbox overlap of notification icon [#FROK-277](https://rb-tracker.bosch.com/tracker03/browse/FROK-277)
- Removed border around Navigation on hover [#FROK-279](https://rb-tracker.bosch.com/tracker03/browse/FROK-279)
- Text field with longer label gets scrollbar [#FROK-281](https://rb-tracker.bosch.com/tracker03/browse/FROK-281)
- Link-Arrow does not changes the color on hover/pressed. [FROK-283](https://rb-tracker.bosch.com/tracker03/browse/FROK-283)
- Fixed Notification Banner [FROK-284](https://rb-tracker.bosch.com/tracker03/browse/FROK-284)
- Option bar item (with Icon and without Label) got a wrong padding. [#FROK-285](https://rb-tracker.bosch.com/tracker03/browse/FROK-285)
- Wrong color scheme for progress indicator background [#FROK-286](https://rb-tracker.bosch.com/tracker03/browse/FROK-286)
- Checkbox input element width [#FROK-291](https://rb-tracker.bosch.com/tracker03/browse/FROK-291)
- Validated Password Field & Value Modificator: icon overlays label [#FROK-294](https://rb-tracker.bosch.com/tracker03/browse/FROK-294)

### Refactor

- sharing of the FROK npm package from BDC Artifactory in FE-Artifactory [#FROK-265](https://rb-tracker.bosch.com/tracker03/browse/FROK-265)
- update of Bosch icons to version 2.5 [#FROK-280](https://rb-tracker.bosch.com/tracker03/browse/FROK-280)
- reimplementation of Lightbox component [#FROK-132](https://rb-tracker.bosch.com/tracker03/browse/FROK-132)
- upgraded 3rd parties dependencies [#FROK-272](https://rb-tracker.bosch.com/tracker03/browse/FROK-272)
- included Terms of Use [#FROK-232](https://rb-tracker.bosch.com/tracker03/browse/FROK-232)

### Features

 - added css and sass variables to represent bosch icons [#FROK-302](https://rb-tracker.bosch.com/tracker03/browse/FROK-302)

## 1-1-3 (26.03.2021)

### Refactor

- added scrolling to dialog component

### Fix

- removed label from close button

## 1-1-2 (25.03.2021)

### Fix

- added missing Copyright notices of 3rd parties to distributed code  

## 1-1-1 (23.03.2021)

### Fix

- added Banner text to FROK files
- added use of $font-base-path variable in bosch-icon font definition
- changed font's loading basepath from '/' to './' 

## 1-1-0 (11.03.2021)

### Features

- add Header component
- add Footer component
- add OptionBar component
- add TabNavigation component
- add SearchForm component
- add SearchField component
- add LanguageSelector component
- add Breadcrumb component
- add Integrated Button variant
- add visual regression tests
- integration with Google Tag Manager
- integration with Cookie Manager Cookie Manager
- added Impressum to the footer
- source code migration to the BDC Github
- integration with BDC Artifactory
- configured a new domain for FROK preview: https://frok.ui.bosch.tech

### Refactor

- changed name of the package to @bosch/frontend.kit-npm
- updated notification component
- updated dropdown component
- updated link component

## 1-0-7 (18.01.2021)

### Fix
-   fixed Input field round corners in Edge #FROK-179
-   fixed Popover Box-shadow arrow #FROK-94
-   fixed Dropdown full length #FROK-180

## 1-0-6 (08.12.2020)

### Fix

- fixed round corners in button component in Edge browser

## 1-0-5 (27.11.2020)

### Refactor

- changed Notification component

## 1-0-4 (25.11.2020)

### Refactor

- added new version 2.4 of Brand Guide icons

### Fix

- fixed image without caption in preview

## 1-0-3 (17.11.2020)

### Features

- add Demo page of integration FroK + React

### Refactor

- change name of npm package to @rb-ui/frontend.kit-npm
- update of green color to be compliant with Brand Guide

## 1-0-2 (10.10.2020)

### Fix

- update Textarea cmomponent
- update TextField component

## 1-0-1 (27.08.2020)

### Refactor

- change absolute to relative pathes in FROK resources
- update overview pages

## 1-0-0 (19.08.2020)

### Features

- add Overview page for Button, Link, TextArea and TextField component
- add Dropdown component
- add UiIcon to Icon page
- add Chip component
- add Notification component
- add Page Indicator component
- add Progress Indicator page
- add Slider component
- add Table component
- add Tooltip component
- add Value Modificator component
- add Jest Snapshot tests
- add smoke tests

### Refactor

- update compliance with ADA standard (accessibility)
- update documentation: How to use, CI/CD pipeline

## 0-5-0 (03.04.2020)

### Features

- add Box component
- add Icon component
- add Notification component
- add TextArea component
- add TextField component
- add Dialog component
- add FormField component
- add Popover component
- add Form component
- add API Demonstrator
- add Descriptions folder to each component
- add Demonstrators folder to the components using it (Link, Background, Box, Divider, Icon, Notification, Typography, Dialog, Popover, Form Field and Form)

### Refactor

- remove Chip component
- remove Modal component
- remove NonModal component
- remove PageIndicator component
- remove Pin component
- remove Tooltip component
- remove _descriptiveName_ value from each component
- update Button component's style after Design Review
- update Checkbox component's style after Design Review
- update List component's style after Design Review
- update RadioButton component's style after Design Review
- update Toggle component's style after Design Review
- update Landing page’s style after Design Review
- update Code snippets’ style
- update Typography's definition
- update Documentation
- update Landing page’s content
- rename Switch component to “Toggle”
- change Build pipeline

### Fix

- Activity Indicator: fixed animation for IE11
- Divider component: updated vertical divider for IE11
- Image component: add „defaultSrc“ prop
- Link component: updated arrow icon for IE11
- Video component: add file extension references

## 0-1-0

### Features

- add ActivityIndicator component
- add Background component
- add Button component
- add Checkbox component
- add Chip component
- add Divider component
- add List component
- add PageIndicator component
- add Pin component
- add RadioButton component
- add Switch component
- add Tooltip component
- add Modal component
- add NonModal component
- add Video component
- add Basic Tab to present default Styling related to Typography Update
- add optional _description_ and _demo_ integration on guide sites for components
- add first _vanilla.js_ implementation in **PageIndicator** component
- add loading of _demo.js_ files to present behavior of vanilla.js components

### Refactor

- refactor typography and usage inside of Test / TestImage component
- adjust build step of markdown files to speed up development process

## 0-0-1

### Features

- first build of frontend-kit
- add build step to generate components from config files
- add example component to display variants of background
- add text component
- add image component
- add textImage component
- add link component
- add styling for preview site
- add compiling of frontend-kit.js and frontend-kit.css
