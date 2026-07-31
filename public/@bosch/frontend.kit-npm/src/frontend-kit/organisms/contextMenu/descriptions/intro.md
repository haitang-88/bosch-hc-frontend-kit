---
path: "/organisms/contextMenu/guide"
type: "intro"
level: "organisms"
title: "Context Menu"
---

The context menu offers users additional interactions for an element using a popover and menu items.

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

## It comes with two types:

- Default (permanently located in one position relative to its button. The popover can only be called here.)
- Free (The Free Context Menu refers to a freely selectable element.)

## Parts

- The popover can be built up by combining different variants of the [menu items](/atoms/menuItem/guide).

## Behaviour

- The navigation can be opened and closed by clicking the trigger menu icon.
- A click on a First Level Page menu item opens the corresponding page.
- Selecting a group opens or closes it, and closes a previous opened group.
- The group's variant on the side will show the sub items on hover.

## How to use the 'Free' Variant

It's up to the user how to position the Free variant relatively to an element.

The demo below used the following position: `top: 0`, `left: 0` along with `z-index: 999`.
