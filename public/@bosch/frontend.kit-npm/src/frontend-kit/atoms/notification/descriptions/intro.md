---
path: "/atoms/notification/guide"
type: "intro"
level: "atoms"
title: "notification"
---

Notifications variations:

- **Notification bar** (default) for inline display
- **Notification banner**
- **Notification text** shown in [form fields](/molecules/formField/guide)

Notifications types:

- **neutral** (default)
- **success**
- **warning**
- **error**

For the notification text variant, go to Form field and look at the API example.

The notification banner and default variants are showcased here. Banner notifications do have a JS API which is described at the bottom of this page.

The neutral level does have an optional Icon, the other three levels uses the outlined icons from the icon-font as showcased here.

<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
    For accessibility reasons, a keyboard trap is highly recommended in this component.
    However, to prevent some unpredictable side effects (the page freezing, the user is stuck in an infinite loop, etc.), the keyboard trap was not set for this page to work correctly. Therefore it needs to be set by the developer.
</div></div>
