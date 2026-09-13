# Architecture

SayUI is a framework-agnostic UI library built with HTML, SCSS, and compiled CSS.

Consumer projects import the compiled CSS bundle and use documented `ui-*` classes in their own HTML:

```html
<link rel="stylesheet" href="dist/css/sayui.css">
```

SayUI is meant to provide visual components, layout primitives, editorial patterns, and reusable technical-content components without owning the consumer application's routing, rendering, data layer, or framework.

## What SayUI Is

- A small UI library.
- A set of documented HTML contracts.
- A Sass source library compiled into a CSS bundle.
- A framework-agnostic design layer for editorial and technical interfaces.
- A project that can be consumed by HTML-only sites, static-site generators, documentation projects, or application frameworks.

## What SayUI Is Not

SayUI is not:

- Astro
- React
- Next.js
- Vue
- Angular
- Tailwind UI
- A router
- A CMS
- A blog engine
- A documentation generator
- A JavaScript behavior layer

The included blog demos consume SayUI through static HTML composition, and external blog or documentation projects can do the same. SayUI itself remains HTML + SCSS + compiled CSS.

## Source Areas

SayUI has different kinds of pieces. Not every `ui-*` selector has the same role, and original components are not obsolete just because newer primitives exist.

The official relationship between original public components and newer primitives is documented in [Component Coexistence Matrix](component-coexistence.md). The short rule is: primitives can coexist with original compositions, but they do not make original components legacy and they do not trigger automatic migrations.

### Component Taxonomy

| Piece | Category | Public/internal | Role | Recommendation |
| --- | --- | --- | --- | --- |
| `src/styles/foundations/*` | Foundations | Internal authoring layer | Shared CSS variables, Sass tokens, typography, mixins, breakpoints, and shadows. | Keep as the design base for new and gradually migrated components. |
| `ui-page` | Layout | Public | Root wrapper for the main page composition. | Keep as structural API. |
| `ui-layout` | Layout | Public | Width and content/sidebar composition for the main page. | Keep as structural API. |
| `ui-main` | Layout / composed area | Public | Main listing column and host for `ui-main-header` and `ui-post-grid`. | Keep; document as an ecosystem. |
| `ui-editorial-page` | Layout | Public | Root wrapper for editorial/article pages. | Keep as structural API. |
| `ui-editorial-grid` / `ui-editorial-page__layout` | Layout | Public | Article + sidebar grid. | Keep; naming is intentional but should stay documented. |
| `ui-tag-list` | Primitive | Public | Reusable tags, categories, topics, and simple filters. | Keep independent; do not auto-migrate older tags. |
| `ui-meta-list` | Primitive | Public | Reusable compact metadata and label/value metadata. | Keep independent; do not auto-migrate older metadata. |
| `ui-table` | Primitive | Public | Semantic tabular data. | Keep independent. |
| `ui-code-block` | Primitive | Public | Code snippets, commands, and configuration blocks. | Keep independent. |
| `ui-toc` | Primitive | Public | Static table of contents. | Keep independent from sidebars. |
| `ui-callout` | Technical/content component | Public | Notes, tips, warnings, and contextual messages. | Keep independent; do not replace quotes, newsletters, or principles automatically. |
| `ui-topbar` | Composed component | Public | Main navigation with brand, nav, actions, and mobile behavior. | Keep; review responsive behavior before any migration. |
| `ui-editorial-topbar` | Composed component | Public | Editorial navigation. | Keep. |
| `ui-banner` | Composed component | Public | Featured story block with media, content, author, and metadata. | Keep public; candidate for future internal pattern adoption. |
| `ui-main-header` | Subcomponent / composed-area part | Public within `ui-main` | Header row and filters for the main listing area. | Keep documented as part of the `ui-main` ecosystem. |
| `ui-post-grid` | Subcomponent / layout helper | Public within `ui-main` | Grid and load-more area for post cards. | Keep. |
| `ui-post-card` | Composed component | Public | Article/post preview card. | Keep public; candidate for improved documentation. |
| `ui-sidebar` | Composed component | Public | Trending items, categories, and newsletter block. | Keep; do not split without approved contracts. |
| `ui-footer` | Composed component | Public | Main page footer. | Keep. |
| `ui-footer-editorial` | Composed component | Public | Editorial page footer. | Keep. |
| `ui-article-hero` | Editorial component | Public editorial | Article title, subtitle, metadata, and hero media. | Keep; do not replace metadata automatically. |
| `ui-article-main` | Editorial composed component | Public editorial | Article prose plus quote, principles, figure, tags, comments, and form patterns. | Keep; strong candidate for future contract design before splitting. |
| `ui-article-sidebar` | Editorial composed component | Public editorial | Author card, related links, social links, and tag cloud. | Keep; split only after contract design. |
| `ui-article-related` | Editorial composed component | Public editorial | Related story section. | Keep. |
| `index.html` | Demo / living documentation | Published project entry | Root editorial demo and navigation entry for GitHub Pages. | Keep routes relative to the repository root. |
| `src/demo/blog-index.html` | Demo / living documentation | Internal project asset | Navigation index for the six blog consumer demos. | Keep linked from the root entry. |
| `src/demo/ui-page.html` | Demo / living documentation | Internal project asset | Complete main page composition. | Keep. |
| `src/demo/ui-editorial.html` | Demo / living documentation | Internal project asset | Complete editorial page composition. | Keep. |
| `src/demo/ui-components.html` | Demo / living documentation | Internal project asset | Gallery for reusable primitives and technical/content components. | Keep and update as new public primitives are added. |
| `src/demo/ui-original-components.html` | Demo / living documentation | Internal project asset | Gallery for original public components. | Keep and update as original component contracts improve. |

