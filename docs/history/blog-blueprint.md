# Blog Construction Blueprint

This document turns the [Blog Architecture](blog-architecture.md) into an actionable construction plan. It describes consumer-owned page composition and does not add templates, layouts, components, or behavior to SayUI.

## Implementation Status

The blueprint has been executed for all six planned pages:

| Page | Demo | Status |
| --- | --- | --- |
| Home | [blog-home.html](../src/demo/blog-home.html) | Implemented and approved |
| Article | [blog-article.html](../src/demo/blog-article.html) | Implemented and approved |
| Category | [blog-category.html](../src/demo/blog-category.html) | Implemented and approved |
| Author | [blog-author.html](../src/demo/blog-author.html) | Implemented and approved |
| Search | [blog-search.html](../src/demo/blog-search.html) | Implemented and approved |
| 404 | [blog-404.html](../src/demo/blog-404.html) | Implemented and approved |

The implementation followed the blueprint through composition only. No new primitive, generic card, generic grid, search component, filter system, profile component, error component, or empty-state component was introduced.

Article previews, repeated grids, page shells, search form and results layout, category navigation context, extended author profile content, and recovery or empty-state presentation remain consumer-owned markup and layout. No blocking gap was found during implementation.

The completed set is navigable through the [Blog Demo Index](../src/demo/blog-index.html) and is ready for internal demonstration.

## Shared Construction Rules

- Each route owns one semantic `main` region and its page-specific heading hierarchy.
- The consumer owns the site header, global navigation, footer, responsive page shell, routing, data loading, and content iteration.
- SayUI primitives are inserted only where their documented responsibility matches the content.
- Article previews remain consumer markup or use an already approved original SayUI component. This blueprint does not define a generic card.
- Columns and repeated listings remain consumer layout. This blueprint does not define a generic grid or `blog-layout`.
- `ui-author-card` remains Experimental and must be validated as an independent block.
- Search, pagination, comment submission, and newsletter submission behavior remain outside SayUI.

## Home Blueprint

### High-Level HTML

```html
<body>
  <header><!-- Consumer site header and global navigation --></header>

  <main>
    <header><!-- Featured page content --></header>
    <section><!-- Latest content --></section>
    <aside><!-- Trending and newsletter --></aside>
    <section><!-- Topic discovery --></section>
  </main>

  <footer><!-- Consumer site footer --></footer>
</body>
```

### Zones

| Zone | Content | SayUI primitives | Ownership |
| --- | --- | --- | --- |
| Header / page hero | Featured category, story title, compact author, and publication metadata. | `ui-eyebrow`, `ui-byline`, `ui-meta-list` | Consumer owns the hero wrapper, media, title, and destination link. |
| Main content | Latest or selected article previews grouped by editorial section. | `ui-section-header`, `ui-byline`, `ui-meta-list` | Consumer owns preview markup, iteration, ordering, and listing layout. |
| Sidebar / complementary content | Trending stories and newsletter signup. | `ui-trending-list`, `ui-newsletter` | Consumer owns column placement and breakpoint behavior. |
| Footer / secondary blocks | Flat topic navigation and supporting destinations. | `ui-tag-list`, optionally `ui-related-list` | Consumer owns the site footer and surrounding navigation landmarks. |

### Do Not Extract

- Featured-story wrapper.
- Article-preview card.
- Latest-content grid.
- Home sidebar layout.
- Home hero variant.

### Implementation Order

1. Build the semantic page shell and global landmarks.
2. Add the featured content with `ui-eyebrow`, `ui-byline`, and `ui-meta-list`.
3. Add the latest-content sections and consumer-owned preview iteration.
4. Add `ui-trending-list` and validate it at the final sidebar width.
5. Add `ui-newsletter` and topic navigation.
6. Verify heading order, wrapping, keyboard focus, and narrow-screen stacking.

## Article Blueprint

### High-Level HTML

```html
<body>
  <header><!-- Consumer site header and global navigation --></header>

  <main>
    <article>
      <header><!-- Article identity and publication context --></header>
      <nav><!-- Optional table of contents --></nav>
      <div><!-- Article content --></div>
      <footer><!-- Tags, author context, and related content --></footer>
    </article>

    <aside><!-- Optional complementary article blocks --></aside>
    <section><!-- Comments composition --></section>
  </main>

  <footer><!-- Consumer site footer --></footer>
</body>
```

