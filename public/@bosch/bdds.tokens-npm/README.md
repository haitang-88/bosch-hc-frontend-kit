# BDDS Tokens

This package provides **design tokens for colors, semantic use and components** of the **Bosch Digital Design System (BDDS)**, supporting multiple Bosch brands. These tokens enable consistent theming and styling across applications.

---

## Table of Contents
- [BDDS Tokens](#bdds-tokens)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Why Use BDDS Tokens?](#why-use-bdds-tokens)
  - [Available Brands](#available-brands)
  - [Requirements (recommended/tested)](#requirements-recommendedtested)
  - [Installation](#installation)
  - [Setup](#setup)
    - [Setup in Webpack](#setup-in-webpack)
    - [Setup in Vite](#setup-in-vite)
  - [File Structure \& Paths](#file-structure--paths)
  - [Available background and gradation styles](#available-background-and-gradation-styles)
    - [Light Mode](#light-mode)
      - [Primary Background](#primary-background)
      - [Secondary Background](#secondary-background)
      - [Contrast Background](#contrast-background)
    - [Dark Mode (via selector)](#dark-mode-via-selector)
      - [Primary Background](#primary-background-1)
      - [Secondary Background](#secondary-background-1)
      - [Contrast Background](#contrast-background-1)
    - [Dark Mode (via media query)](#dark-mode-via-media-query)
      - [Primary Background](#primary-background-2)
      - [Secondary Background](#secondary-background-2)
      - [Contrast Background](#contrast-background-2)
    - [Base Definitions](#base-definitions)
  - [Importing the Files](#importing-the-files)
    - [SCSS](#scss)
    - [JavaScript / TypeScript](#javascript--typescript)
  - [Dynamic Loading Example](#dynamic-loading-example)

---

## Overview
BDDS Tokens provide a unified way to manage **colors**, **gradations**, **semantic** and **component styles** across Bosch brands. They include:
- Latest color modes as **CSS** and **JSON** files.
- Type declarations for color modes.
- Generated CSS files for:
  - Gradations
  - Background definitions (including nested schemes)
  - Semantic tokens
  - Component tokens

> Missing something? Contact us, and we’ll help you integrate your favorite CSS/UI library.

## Why Use BDDS Tokens?
- **Consistency**: Unified design language across applications.
- **Scalability**: Easy integration with modern build tools.
- **Brand Support**: Multiple Bosch brands and themes.
- **Flexibility**: Works with SCSS, CSS, and TypeScript.

## Available Brands
- Bosch
- Bosch DiY
- Bosch Power Tools
- Dremel

## Requirements (recommended/tested)
- **Node.js**: >= 18
- **Sass**: >= 1.80
- **Webpack**: >= 5 or **Vite**: >= 5

## Installation
Install via **npm** or **yarn**:

```bash
npm install @bosch/bdds.tokens-npm
# or
yarn add @bosch/bdds.tokens-npm --ignore-engines
```

> Use `--ignore-engines` (or similar flags) if you encounter engine mismatch errors.

## Setup

The `pkg:` import syntax allows referencing files from node packages without relative paths. To enable this:
- Install `sass` and `sass-loader` for webpack or
- Install `sass-embedded` for vite
- Configure the importer as shown below.

### Setup in Webpack
Enable `pkg:` import syntax for SCSS:

```ts
import { Options } from 'sass-loader';
import { NodePackageImporter } from 'sass';

{
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        sassOptions: {
          pkgImporter: new NodePackageImporter(),
        },
      } as Options,
    },
  ],
}
```

### Setup in Vite
Enable `pkg:` import syntax for SCSS:

```ts
// vite.config.ts
import { NodePackageImporter } from 'sass-embedded';
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        importers: [new NodePackageImporter()],
      },
    },
  },
});
```

## File Structure & Paths

| Path                              | Description                                                                                                                |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `/`                               | Type definitions for Color Mode, Gradation, etc.                                                                           |
| `/brands`                         | `availableBrands` list, type `AvailableBrands`, and `BRAND_LOADER` for dynamic token loading.                              |
| `/<brand-name>`                   | Brand-specific tokens in JSON format.                                                                                      |
| `/<brand-name>/gradations/*`      | Generated gradation styles (`.css`) and JSON files.                                                                        |
| `/<brand-name>/backgrounds/*.css` | Generated background styles `.css` format.                                                                                 |
| `/<brand-name>/backgrounds/*.ts`  | Generated background styles `.ts` format for use in react-native. No definitions for nested backgrounds, only 3 main ones. |
| `/<brand-name>/components/*`      | Generated component styles (`.css`).                                                                                       |
| `/<brand-name>/semantic/*`        | Semantic CSS custom properties (`.css`).                                                                                   |
| `/<brand-name>/fonts.scss`        | Font-face definitions as SCSS. Adjust path via `@use ... with ($font-base-path: '../fonts');`.                             |

## Available background and gradation styles

### Light Mode

#### Primary Background

| File                                    | Selector                                        | Description        |
| --------------------------------------- | ----------------------------------------------- | ------------------ |
| *light-mode-primary-schemes.css*        | `-light-mode` or none                           | non-nested schemes |
| *light-mode-primary-nested-schemes.css* | `-primary`(optional) + `-<nested-color-scheme>` | nested schemes     |

#### Secondary Background

| File                                      | Selector                                | Description        |
| ----------------------------------------- | --------------------------------------- | ------------------ |
| *light-mode-secondary-schemes.css*        | `-secondary`                            | non-nested schemes |
| *light-mode-secondary-nested-schemes.css* | `-secondary` + `-<nested-color-scheme>` | nested schemes     |

#### Contrast Background

| File                                     | Selector                               | Description        |
| ---------------------------------------- | -------------------------------------- | ------------------ |
| *light-mode-contrast-schemes.css*        | `-contrast`                            | non-nested schemes |
| *light-mode-contrast-nested-schemes.css* | `-contrast` + `-<nested-color-scheme>` | nested schemes     |

---

### Dark Mode (via selector)

Uses the `-dark-mode` selector prefix.

#### Primary Background

| File                                   | Selector                                                       | Description        |
| -------------------------------------- | -------------------------------------------------------------- | ------------------ |
| *dark-mode-primary-schemes.css*        | `-dark-mode` + `-primary`(optional)                            | non-nested schemes |
| *dark-mode-primary-nested-schemes.css* | `-dark-mode` + `-primary`(optional) + `-<nested-color-scheme>` | nested schemes     |

#### Secondary Background

| File                                     | Selector                                               | Description        |
| ---------------------------------------- | ------------------------------------------------------ | ------------------ |
| *dark-mode-secondary-schemes.css*        | `-dark-mode` + `-secondary`                            | non-nested schemes |
| *dark-mode-secondary-nested-schemes.css* | `-dark-mode` + `-secondary` + `-<nested-color-scheme>` | nested schemes     |

#### Contrast Background

| File                                    | Selector                                              | Description        |
| --------------------------------------- | ----------------------------------------------------- | ------------------ |
| *dark-mode-contrast-schemes.css*        | `-dark-mode` + `-contrast`                            | non-nested schemes |
| *dark-mode-contrast-nested-schemes.css* | `-dark-mode` + `-contrast` + `-<nested-color-scheme>` | nested schemes     |

---

### Dark Mode (via media query)

Uses `@media (prefers-color-scheme: dark)` instead of a selector.

#### Primary Background

| File                                         | Selector                                        | Description        |
| -------------------------------------------- | ----------------------------------------------- | ------------------ |
| *dark-mode-media-primary-schemes.css*        | `-primary`                                      | non-nested schemes |
| *dark-mode-media-primary-nested-schemes.css* | `-primary`(optional) + `-<nested-color-scheme>` | nested schemes     |

#### Secondary Background

| File                                           | Selector                                | Description        |
| ---------------------------------------------- | --------------------------------------- | ------------------ |
| *dark-mode-media-secondary-schemes.css*        | `-secondary`                            | non-nested schemes |
| *dark-mode-media-secondary-nested-schemes.css* | `-secondary` + `-<nested-color-scheme>` | nested schemes     |

#### Contrast Background

| File                                          | Selector                               | Description        |
| --------------------------------------------- | -------------------------------------- | ------------------ |
| *dark-mode-media-contrast-schemes.css*        | `-contrast`                            | non-nested schemes |
| *dark-mode-media-contrast-nested-schemes.css* | `-contrast` + `-<nested-color-scheme>` | nested schemes     |

---

### Base Definitions

| File             | Description                           |
| ---------------- | ------------------------------------- |
| *gradations.css* | includes definitions of the color-set |

## Importing the Files

### SCSS
Gradations:
```scss
@use "pkg:@bosch/bdds.tokens-npm/bosch/gradations/gradations.css";
```

Backgrounds:
```scss
@use "pkg:@bosch/bdds.tokens-npm/bosch/backgrounds/light-mode-primary-schemes.css";
@use "pkg:@bosch/bdds.tokens-npm/bosch/backgrounds/dark-mode-primary-schemes.css";
```

### JavaScript / TypeScript
Types:
```ts
import type { Background, Color, ColorMode, Scheme } from "@bosch/bdds.tokens-npm";
```

Gradations:
```ts
import "@bosch/bdds.tokens-npm/bosch/gradations/gradations";
```

Backgrounds:
```ts
import "@bosch/bdds.tokens-npm/bosch/backgrounds/light-mode-primary-schemes";
```

```ts
import { primary } from '@bosch/bdds.tokens-npm/bosch/backgrounds/light-mode-primary-schemes.ts';
```

## Dynamic Loading Example
Load tokens dynamically for a brand:
```ts
import { BRAND_LOADER } from "@bosch/bdds.tokens-npm/brands";

async function loadTokens(brand: string) {
  const tokens = await BRAND_LOADER(brand);
  console.log(tokens.gradations);
}

loadTokens("bosch");
```