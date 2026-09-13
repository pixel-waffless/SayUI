# SayUI

> A minimal, modular, framework-agnostic UI component library built with HTML, SCSS, and compiled CSS.

[![Repository version](https://img.shields.io/badge/repository-1.0.2-red)](package.json)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Status](https://img.shields.io/badge/status-stable%20v1-blue)](https://github.com/pixel-waffless/SayUI)

SayUI provides documented HTML contracts and a visual layer for editorial pages, blogs, documentation, and content-driven interfaces. It has no framework runtime, router, CMS, or JavaScript behavior dependency.

The repository is prepared for `1.0.2`. The latest version currently published on npm remains `1.0.1` until the `v1.0.2` release is deliberately tagged and published.

> **About the name**
>
> **SayUI** is the official brand name of the project. It is derived from **Sayu UI**, where **Sayu** is the project name and **UI** stands for *User Interface*.
>
> Depending on the platform, you may also encounter:
>
> - **SayUI** — official brand.
> - **Sayu UI** — expanded written form.
> - `sayu-ui` — npm package name.

## Installation

```bash
npm install sayu-ui
```

## CSS Usage

Import the standard bundle from a CSS-aware build tool:

```css
@import "sayu-ui/css";
```

Or import it from JavaScript when the consumer build supports CSS imports:

```js
import "sayu-ui/css";
```

For a direct HTML workflow, copy or expose the installed bundle and link it:

```html
<link rel="stylesheet" href="/node_modules/sayu-ui/dist/css/sayui.css">
```

## Minified CSS

Use the minified subpath in production-oriented builds:

```css
@import "sayu-ui/css/min";
```

The physical file is:

```text
node_modules/sayu-ui/dist/css/sayui.min.css
```

## SCSS Usage

SayUI publishes its Sass entry and component sources for consumers that need source-level integration:

```scss
@use "pkg:sayu-ui/scss";
```

The exported Sass entry is:

```text
node_modules/sayu-ui/src/styles/main.scss
```

Consumers should prefer the compiled CSS unless they specifically need Sass integration.

## HTML Contracts

SayUI does not render components. Consumers write semantic HTML using the documented `ui-*` class contracts:

```html
<header class="ui-section-header">
  <h2 class="ui-section-header__title">Latest Stories</h2>
</header>
```

Component HTML examples are included under:

```text
node_modules/sayu-ui/src/components/
```

Detailed contracts are included under:

```text
node_modules/sayu-ui/docs/components/
```

## Public Primitives

SayUI v1 includes these 17 reusable primitives and editorial/content components:

- `ui-section-header`
- `ui-eyebrow`
- `ui-meta-list`
- `ui-tag-list`
- `ui-pullquote`
- `ui-newsletter`
- `ui-author-card`
- `ui-related-list`
- `ui-byline`
- `ui-comment`
- `ui-comment-form`
- `ui-trending-list`
- `ui-social-links`
- `ui-callout`
- `ui-table`
- `ui-code-block`
- `ui-toc`

SayUI also includes original public editorial compositions such as topbars, banners, post cards, sidebars, footers, and article components. Modern primitives do not make those components obsolete and do not authorize automatic migrations.

## Adoption Notes

- `ui-byline`, `ui-related-list`, `ui-newsletter`, `ui-comment`, `ui-comment-form`, `ui-eyebrow`, `ui-meta-list`, `ui-tag-list`, `ui-callout`, `ui-table`, `ui-code-block`, and `ui-toc` are ready for new internal compositions.
- `ui-trending-list`, `ui-social-links`, `ui-section-header`, and `ui-pullquote` should be validated in their final width or surface.
- `ui-author-card` remains experimental as a migration target for the existing article-sidebar author block, though it can be used independently.

See the [Component Coexistence Matrix](docs/component-coexistence.md) for the complete adoption policy.

## Demo

The published GitHub Pages demo is available at:

https://pixel-waffless.github.io/SayUI/

It includes:

- Reusable component gallery.
- Blog Home.
- Blog Article.
- Blog Category.
- Blog Author.
- Blog Search.
- Blog 404.

The blog pages are static consumer compositions. Demo form actions such as `/comments` and `/newsletter/subscribe` require a real backend or external form provider; GitHub Pages does not process them.

## Development

Install the project toolchain reproducibly with Node.js 20:

```bash
npm ci
```

Build both distribution bundles:

```bash
npm run build
```

Other commands:

```bash
npm run build:css
npm run build:min
npm run validate:html
npm test
npm run watch
```

`npm run build` generates:

```text
dist/css/sayui.css
dist/css/sayui.min.css
```

`npm pack` runs the build automatically through `prepack`.

## Package Contents

The npm package intentionally includes:

- Compiled CSS and source maps in `dist/`.
- Component HTML and SCSS sources.
- Layout HTML and SCSS sources.
- Foundation and bundle SCSS sources.
- Component contracts and usage documentation.
- Generated, repository-owned SVG placeholders referenced by the published HTML examples.
- `README.md`, `LICENSE`, and `package.json`.

Repository demos and project-only styles are excluded from the npm package. The two generated SVG placeholders used by the deliberately published HTML examples are included under `src/assets/`.

## Accessibility and browser expectations

SayUI favors semantic HTML, visible keyboard focus, accessible names, useful image alternatives, and reduced-motion support. Consumers remain responsible for application behavior, content, contrast in custom themes, and end-to-end accessibility testing.

The compiled CSS targets current evergreen browsers. Sass consumers should use the exported `sayu-ui/scss` entry rather than relying on undocumented internal paths.

## License

[MIT](LICENSE)

## Author

Jonathan Ventura

Repository: [pixel-waffless/SayUI](https://github.com/pixel-waffless/SayUI)