### Zones

| Zone | Content | SayUI primitives | Ownership |
| --- | --- | --- | --- |
| Header / article hero | Category, title, summary, authorship, date, and reading metadata. | `ui-eyebrow`, `ui-byline`, `ui-meta-list` | Consumer owns the article heading, summary, hero media, and header layout. |
| Main content | Prose headings, quotations, notes, tables, and code. | `ui-section-header`, `ui-pullquote`, `ui-callout`, `ui-table`, `ui-code-block` | Consumer or content renderer owns prose flow, figures, heading IDs, and content ordering. |
| Sidebar / in-page navigation | Table of contents and compact related resources. | `ui-toc`, `ui-related-list` | Consumer owns sticky behavior context, column layout, and whether the TOC is rendered. |
| Article footer | Tags, independent author context, social destinations, related resources, and newsletter. | `ui-tag-list`, `ui-author-card`, `ui-social-links`, `ui-related-list`, `ui-newsletter` | Consumer owns block ordering and must validate `ui-author-card` independently. |
| Comments | Section heading, individual comments, simple replies, and entry form. | `ui-section-header`, `ui-comment`, `ui-comment-form` | Consumer owns grouping, data, submission, permissions, and whether comments are enabled. |

### Do Not Extract

- Generic prose wrapper.
- Article layout component.
- Comment list.
- General form system.
- Figure system from this blueprint alone.
- Sticky sidebar primitive.

### Implementation Order

1. Build the article landmarks, heading hierarchy, and content source integration.
2. Add article identity with `ui-eyebrow`, `ui-byline`, and `ui-meta-list`.
3. Render prose and technical content primitives.
4. Add `ui-toc` only after stable heading IDs exist.
5. Add article-footer compositions and validate contextual primitives.
6. Add the documented comments composition when comment data and submission behavior exist.
7. Verify long content, narrow prose widths, table overflow, code overflow, and focus order.

## Category Blueprint

### High-Level HTML

```html
<body>
  <header><!-- Consumer site header and global navigation --></header>

  <main>
    <header><!-- Category identity and description --></header>
    <nav><!-- Flat category navigation --></nav>
    <section><!-- Category article listing --></section>
    <aside><!-- Optional trending and newsletter --></aside>
    <nav><!-- Optional consumer-owned pagination --></nav>
  </main>

  <footer><!-- Consumer site footer --></footer>
</body>
```

### Zones

| Zone | Content | SayUI primitives | Ownership |
| --- | --- | --- | --- |
| Header / page hero | Category label, title, and short description. | `ui-eyebrow`, `ui-section-header` | Consumer owns the page heading and descriptive copy. |
| Main content | Chronological or curated article previews. | `ui-byline`, `ui-meta-list` | Consumer owns preview markup, ordering, pagination, and listing layout. |
| Sidebar / complementary content | Sibling categories, trending stories, and newsletter signup. | `ui-tag-list`, `ui-trending-list`, `ui-newsletter` | Consumer owns column placement and category data. |
| Footer / continuation | Pagination or next-page navigation. | None required | Consumer owns pagination semantics and route generation. |

### Do Not Extract

- Category page header component.
- Category list component.
- Generic result grid.
- Pagination component without a separate demonstrated contract.

### Implementation Order

1. Build category route data and semantic heading.
2. Add the flat category composition with `ui-tag-list`.
3. Render consumer-owned previews with metadata.
4. Add pagination when the data strategy requires it.
5. Add optional trending and newsletter blocks.
6. Verify active-category semantics, long category names, and narrow layouts.

## Author Blueprint

### High-Level HTML

```html
<body>
  <header><!-- Consumer site header and global navigation --></header>

  <main>
    <header><!-- Author identity --></header>
    <aside><!-- Author links and topics --></aside>
    <section><!-- Published content --></section>
    <section><!-- Optional selected resources or newsletter --></section>
    <nav><!-- Optional consumer-owned pagination --></nav>
  </main>

  <footer><!-- Consumer site footer --></footer>
</body>
```

### Zones

