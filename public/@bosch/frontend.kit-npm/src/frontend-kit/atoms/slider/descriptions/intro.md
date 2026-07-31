---
path: '/atoms/slider/guide'
type: 'intro'
level: 'atoms'
title: 'slider'
---

The slider element can be used for numeric input. Optional labels can be displayed on the left or the right.

It also has an optional tooltip which is displayed on top of the slider thumb when the mouse is over it.
The tooltip can either display the absolute or relative value and an optional unit.

As the slider uses the native input element, all attributes for this element are supported for the slider as well.

<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
Each <code>input</code> can be referenced by multiple <code>labels</code>, but the <code>input</code> tag has a unique <code>id</code> that can be paired to only one <code>label</code> (through its same for attribute).<br />
In other words, according to the <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_self">Web Content Accessibility Guidelines (WCAG)</a>, it is highly recommended to use only <em>one</em> <code>label</code> together with the <code>input</code>.
</div></div>

<div class="frontend-kit__notification a-notification -warning"><i class="a-icon ui-ic-alert-warning"></i><div class="a-notification__content">
When <code>aria-valuenow</code> holds a value that isn't comprehensible to the user, such as representing the day of the week with a numerical value, the user needs to set the <code>aria-valuetext</code> attribute as a string providing a clear description of the slider's value, like "Monday," to enhance user understanding.
</div></div>