Taxonomy rules:

- Original components are not legacy by default.
- New primitives do not automatically replace older component internals.
- Primitives and composed components are allowed to coexist.
- Do not remove, migrate, or split a component without an approved public contract.
- Demos are living documentation and can contain repeated markup.

### Foundations

Path: `src/styles/foundations/`

Purpose: shared design primitives used by components and layouts.

Current files:

- `_variables.scss`: CSS custom properties for colors, contextual surfaces, gradients, and visual effects.
- `_typography.scss`: Sass font size, line height, and font weight variables.
- `_mixins.scss`: shared Sass mixins, currently including the `text` mixin.
- `_spacing.scss`: Sass spacing scale for new and gradually migrated components.
- `_radius.scss`: Sass radius scale for corners and pill shapes.
- `_breakpoints.scss`: Sass breakpoint variables and responsive mixins.
- `_shadows.scss`: Sass shadow tokens for new and low-risk migrated components.

Foundations are not a separate build target. They are included through `src/styles/main.scss` and imported directly by component SCSS when needed.

### Layouts

Path: `src/layouts/`

Purpose: page roots and structural containers. Not every layout is a complete page. Some layouts exist to keep component composition, spacing, alignment, or responsive behavior stable.

Current layouts:

- `ui-page`: root for the main page demo.
- `ui-editorial-page`: root for the secondary/editorial page demo.
- `ui-layout`: structural content wrapper.
- `ui-main`: main content column.
- `ui-editorial-grid`: internal article + sidebar composition. It can define selectors such as `.ui-editorial-page__layout`; this is intentional.

Layouts are part of the public architecture and should not be removed or merged only because they appear small or similar.

### Components

Path: `src/components/`

Purpose: reusable visual blocks and component partials. Some components are standalone; others are part of a larger page ecosystem.

Original editorial components include:

- `ui-topbar`
- `ui-editorial-topbar`
- `ui-banner`
- `ui-main-header`
- `ui-post-grid`
- `ui-post-card`
- `ui-sidebar`
- `ui-footer`
- `ui-footer-editorial`