| Zone | Content | SayUI primitives | Ownership |
| --- | --- | --- | --- |
| Header / page hero | Author name, avatar, role, short biography, and optional links. | `ui-author-card` | Consumer owns the page heading context and must validate the Experimental component at the final width. |
| Main content | Latest or selected authored content. | `ui-section-header`, `ui-byline`, `ui-meta-list` | Consumer owns preview markup, iteration, and archive ordering. |
| Sidebar / secondary profile data | Social/contact destinations and topic expertise. | `ui-social-links`, `ui-tag-list`, `ui-eyebrow` | Consumer owns placement and validates social-link contrast. |
| Footer / secondary blocks | Selected resources or newsletter signup. | `ui-related-list`, `ui-newsletter` | Consumer owns composition and destination data. |

### Do Not Extract

- Full profile-page component.
- Author archive component.
- Team grid.
- Author hero variant.
- A replacement for `ui-article-sidebar__card`.

### Implementation Order

1. Build the author route and semantic page heading.
2. Place `ui-author-card` independently and validate its width, padding, and avatar scale.
3. Add social/contact links and flat topics.
4. Add authored-content previews and metadata.
5. Add pagination and optional secondary blocks.
6. Verify long names, missing avatars, long biographies, and multiple links.

## 404 Blueprint

### High-Level HTML

```html
<body>
  <header><!-- Consumer site header and global navigation --></header>

  <main>
    <header><!-- 404 identity and explanation --></header>
    <nav><!-- Recovery destinations --></nav>
    <section><!-- Optional current content --></section>
  </main>

  <footer><!-- Consumer site footer --></footer>
</body>
```

### Zones

| Zone | Content | SayUI primitives | Ownership |
| --- | --- | --- | --- |
| Header / page hero | Error context, not-found heading, and short explanation. | `ui-eyebrow`, `ui-section-header` | Consumer owns the 404 route, HTTP status, and primary recovery link. |
| Main content | Concise recovery guidance. | Optional `ui-callout` | Consumer owns message content and destination selection. |
| Secondary blocks | Valid destinations, categories, or current content. | `ui-related-list`, `ui-tag-list`, optionally `ui-trending-list` | Consumer owns fallback data and should avoid making the page content-heavy. |
| Footer | Normal site footer. | None required | Consumer-owned global composition. |

### Do Not Extract

- Error-page component.
- Empty-state system.
- Recovery-navigation primitive.
- Special 404 card or hero.

### Implementation Order

1. Configure the consumer route and correct not-found status.
2. Add a clear heading, explanation, and primary recovery link.
3. Add a small set of verified destinations.
4. Add optional current content only when reliable data is available.
5. Verify keyboard order and behavior without JavaScript.

## Search Blueprint

### High-Level HTML

```html
<body>
  <header><!-- Consumer site header and global navigation --></header>

  <main>
    <header><!-- Query and result summary --></header>
    <form><!-- Consumer-owned search form --></form>
    <section><!-- Results or no-results message --></section>
    <aside><!-- Optional suggestions or trending content --></aside>
    <nav><!-- Optional consumer-owned pagination --></nav>
  </main>

  <footer><!-- Consumer site footer --></footer>
</body>
```

### Zones

| Zone | Content | SayUI primitives | Ownership |
| --- | --- | --- | --- |
| Header / page hero | Search context, query text, and result count. | `ui-eyebrow`, `ui-section-header` | Consumer owns query parsing and heading text. |
| Search form | Query input and submit action. | None | Consumer owns markup, labels, submission, validation, and behavior. Purpose-specific SayUI forms must not be reused. |
| Main content | Search-result previews and metadata. | `ui-byline`, `ui-meta-list`, optionally `ui-related-list` | Consumer owns result ranking, preview markup, iteration, and links. |
| Sidebar / secondary blocks | Suggested flat categories or current content. | `ui-tag-list`, optionally `ui-trending-list` | Consumer owns suggestions and validates narrow-column behavior. |
| Empty state | No-results explanation and recovery destinations. | `ui-callout`, `ui-related-list` | Consumer owns state selection and accessible status communication if results update dynamically. |
| Footer / continuation | Pagination or result continuation. | None required | Consumer owns navigation and query preservation. |

### Do Not Extract

- General search form in SayUI.
- Search-results component.
- Search-filter system.
- Generic empty state.
- Pagination component without a separate demonstrated contract.

### Implementation Order

1. Select and verify the search data source.
2. Define route/query behavior and build the accessible consumer-owned form.
3. Add result heading, count, and result iteration.
4. Add metadata and compact authorship where useful.
5. Add no-results and pagination behavior.
6. Add optional suggestions only after the primary search flow works.
7. Verify empty, single-result, long-query, and many-result states.

