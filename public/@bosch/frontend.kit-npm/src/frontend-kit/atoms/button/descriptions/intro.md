---
path: "/atoms/box/guide"
type: "intro"
level: "atoms"
title: "button"
---

| Group       | Type                             | class names                                                                                              |
| ----------- | -------------------------------- | -------------------------------------------------------------------------------------------------------- |
| brand       | primary<br>secondary<br>tertiary | `a-button--brand-primary`<br>`a-button--brand-secondary`<br>`a-button--brand-tertiary`                   |
| neutral     | primary<br>secondary<br>tertiary | `a-button--neutral-primary`<br>`a-button--neutral-secondary`<br>`a-button--neutral-tertiary`             |
| destructive | primary<br>secondary<br>tertiary | `a-button--destructive-primary`<br>`a-button--destructive-secondary`<br>`a-button--destructive-tertiary` |

## Modifier Classes

| Modifier         | Compatible With                          | Description                                                                     |
| ---------------- | ---------------------------------------- | ------------------------------------------------------------------------------- |
| `-fixed`         | All base combinations                    | Fixed width                                                                     |
| `-small`         | All base combinations                    | Smaller button size                                                             |
| `-without-icon`  | can be dropped, button works now without | <div class="a-badge -m -warning" role="status" aria-live="off">deprecated</div> |
| `-without-label` | can be dropped, button works now without | <div class="a-badge -m -warning" role="status" aria-live="off">deprecated</div> |

<div class="frontend-kit__notification a-notification -neutral"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
    Since there is a wide variety of buttons, not all possible combinations are shown. The <strong>Brand</strong> Group will be shown in all cases.
    <strong>Neutral</strong> and <strong>Destructive</strong> will be shown in a reduced set.
    To get an overview of all available buttons, we created an additional <a href="#id-all-buttons"> overview</a>.
</div></div>

## Advice for usage

Still available button variants, but marked for deprecation.

* `primary` - <div class="a-badge -m -warning" role="status" aria-live="off">deprecated</div>
* `secondary` - <div class="a-badge -m -warning" role="status" aria-live="off">deprecated</div>
* `tertiary` - <div class="a-badge -m -warning" role="status" aria-live="off">deprecated</div>
* `close` - <div class="a-badge -m -warning" role="status" aria-live="off">deprecated</div>

Buttons do not bring any margins, but should have a spacing of `1rem` between them. For an example, see [Dialog](/molecules/dialog/guide).

You can consider using the `data-frok-action` attribute to convey the semantic meaning of the button. See the [Dialog](/molecules/dialog/guide) component for an example.

<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
    For accessibility reasons, do not use <code>a</code> tags for buttons!
</div></div>
