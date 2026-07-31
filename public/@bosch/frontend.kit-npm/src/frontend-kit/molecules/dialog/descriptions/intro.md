---
path: "/molecules/dialog/guide"
type: "intro"
level: "molecules"
title: "dialog"
---

A dialog can be used to present the user with an immediately needed choice.

It comes in three variations:

- The **default dialog** does have a text and two choices. A close icon is optional.
- The **small dialog** only has one option, and an optional close icon.
- The **alert dialog** has a headline, and one of four levels: info, success, warning and error. Alert dialogs do not have a close icon.
- A third optional button can be implemented in all variants.

The Dialog component offers the following key features:

- **Modal Dialogs:** These dialogs are closed by default and overlay the rest of the page when opened. When a modal dialog is active, the user cannot interact with the underlying page until the dialog is closed.

- **Non-Modal Dialogs:** Non-modal dialogs are also closed by default but allow the user to interact with the rest of the page while the dialog is open. Please note that the Escape key does not automatically close non-modal dialogs.

- **Modal-less Dialogs:** Unlike the previous two types, modal-less dialogs are already opened on page load, triggered by the presence of the open attribute. However, they lack the keyboard trap functionality, meaning that the focus can move beyond the dialog area.

<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
For accessibility reasons, it's important to include a close button within non-modal and modal-less Dialogs.
</div></div>

## Using the Dialog Component

The Dialog component relies on the user to specify an external element as a trigger for opening the dialog. This allows multiple dialogs to be handled. **The user needs to explicitly define which element will initiate the dialog's opening** by adding custom JS.

```ts
/* custom JS, basic example */
const trigger = document.querySelector('[data-frok-action="show"]')
const dialog = document.querySelector('.m-dialog')

trigger.addEventListener('click', () => {
  // open as dialog
  dialog.show()
  // open as modal dialog
  // dialog.showModal()
})
```

For more complex examples take a look at our <a href="#demo-code">demo code</a>.
