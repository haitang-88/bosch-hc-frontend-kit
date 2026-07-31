---
path: "/organisms/headerCommerce/guide"
type: "intro"
level: "organisms"
title: "header commerce"
---

As the name of it suggests the primary usage of the component is for commercial websites. Nevertheless, by removing non-mandatory elements from it, you can use it for other purposes.
Adding `-sticky` class to the `header` container changes it's behavior from scrolling with the page to staying always on the top.

<div class="frontend-kit__notification a-notification -warning">
    <i class="a-icon ui-ic-alert-warning"></i>
    <div class="a-notification__content">
        JavaScript responsible for the commerce header is not a part of frontend-kit.js, you will find it in our package as commerce-header.js.
    </div>
</div>


## Header commerce elements

| Element                 | Selector                                                   | Description                                                   |
| ----------------------- | ---------------------------------------------------------- | ------------------------------------------------------------- |
| Utility bar             | `nav.o-header-commerce__utility-bar`                       | Optional                                                      |
| Supergraphic            | `div.o-header-commerce__supergraphic`                      | Mandatory for all the brands except Dremel                    |
| Logo                    | `div.o-header__logo`                                       | Mandatory. Bosch or Dremel logo.                              |
| Subbrand identifier     | `div.o-header__subbrand.o-header-commerce__subbrand`       | Mandatory. Should contain a simple text or Split button       |
| Quick links             | `div.o-header__quicklinks`                                 | Mandatory.                                                    |
| Quick links menu button | `button.-menu-opener`                                      | Mandatory. Visible in mobile version.                         |
| Quick links buttons     | `div.o-header__quicklinks button`                          | Optional. All the quicklinks except menu opener are optional. |
| Tab navigation          | `.a-tab-navigation__wrapper`                               | Optional. For one pager it's not needed.                      |
| Flyout navigation       | `nav.o-header-commerce__main-navigation__content__wrapper` | Optional. Needed if horisontal navigation opens sub-items     |
   

## Flyout navigation elements

| Element           | Selector                                                         | Description                                                                                |
| ----------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Controls          | `div.o-header-commerce__main-navigation__controls`               | Mandatory. Navigation buttons for mobile version.                                          |
| Main menu         | `ul.-main-menu`                                                  | Mandatory. Contains identical links as tab navigation, visible in mobile version.          |
| Navigation blocks | `ul.o-header-commerce__main-navigation__content__links`          | Mandatory. Nested structure of UL elements containing links or buttons for sub-navigation. |
| Teasers           | `o-header-commerce__main-navigation__content__teaser.-secondary` | Optional. Content area that contains text and images (e.g. products in promotion).         |

Flyout navigation consists of nested structure of <code>ul</code> elements. Visibility is controlled by adding/removing class <code>-visible</code>.
For the proper functioning of navigation it is required that every <code>ul</code> has a class defining the level, e.g., <code>level-1</code> and all the buttons inside have properly defined <code>aria-level</code> attribute. 
Level classes assigned to <code>ul</code> and <code>button</code> element never change.
Level class initially assigned to flyout navigation <code>nav</code> element is <code>-level-0</code>. It changes when clicking on different navaigation items.

### Flyout navigation button attributes

Pay attention on attributes of the buttons in the code examples. Aria attributes are important for navigation to function.

<div class="frontend-kit__notification a-notification -warning">
    <i class="a-icon ui-ic-alert-warning"></i>
    <div class="a-notification__content">
        Component variations are not visualised properly if Dremel theme is selected for the website, please select any other theme. Dremel specific variations open always with Dremel theme disregarding which theme is selected.
    </div>
</div>