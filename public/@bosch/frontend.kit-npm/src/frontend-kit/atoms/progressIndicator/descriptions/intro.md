---
path: "/atoms/progressindicator/guide"
type: "intro"
level: "atoms"
title: "progress indicator"
---

The progress indicator comes in two variants and can be used to show a length of a process or express an unknown wait time, e.g. fetching a resource.

The first one is the `determinate` variant, which is a completable progress bar for which you can set the value via the style. The second variant is the `indeterminate` which is just a loading indicator for an unspecified wait time and therefore showing an animation only.

<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
In order to make the component accessible each variant should provide an <code>aria-label</code> attribute or a <code>label</code> element which needs to be set by the user.
</div></div>

<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">

To make the content accessible when using the <code>progress</code> element to indicate the loading progress of a page section, the user should follow these steps:

1. Set up an <code>aria-label</code> for the <code>progress</code> element, such as "Content loading..."
2. Set up an <code>aria-describedby</code> attribute with the same value as the <code>progress</code> element's ID in the content that is being loaded.
3. Set <code>aria-busy="true"</code> while the section is being loaded, and remove it once the content is fully loaded.
</div></div>
