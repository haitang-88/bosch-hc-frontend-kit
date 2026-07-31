---
path: "/atoms/textArea/guide"
type: "intro"
level: "atoms"
title: "text area"
---

The `<textarea>` element can be used for multi-line input. It features an optional `label` and an optional placeholder as well as success, error and warning states.

The dynamic-height variant will adjust its height to match the content.

See [Form](/organisms/form/guide) for example usage in a form.

<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
    In order for the <code>label</code> to work correctly, the <code>input</code> tag needs a unique <code>id</code> attribute and the <code>label</code> tag needs the same <code>for</code> attribute.
</div></div>
<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
According to the <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_self">Web Content Accessibility Guidelines (WCAG)</a>, it is highly reccomended to use a label together with the text area.
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
