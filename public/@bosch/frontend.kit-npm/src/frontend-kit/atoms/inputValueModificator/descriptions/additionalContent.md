---
path: "/atoms/inputValueModificator/guide"
type: "additionalContent"
level: "atoms"
title: "input value modificator"
---

### Instance API

The instance API can be accessed by the `component` property of the valueModificator element.

| Method                  | description                                                                                                                                                                     |
| ------------------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `setValue(value: number)` | sets the value of the input field of the value modificator. Be aware with this the value can also be sets to values, which can **not** be achieved via the `plus/minus` buttons. E.g. steps are set to **5**, with the usage of `setValue(11)`, **11** will be the value. Using than the buttons will change it to **6** or **16** accordingly. |


### Event API

Event Handlers can be registered by calling `component.addEventListener(name, callback)`. They can be removed by calling `component.removeEventListener(name, callback)` with the same arguments. Also, `addEventListener` returns an unsubscription function that, once called, achieves the same.

| Event Name           | parameters      | description                                                                          |
| -------------------- | --------------- | ------------------------------------------------------------------------------------ |
| `onInput`            | `value: number` | Will be triggered when the value of the input is set and contain the new `value`     |