---
path: "/atoms/badge/guide"
type: "intro"
level: "atoms"
title: "badge"
---

Badges are used to highlight the characteristics of an object, such as the number of unread messages.

The content (rendered as a string) within the badge can be:

- Text
- Number (no more than three digits recommended)

It comes with nine color modifiers: `info` (by default), `success`, `warning`, `error`, `emphasis-00`, `emphasis-01`, `emphasis-02`, `emphasis-03` and `emphasis-04`.

| variant     | css class      | former emphasis color name |
| ----------- | -------------- | -------------------------- |
| emphasis 00 | `-emphasis-00` | gray                       |
| emphasis 01 | `-emphasis-01` | blue                       |
| emphasis 02 | `-emphasis-02` | green                      |
| emphasis 03 | `-emphasis-03` | purple                     |
| emphasis 04 | `-emphasis-04` | turquoise                  |

It comes with one modifier for the use-case when there is only one letter inside the badge. Therefore the `-single-char` class or the data attribute `data-count="1"` can be applied.

Two use-cases are possible for the badge:

- attached to an icon/button
- as inline badge right next to text

## How to use

It's up to the user how to position the badge relatively to the icon/button.

As an example, the following steps were taken in the demo below.

1. Have an outer `div` container to wrap the icon/button and the badge.
2. Give `position: relative` to the outer div.
3. Give `position: absolute` to the badge.
4. Set the position to `inset-block-start: 0.5rem` and `inset-inline-start: 1.5rem`.
5. To use the variant small, set the position to `inset-block-start: 0.25rem` and `inset-inline-start: 2rem`.

When positioning the badge relatively to the icon/button, it is important to use the aria-label of the icon/button to describe the content of the badge, e.g. use the label of badge.

<br/>
<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
In a live context using the badge, it is highly recommended to switch its <code>aria-live</code> attribute to <code>"polite"</code>.<br/><br/>
More information can be found <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions" target="_self">here</a>.
</div></div>
