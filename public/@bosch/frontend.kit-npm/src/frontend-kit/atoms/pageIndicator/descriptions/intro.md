---
path: "/atoms/pageIndicator/guide"
type: "intro"
level: "atoms"
title: "page indicator"
---

Page indicator can be used to indicate to users the current page. It comes with two types: Dot-typed indicators (`default`) and numbered indicators (`-numbered`).

For numbered indicators, a maximum of 7 items are shown. If there are more pages, it is shown with three dots. See examples below.

Component events:

- prevClicked - triggered when prev arrow was clicked
- nextClicked - triggered when next arrow was clicked
- clicked - triggered when other page was selected
- indexChanged - triggered when an index of the selected page was changed

<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
Each variant has an <code>aria-label</code> which needs to be set by the user.
</div></div>
