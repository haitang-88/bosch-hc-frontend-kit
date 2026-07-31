---
path: "/organisms/footerCommerce/guide"
type: "intro"
level: "organisms"
title: "footer commerce"
---

The footer commerce presents a specific version of the footer element for e-commerce websites. There are mandatory and optional elements, 
which is described below and shown in different examples.

## On-Grid & Off-Grid behavior

The footer can be used in two main variants, **on grid** and **off grid**. By default the **off grid** variant is enabled.
By wrapping `o-footer-commerce__search-wrapper` and `o-footer-commerce__resources` in a `e-container` element, the **on gird** behavior is enabled

## Footer commerce optional elements

The list of the following elements can be omitted.

| Element        | Selector                           |
| -------------- | ---------------------------------- |
| Search         | `o-footer-commerce__search`        |
| Banner         | `o-footer-commerce__banner`        |
| Legal          | `o-footer-commerce__legal`         |
| Links          | `o-footer-commerce__links`         |
| Links minimum  | `o-footer-commerce__links-minimum` |
| Shop info      | `o-footer-commerce__shop-info`     |
| Payment        | `o-footer-commerce__payment`       |
| Delivery       | `o-footer-commerce__delivery`      |
| Newsletter     | `o-footer-commerce__newsletter`    |
| Scroll too top | `o-footer-commerce__scroll-to-top` |

## Link sections variants

The Link sections itself has 2 possibilities to be built, **minimum** or **regular**. 

## Regular links

To use this module, link need to be grouped and given an group title, as seen in the examples. Also all the links needs to be 
represented in the markup twice, because for mobile and tablet/desktop we use very distinct markup.

To see those differences check `o-footer-commerce__links` and `o-footer-commerce__links -mobile`.

### Minimum links

This represents specific markup that should only be used with a limited amount of links, it can be found in the **minimum** example of the footer commerce.
In this variant all links are always visible in all viewports, hence too many links can lead to a bad UX for the user.