## Primitive Matrix

| Primitive | Home | Article | Category | Author | 404 | Search |
| --- | --- | --- | --- | --- | --- | --- |
| `ui-section-header` | Sections | Sections/comments | Page/list heading | Work heading | Error heading | Query/results heading |
| `ui-eyebrow` | Featured context | Article category | Category context | Expertise context | Error code | Search context |
| `ui-meta-list` | Preview metadata | Publication facts | Preview metadata | Preview metadata | No | Result metadata |
| `ui-tag-list` | Topics | Article tags | Category navigation | Expertise topics | Destinations | Suggestions |
| `ui-pullquote` | No | Article quotation | No | No | No | No |
| `ui-newsletter` | Secondary CTA | Optional article CTA | Secondary CTA | Optional CTA | No | No |
| `ui-author-card` | No | Optional independent block | No | Author identity | No | No |
| `ui-related-list` | Optional | Related content | Optional | Selected resources | Recovery links | Results/suggestions |
| `ui-byline` | Featured/previews | Article author | Previews | Optional previews | No | Results |
| `ui-comment` | No | Comment composition | No | No | No | No |
| `ui-comment-form` | No | Comment composition | No | No | No | No |
| `ui-trending-list` | Sidebar | Optional | Optional | No | Optional | Optional |
| `ui-social-links` | No | Optional author links | No | Author links | No | No |
| `ui-callout` | No | Contextual content | No | No | Optional guidance | No-results guidance |
| `ui-table` | No | Tabular content | No | No | No | No |
| `ui-code-block` | No | Technical content | No | No | No | No |
| `ui-toc` | No | Long-article navigation | No | No | No | No |

## Composition-Only Assessment

| Page | Buildable through composition | Qualification |
| --- | --- | --- |
| Home | Yes | Existing primitives plus consumer-owned hero, previews, and listing layout are sufficient. |
| Article | Yes | Existing content primitives and the documented comments composition are sufficient. |
| Category | Yes | Existing primitives plus consumer-owned listing and pagination are sufficient. |
| Author | Yes, with contextual validation | `ui-author-card` can be used independently but remains Experimental. |
| 404 | Yes | Semantic HTML and existing discovery primitives are sufficient. |
| Search | Yes, after behavior is defined | Visual composition is covered; the consumer must supply the search form, data source, state, and routing. |

No page currently requires a new SayUI primitive.

## Consumer Layout Responsibilities

| Responsibility | Pages | Decision |
| --- | --- | --- |
| Site header, primary navigation, and footer | 6 pages | Consumer composition or separately approved original SayUI components. Not a new primitive. |
| Responsive page shell and content width | 6 pages | Consumer CSS/layout. Repetition does not justify `blog-layout`. |
| Article/result preview markup | Home, Category, Author, Search | Consumer markup or an approved original component. Do not create a generic card. |
| Repeated listing and column layout | Home, Category, Author, Search | Consumer iteration and layout. Do not create a generic grid. |
| Pagination | Category, Author, Search | Consumer navigation tied to routing and data. |
| Breadcrumb or route trail | Article, Category, Author, Search | Optional consumer navigation; no SayUI contract is proposed. |
| Search form and query behavior | Search and global navigation | Consumer form and application behavior. No general form system. |
| Data-dependent empty states | Search and optional feeds | Consumer state logic using semantic HTML and optional existing primitives. |
| Submission behavior | Newsletter and comments | Consumer/backend responsibility; SayUI supplies display contracts only. |

These responsibilities repeat in three or more pages where noted, but they remain application architecture. Repetition alone is not evidence for a public SayUI primitive.

## Explicit Non-Goals

The blog build will not introduce:

- A generic grid.
- A generic card.
- A `blog-layout` component.
- A category-list component.
- A comment-list component.
- A general form system.
- A search component or search-results system inside SayUI.
- A pagination component without a separate approved contract.
- A page-hero component derived only from these page blueprints.
- Automatic migration or replacement of original SayUI components.

## Recommended Build Order

1. Article
2. Home
3. Category
4. Author
5. 404
6. Search, after its data source and query behavior are confirmed

Article comes first because it validates the largest set of content primitives and establishes the reading experience. Home then establishes discovery and repeated preview composition. Category and Author reuse that language. The 404 page is small but required for deployment. Search remains last because its useful structure depends on a real search source rather than visual composition alone.
