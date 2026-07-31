---
path: "/organisms/minimalHeader/guide"
type: "intro"
level: "organisms"
title: "Minimal Header"
---

The minimal header can be used in SPAs or generally, when the content is presented in an app-like manner.

To ensure consistent behavior, the content should be inserted into a `div` with the `e-container` class, while giving the user control over the vertical styling (see the "Minimal Header with Content" demo below).

<div class="frontend-kit__notification a-notification -neutral"><i class="a-icon ui-ic-alert-info"></i><div class="a-notification__content">
  please make sure to embed the <code>minimalHeader</code> component, always in a wrapper which has the <code>position: relative</code> CSS attribute.
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
