---
path: '/atoms/meter/guide'
type: 'intro'
level: 'atoms'
title: 'meter'
---

The meter component is a visual gauge used for measuring and displaying quantitative data.

To set the gauge range, use the `min` and `max` attributes, while `high` and `low` are used for threshold values, and optional `optimum` for the desired target value.

When the `optimum` value is provided, three colors are assigned for: the optimum value, values less than optimum, and values even less than good.

If no `optimum` value is given, only two colors are assigned for: the optimum value and values less than optimum, locating the optimum area in between.
