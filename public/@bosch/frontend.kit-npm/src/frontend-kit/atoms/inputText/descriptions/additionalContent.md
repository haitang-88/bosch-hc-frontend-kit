---
path: "/atoms/inputText/guide"
type: "additionalContent"
level: "atoms"
title: "input text"
---

### Event API

Event Handlers can be registered by calling `component.addEventListener(name, callback)`. They can be removed by calling `component.removeEventListener(name, callback)` with the same arguments. Also, `addEventListener` returns an unsubscription function that, once called, achieves the same.

| Event Name                                       | parameters      | description                                                                                                                                        |
| ------------------------------------------------ | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onClear` (`integrated` variant only)            | none            | Will be triggered when the clear button is clicked. The component will loose focus. This event can be used to put the focus on a different element |