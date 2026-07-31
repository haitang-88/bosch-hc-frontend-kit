---
path: "/atoms/checkbox/guide"
type: "intro"
level: "atoms"
title: "checkbox"
---

Checkboxes can have three states: `checked`, `unchecked` and `indeterminate`. The first two are reachable via normal click interactions, the `indeterminate` state can only be reached by using the DOM API. Look for the example below and the DOM API example at the end of this page.

See [Form](/organisms/form/guide) for example usage in a form.

<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
    In order for checkboxes to work correctly, the <code>input</code> tag needs a unique <code>id</code> attribute and the <code>label</code> tag needs the same <code>for</code> attribute.
</div></div>

<div class="frontend-kit__notification a-notification -neutral"><i class="a-icon ui-ic-alert-info"></i><div class="a-notification__content">
    If you want to use multiple checkboxes that are related to each other, we recommend to wrap those in a <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/group_role" target="_blank">group</a>. This will support the user experience and assistive tools like screen readers.
    Further explanation can be found <a href="https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox/" target="_blank">here</a>.
</div></div>