Article-specific components live in:

```text
src/components/article/
```

Current article components:

- `ui-article-hero`
- `ui-article-main`
- `ui-article-sidebar`
- `ui-article-related`

Article components are intentionally scoped to editorial article pages. They should not be treated as mistakes just because some patterns overlap with newer reusable components.

## Reusable Primitives And Technical Components

SayUI also includes reusable primitive and technical/editorial components that are not article-specific:

- `ui-tag-list`: tags, categories, topic lists, and simple filters.
- `ui-meta-list`: compact metadata and simple label/value metadata.
- `ui-section-header`: reusable section headings.
- `ui-eyebrow`: small editorial labels and individual category markers.
- `ui-callout`: editorial or technical notes, tips, warnings, and contextual messages.
- `ui-pullquote`: highlighted editorial quotations.
- `ui-newsletter`: independent newsletter signup blocks.
- `ui-author-card`: complete author presentation blocks.
- `ui-byline`: compact authorship and publication metadata.
- `ui-comment`: individual comments and simple replies.
- `ui-comment-form`: accessible forms specifically for writing comments.
- `ui-related-list`: compact related-content lists without media.
- `ui-trending-list`: compact editorial lists with optional media and metadata.
- `ui-social-links`: semantic social and contact link groups.
- `ui-table`: semantic tabular data with responsive overflow support.
- `ui-code-block`: code, commands, configuration, and terminal-style snippets without JavaScript or syntax highlighting.
- `ui-toc`: static table of contents for internal page sections, without scrollspy.

These components are designed to work in articles, documentation, guides, demos, or consumer projects without depending on a framework or a specific page layout.

They should not be treated as automatic replacements for existing internals. For example, `ui-tag-list` can coexist with older article tags, and `ui-meta-list` can coexist with existing card or hero metadata until a migration contract is approved.

SayUI does not include `ui-category-list` or `ui-comment-list` in v1 because their current use cases are covered by documented compositions. It also does not include a general form system: `ui-comment-form` and `ui-newsletter` remain purpose-specific components.

## Demos

Paths: `index.html` and `src/demo/`

Purpose: visual testing and living documentation. Demos are not production pages and do not represent a routing system.

Current demo roles:

- Root `index.html`: published editorial demo and entry to the blog/component demos.
- `blog-index.html`: navigation index for the six blog consumer demos.
- `blog-home.html`, `blog-article.html`, `blog-category.html`, `blog-author.html`, `blog-search.html`, and `blog-404.html`: consumer compositions built from existing primitives.
- `ui-page.html`: complete main page composition.
- `ui-editorial.html`: complete editorial/article page composition.
- `ui-components.html`: reusable components gallery.
- `ui-original-components.html`: original public components gallery.

The demos are allowed to contain repeated markup because they are visual references and a practical way to inspect component compositions.

## Distribution

Path: `dist/css/`

Purpose: compiled CSS for consumers.

Current bundle files:

- `sayui.css`
- `sayui.min.css`

`npm run build` regenerates both bundle files from `src/styles/main.scss`.

The package metadata points consumers to:

```json
"style": "dist/css/sayui.css"
```

## Build

SayUI uses Sass as its build tool.

Current commands:

```bash
npm run build
npm run watch
npm run build:min
```

Do not add app bundlers or framework build systems to SayUI unless that change is explicitly approved.

## Main SCSS Bundle Rule

`src/styles/main.scss` is the complete SayUI bundle entry.

Its purpose is to generate a full CSS bundle for the library, not a minimal CSS file. Imports must not be removed only because they appear redundant.

Before changing imports, check:

- `src/styles/foundations/`
- `src/layouts/`
- `src/components/`
- `src/components/article/`
- `src/demo/`
- documented public classes
- expected selectors in `dist/css/sayui.css`

## Framework-Agnostic Philosophy

SayUI should remain independent from any consumer technology.

