---
path: "/atoms/menuItem/guide"
type: "intro"
level: "atoms"
title: "menu item"
---

The menu item is the smallest element of the Context Menu.

It can be either a link or a button. It has a mandatory label and optional icon and divider.

A link can be used for first level items.

A button can be used for:

- groups (with an arrow down icon)
- showing / hiding second level items (with an arrow right icon)

<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
Ensure that an instance of this component is used inside a parent component with role 'menu', 'menubar' or 'group'. 
</div></div>

<br/>

<div class="frontend-kit__notification a-notification -warning">
    <i class="a-icon ui-ic-alert-warning"></i>
    <div class="a-notification__content">
        This component works with all its features only in browsers that have support for the <code>:has</code> CSS selector. Please refer to the
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:has#browser_compatibility" target="_blank">reference</a> on MDN.
        <br/>
        If you need to run this component in a browser with no support for the <code>:has</code> CSS selector, please use the
        <a href="https://github.boschdevcloud.com/rb-ui/frontend.kit-npm/releases/tag/v3.6.0" target="_blank">FROK Release 3.6.x</a>.
    </div>
</div>

## Mandatory and optional parts

The menu item dows have multiple parts that can be used, only the **label** is mandatory.
Optional parts are:

- **icon** in front of the label
- **secondary label**
- **badge**
- **arrow right** or **arrow down** to indicate sub menus
- **divider** to separate multiple menu items

## Indent variant

The indent variant of the component, can occur in two versions: **with** or **without** active indicator in form of an **ui icon checkmark**.

For the rest of the possible parts, the same rules apply as for the **non-indent** version.
