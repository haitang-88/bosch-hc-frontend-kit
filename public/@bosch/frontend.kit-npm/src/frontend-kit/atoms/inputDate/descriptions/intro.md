---
path: "/atoms/inputDate/guide"
type: "intro"
level: "atoms"
title: "input date"
---

The date input element let the user enter and edit a date.

The control's user interface varies from browser to browser. It was not styled by FROK (browser native behaviour).

<div class="frontend-kit__notification a-notification -warning">
    <i class="a-icon ui-ic-alert-warning"></i>
    <div class="a-notification__content">
        The cross-browser input layout is different.
        For Chrome/Opera and Microsoft Edge it is designed in FROK style. For Firefox, we use the browser-native look and feel.
    </div>
</div>

<div class="frontend-kit__notification a-notification -warning">
    <i class="a-icon ui-ic-alert-warning"></i>
    <div class="a-notification__content">
        According to the <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_self">Web Content Accessibility Guidelines (WCAG)</a>, it is highly recommended to use a label together with the date input.
    </div>
</div>

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
