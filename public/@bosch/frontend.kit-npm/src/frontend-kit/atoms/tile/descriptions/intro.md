---
path: "/atoms/tile/guide"
type: "intro"
level: "atoms"
title: "tile"
---

## Variants

A tile can be used to contain additional content such as text, images and interactive elements like buttons.

| variant     | css class             | description                                    |
| ----------- | --------------------- | ---------------------------------------------- |
| default     | **no css class used** | -                                              |
| primary     | `-primary`            | represents a tile with primary background      |
| secondary   | `-secondary`          | represents a tile with secondary background    |
| contrast    | `-contrast`           | represents a tile with contrast background     |
| emphasis 00 | `-emphasis-00-nested` | tiles uses the emphasis 00 nested color scheme |
| emphasis 01 | `-emphasis-01-nested` | tiles uses the emphasis 01 nested color scheme |
| emphasis 02 | `-emphasis-02-nested` | tiles uses the emphasis 02 nested color scheme |
| emphasis 03 | `-emphasis-03-nested` | tiles uses the emphasis 03 nested color scheme |
| emphasis 04 | `-emphasis-04-nested` | tiles uses the emphasis 04 nested color scheme |
| integrated  | `-integrated-nested`  | tiles uses the integrated nested color scheme  |

## Interactive variants

Interactive tiles open a defined area of ​​an application, similar to anchor links. In contrast to buttons, interactive tiles do not trigger any function.
To use the interactive variant a **mandatory** `<div class="a-tile__link"></div>` should be used as the **first** and **only** child. Inside there only **text** and other **non-interactive** elements are allowed to use.

| variant          | css class             | description                                           | former emphasis color name |
| ---------------- | --------------------- | ----------------------------------------------------- | -------------------------- |
| default          | **no css class used** | uses the emphasis 00 major color scheme as a fallback |                            |
| emphasis 00      | `-emphasis-00`        | uses the emphasis 00 major color scheme               | **new**                    |
| emphasis 01      | `-emphasis-01`        | uses the emphasis 01 major color scheme               | blue                       |
| emphasis 02      | `-emphasis-02`        | uses the emphasis 02 major color scheme               | green                      |
| emphasis 03      | `-emphasis-03`        | uses the emphasis 03 major color scheme               | purple                     |
| emphasis 04      | `-emphasis-04`        | uses the emphasis 04 major color scheme               | turquoise                  |
| integrated major | `-integrated-major`   | uses the integrated major color scheme                |                            |
| integrated minor | `-integrated-minor`   | uses the integrated minor color scheme                |                            |
| integrated pure  | `-integrated-pure`    | uses the integrated pure color scheme                 |                            |
| plain major      | `-plain-major`        | uses the plain major color scheme                     |                            |
| plain minor      | `-plain-minor`        | uses the plain minor color scheme                     |                            |
| plain pure       | `-plain-pure`         | uses the plain pure color scheme                      |                            |

## Spacing sizes

Both tile variants come with a default padding of 2rem, but can also be used with `-small` and `-flat` classes

| size class    | spacing of the tile |
| ------------- | ------------------- |
| no size class | 2rem                |
| `-small`      | 1rem                |
| `-flat`       | 0                   |

<div
  class="a-notification -neutral"
  role="alert"
  aria-labelledby="how-to-use-tile"
>
  <i class="a-icon ui-ic-alert-info"></i>
  <div id="how-to-use-tile" class="a-notification__content">
    Please be aware that the shown spacings and sizes are only demonstrators and will not be part of the tile styles.
    For a usage of the tile to build an other component, e.g. a teaser, the spacing and sizes have to follow the BDDS.
  </div>
</div>
