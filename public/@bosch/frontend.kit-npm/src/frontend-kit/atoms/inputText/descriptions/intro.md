---
path: "/atoms/inputText/guide"
type: "intro"
level: "atoms"
title: "input text"
---

The input text element can be used for single-line input. It features an optional `label` and an optional placeholder as well as success, error and warning states.

See [Form](/organisms/form/guide) for example usage in a form.

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

<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
    In order for the <code>label</code> to work correctly, the <code>input</code> tag needs a unique <code>id</code> attribute and the <code>label</code> tag needs the same <code>for</code> attribute.
</div></div>

<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
According to the <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_self">Web Content Accessibility Guidelines (WCAG)</a>, it is highly reccomended to use a label together with the input text.
</div></div>

<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
Password and Search variants are <em>removed</em> and are now located in it's own components. Please use <code><a href="/atoms/inputPassword/guide" target="_self">Input Password</a></code> and <code><a href="/atoms/inputSearch/guide" target="_self">Input Search</a></code> components.
</div></div>

## Usage of the "integrated variant"

The `integrated` variant of the `inputText` component, can not be used as a standalone component. The variant needs to be implemented
into other components, e.g. [Menu Item List](/atoms/menuItem/guide#id-menu-item-list)

<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
Also a <code>label</code> is mandatory to use with the <code>integrated variant</code>
</div></div>