Consumer projects may use:

- HTML-only workflows
- static-site generators
- documentation generators
- Astro
- React
- Next.js
- Vue
- Eleventy
- Jekyll

Those technologies belong in consumer projects, not inside SayUI's core library.

SayUI's public API is:

- compiled CSS
- documented HTML structure
- documented `ui-*` classes

## Current Maturity

SayUI is currently best described as **advanced alpha / early internal beta**.

The project has:

- a clear framework-agnostic architecture
- a complete Sass/CSS bundle workflow
- foundational tokens
- original editorial components
- reusable technical/editorial components and modern primitives
- documentation for component and layout contracts

Comparative evaluation, responsive/contextual validation, the internal adoption matrix, and the six-page consumer blog demo are complete. Remaining release work is maintenance-oriented: keep generated bundles, demos, and documentation synchronized.

### P4 Closure

P4 is closed for implementation and component contracts. The modern primitives completed through P4 are implemented, documented, included in the complete bundle, and represented in the reusable-components demo.

Original components remain first-class public compositions rather than legacy code. Any real adoption inside an original component still requires a comparative demo, visual approval, and a specific migration contract.

P5.1 is now complete. Its comparative evaluation produced 9 `Migrable` results, 1 `Experimental` result, and 0 `No migrar` results. These classifications represent future adoption viability only: no original component has been replaced and no migration has been executed.

`ui-author-card` remains experimental against the author block inside `ui-article-sidebar`. Components without an official P5.1 comparison remain independent and unclassified for adoption. The complete results and limitations are recorded in the [P5 Comparative Evaluation Plan](history/p5-comparison-plan.md) and [Component Coexistence Matrix](component-coexistence.md).

### P5.2 Closure

P5.2 is technically complete for responsive and contextual review. The audited primitives have no general blocking defects after narrowly scoped box-sizing, wrapping, touch-target, and mobile-density corrections.

`ui-byline`, `ui-related-list`, `ui-newsletter`, `ui-comment`, and `ui-comment-form` are ready for use in new compositions. `ui-trending-list`, `ui-social-links`, `ui-section-header`, and `ui-pullquote` are also usable with contextual validation for narrow columns, dark surfaces, or editorial treatments.

`ui-author-card` remains Experimental. It can be used independently, but it must not be inserted directly into the existing `ui-article-sidebar__card` shell without resolving double padding, duplicate surfaces, and ownership of the editorial container.

No original component was migrated or replaced during P5.2. Original components remain valid public compositions, and every future migration continues to require explicit approval and a specific adoption contract.

### Internal Adoption Matrix

For current blog and internal composition work, SayUI classifies its modern primitives as follows:

- Use freely in new compositions: `ui-byline`, `ui-related-list`, `ui-newsletter`, `ui-comment`, `ui-comment-form`, `ui-eyebrow`, `ui-meta-list`, `ui-tag-list`, `ui-callout`, `ui-table`, `ui-code-block`, and `ui-toc`.
- Use with contextual validation: `ui-trending-list`, `ui-social-links`, `ui-section-header`, and `ui-pullquote`.
- Experimental: `ui-author-card`.

The blog can consume adoptable primitives directly. This does not authorize migration of original SayUI components, which remain valid public APIs. In particular, `ui-author-card` may be used independently but must not replace or be nested directly inside `ui-article-sidebar__card` without an explicitly approved adoption contract.

Copyable documentation and the reusable-components demo use real or representative destinations instead of empty `href="#"` links. The value remains documented only as an antipattern.

## Consumer Blog Architecture

The implemented page map and primitive-consumption plan for the blog are documented separately in [Blog Architecture](blog-architecture.md) and the historical [Blog Construction Blueprint](history/blog-blueprint.md).

That plan belongs to the consumer project. It does not add routing, page templates, search behavior, generic grids, generic cards, or application concerns to SayUI, and it does not authorize migration of original components.
