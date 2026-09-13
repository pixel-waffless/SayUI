# Blog Architecture

This document defines the initial page architecture for the blog that will consume SayUI. It is a consumer architecture, not a new layer inside SayUI.

The blog owns routing, data loading, page shells, global navigation, search behavior, and content rendering. SayUI supplies the documented primitives listed here through its compiled CSS and HTML contracts.

This plan does not authorize migration of original SayUI components and does not introduce new components, generic grids, generic cards, category lists, comment lists, or a general form system.

The actionable page structures, zones, ownership boundaries, and implementation order are preserved in the historical [Blog Construction Blueprint](history/blog-blueprint.md).

## Blog Demo Closure

The initial blog architecture has been implemented and approved as six consumer demos:

- [Home](../src/demo/blog-home.html)
- [Article](../src/demo/blog-article.html)
- [Category](../src/demo/blog-category.html)
- [Author](../src/demo/blog-author.html)
- [Search](../src/demo/blog-search.html)
- [404](../src/demo/blog-404.html)

The demos are available from the [Blog Demo Index](../src/demo/blog-index.html). They compose existing SayUI primitives with consumer-owned semantic HTML and local demo layout. No new SayUI primitive was created to build these pages.

### Implemented Primitive Use

| Demo | Primitives used |
| --- | --- |
| Home | `ui-section-header`, `ui-eyebrow`, `ui-meta-list`, `ui-tag-list`, `ui-newsletter`, `ui-related-list`, `ui-byline`, `ui-trending-list`, `ui-social-links` |
| Article | `ui-eyebrow`, `ui-meta-list`, `ui-tag-list`, `ui-pullquote`, `ui-newsletter`, `ui-related-list`, `ui-byline`, `ui-comment`, `ui-comment-form`, `ui-table`, `ui-code-block`, `ui-toc` |
| Category | `ui-section-header`, `ui-eyebrow`, `ui-meta-list`, `ui-tag-list`, `ui-newsletter`, `ui-related-list`, `ui-byline`, `ui-trending-list` |
| Author | `ui-section-header`, `ui-eyebrow`, `ui-meta-list`, `ui-tag-list`, `ui-newsletter`, `ui-author-card`, `ui-related-list`, `ui-byline`, `ui-social-links` |
| Search | `ui-section-header`, `ui-eyebrow`, `ui-meta-list`, `ui-tag-list`, `ui-newsletter`, `ui-related-list`, `ui-byline` |
| 404 | `ui-section-header`, `ui-related-list`, `ui-social-links` |

### Final Architecture Decision

Cards, grids, search presentation and behavior, filters, author profile layout, error presentation, and empty states remain consumer layout or application responsibilities. The demos did not demonstrate a stable gap requiring a new public primitive.

No blocking gaps were found. The blog demo is ready for internal demonstration. This status does not authorize migration or replacement of original SayUI components.

## Page Map

| Page | Purpose | Primary content | Secondary content | Required navigation |
| --- | --- | --- | --- | --- |
| Home | Present the latest and most relevant editorial content. | Featured story, recent article list, and selected topic sections. | Trending content, newsletter signup, and topic links. | Global navigation, links to articles, categories, authors, and search. |
| Article | Deliver a complete long-form article or technical post. | Title context, byline, article body, figures, quotes, code, tables, tags, and comments when enabled. | Table of contents, related content, author context, social/contact links, and newsletter signup. | Global navigation, in-page TOC when useful, category/author links, related article links, and return paths. |
| Category | Collect content belonging to one flat editorial taxonomy. | Category title and a chronological or curated article listing. | Category description, related categories, trending content, and newsletter signup. | Global navigation, article links, category links, and pagination supplied by the consumer if needed. |
| Author | Introduce one author and list their published content. | Author identity and article listing. | Social/contact links, topic expertise, related content, and newsletter signup. | Global navigation, article links, category links, and author destinations. |
| Search | Return content matching a user query when the blog has a real search source. | Query summary, result list, and an explicit no-results message when needed. | Suggested categories, trending content, or related resources. | Global navigation, result links, category links, and a consumer-owned search form. |
| 404 | Recover from an unknown route without pretending content exists. | Clear not-found heading, short explanation, and useful return links. | Trending or related destinations when available. | Home, search, categories, and a small set of valid content destinations. |

### Search Decision

Search should be part of the information architecture, but its route should only ship when the consumer has a real static index, server endpoint, or external search provider. SayUI does not supply search behavior, query parsing, result ranking, or a general search form.

### 404 Decision

A 404 page should be included in the first deployable blog version. It is a routing requirement owned by the consumer and can be assembled from existing primitives without a dedicated SayUI component.

## Primitive Use By Page

### Home

| Primitive | Role |
| --- | --- |
| `ui-eyebrow` | Mark a featured category, editorial label, or short contextual status. |
| `ui-section-header` | Introduce latest, featured, or topic-based sections. Validate contextual variants at the target width. |
| `ui-byline` | Show compact authorship and publication metadata on prominent previews. |
| `ui-meta-list` | Show date, reading time, or views on repeated content summaries. |
| `ui-tag-list` | Present a short flat set of topics or category destinations. |
| `ui-trending-list` | Present a compact media-based trending module. Validate narrow-column density. |
| `ui-newsletter` | Offer newsletter signup as an independent content block. |

Article-preview wrappers, image treatment, and the page-level listing layout remain consumer markup. This plan does not define a generic card or grid primitive.

### Article

| Primitive | Role |
| --- | --- |
| `ui-eyebrow` | Show one category or editorial context above the article title. |
| `ui-byline` | Present compact authorship, date, source, or reading time. |
| `ui-meta-list` | Present additional equivalent metadata or structured publication facts. |
| `ui-toc` | Link to real headings in long articles without scrollspy. |
| `ui-section-header` | Introduce major article sections or secondary modules. Validate divider and inline treatments in context. |
| `ui-pullquote` | Present editorial quotations. Validate decorated/editorial treatments in narrow prose columns. |
| `ui-callout` | Present notes, tips, warnings, or contextual information distinct from quotations. |
| `ui-table` | Present semantic tabular content. |
| `ui-code-block` | Present code, commands, or configuration. |
| `ui-tag-list` | Present article topics or categories at the end of the article. |
| `ui-author-card` | Present an independent author profile block when needed. It remains Experimental and must not be treated as a replacement for `ui-article-sidebar__card`. |
| `ui-social-links` | Present author, editorial, contact, or channel destinations. Validate contrast and touch targets in its final surface. |
| `ui-related-list` | Present compact text-first related resources. |
| `ui-newsletter` | Offer subscription near the article conclusion or in complementary content. |
| `ui-comment` | Render each individual comment. |
| `ui-comment-form` | Render the comment-entry form when comments are enabled. |

Comments remain a documented composition: a semantic section, an external heading or `ui-section-header`, multiple `ui-comment` elements, and optionally `ui-comment-form`. There is no `ui-comment-list`.

### Category

| Primitive | Role |
| --- | --- |
| `ui-eyebrow` | Identify the page as a category or taxonomy view when useful. |
| `ui-section-header` | Present the category title and listing sections. |
| `ui-meta-list` | Present publication metadata on content summaries. |
| `ui-byline` | Add compact authorship to selected summaries. |
| `ui-tag-list` | Link to sibling categories or represent a flat category navigation with counts. |
| `ui-trending-list` | Add a compact trending module where space permits. |
| `ui-newsletter` | Offer subscription after or beside the listing. |

The listing order, pagination, and page layout belong to the consumer. `ui-tag-list` covers flat category navigation; SayUI does not add `ui-category-list`.

### Author

| Primitive | Role |
| --- | --- |
| `ui-author-card` | Present the author identity, role, short bio, and optional links as an independent block. Its use remains Experimental and requires contextual validation. |
| `ui-social-links` | Present social, contact, web, email, or RSS destinations. |
| `ui-section-header` | Introduce the author's latest or selected work. |
| `ui-byline` | Present compact authorship or source context on listed content where repetition remains useful. |
| `ui-meta-list` | Present publication dates or other brief content metadata. |
| `ui-eyebrow` | Present one short editorial category or expertise label. |
| `ui-tag-list` | Present a flat set of topics associated with the author. |
| `ui-related-list` | Present selected resources or related writing. |
| `ui-newsletter` | Offer subscription independently from the author profile. |

The author archive and its pagination remain consumer responsibilities. `ui-author-card` does not become a full profile-page system.

### Search

| Primitive | Role |
| --- | --- |
| `ui-section-header` | Present the query and result count or introduce suggested content. |
| `ui-eyebrow` | Identify the page as search context when useful. |
| `ui-meta-list` | Present metadata for each result. |
| `ui-byline` | Present compact authorship on selected results. |
| `ui-tag-list` | Offer flat category suggestions or query refinements as links, not as a complex active-filter system. |
| `ui-related-list` | Present text-first results or suggested resources when that density is appropriate. |
| `ui-trending-list` | Offer media-based fallback content in an empty state, with contextual validation. |
| `ui-callout` | Explain no-results or query limitations when the message is informational. |

The search input, submission method, query state, result ranking, pagination, and empty-state logic belong to the consumer. `ui-comment-form` and `ui-newsletter` must not be repurposed as search forms.

### 404

| Primitive | Role |
| --- | --- |
| `ui-eyebrow` | Provide a short non-critical error context such as `404`. |
| `ui-section-header` | Present the not-found heading and supporting description. |
| `ui-callout` | Provide concise recovery guidance when a distinct informational block is useful. |
| `ui-related-list` | Present a small set of valid text-first destinations. |
| `ui-trending-list` | Present current content when media-based recovery is appropriate. |
| `ui-tag-list` | Link to a small flat set of category destinations. |

The 404 route, HTTP status, and global recovery navigation remain consumer responsibilities.

## Coverage Matrix

| Primitive | Home | Article | Category | Author | Search | 404 |
| --- | --- | --- | --- | --- | --- | --- |
| `ui-section-header` | Yes | Yes | Yes | Yes | Yes | Yes |
| `ui-eyebrow` | Yes | Yes | Yes | Yes | Optional | Yes |
| `ui-meta-list` | Yes | Yes | Yes | Yes | Yes | No |
| `ui-tag-list` | Yes | Yes | Yes | Yes | Optional | Yes |
| `ui-pullquote` | No | Yes | No | No | No | No |
| `ui-newsletter` | Yes | Optional | Yes | Optional | No | No |
| `ui-author-card` | No | Optional | No | Yes | No | No |
| `ui-related-list` | Optional | Yes | Optional | Yes | Yes | Yes |
| `ui-byline` | Yes | Yes | Yes | Optional | Yes | No |
| `ui-comment` | No | Optional | No | No | No | No |
| `ui-comment-form` | No | Optional | No | No | No | No |
| `ui-trending-list` | Yes | Optional | Optional | No | Optional | Optional |
| `ui-social-links` | No | Optional | No | Yes | No | No |
| `ui-callout` | No | Yes | No | No | Optional | Optional |
| `ui-table` | No | Yes | No | No | No | No |
| `ui-code-block` | No | Yes | No | No | No | No |
| `ui-toc` | No | Optional | No | No | No | No |

## Real Gaps

The following needs are not covered by the listed primitives. They are consumer responsibilities or existing SayUI composition concerns, not automatic requests for new components.

| Gap | Where it appears | Current decision |
| --- | --- | --- |
| Page shell and responsive page layout | Every page | Consumer-owned semantic layout. Reuse existing SayUI layouts only through a separately approved integration decision. Do not create a generic grid. |
| Global header, primary navigation, and footer | Every page | Use consumer composition or approved original SayUI components outside this primitive-only map. No new primitive is justified. |
| Repeated article preview with optional media | Home, Category, Author, Search | Use semantic consumer markup or an approved original component. Do not introduce a generic card from this plan. |
| Search form and query behavior | Search and global navigation | Consumer-owned form and behavior. Do not create a general form system or reuse purpose-specific forms. |
| Pagination or result continuation | Category, Author, Search | Consumer-owned navigation based on the chosen rendering/data strategy. Repetition is not yet demonstrated as a SayUI contract. |
| Breadcrumbs or route trail | Article, Category, Author, Search | Optional consumer navigation. There is not enough evidence in the current scope to propose a component. |
| Empty states | Search and data-dependent sections | Use semantic text, headings, links, and optionally `ui-callout`. Do not create an empty-state system. |
| Comments grouping | Article | Use the documented composition of `ui-comment`; do not create `ui-comment-list`. |
| Flat categories with counts | Home, Category, sidebars | Use the documented `ui-tag-list` composition; do not create `ui-category-list`. |

No gap in this inventory demonstrates enough repeated, stable structure to add a new SayUI public component.

## Construction Priority

| Priority | Page | Reason |
| --- | --- | --- |
| 1 | Article | It exercises the broadest set of editorial and technical-content primitives and establishes the core reading experience. |
| 2 | Home | It establishes discovery, featured content, compact metadata, trending content, and newsletter placement. |
| 3 | Category | It reuses the Home listing language while validating flat taxonomy navigation with `ui-tag-list`. |
| 4 | Author | It validates independent use of the Experimental `ui-author-card` without treating it as an original-component migration. |
| 5 | 404 | It is required for deployment and can be assembled from already validated primitives with little content complexity. |
| 6 | Search | Build only after the consumer's search source and submission behavior are known; the visual result architecture can then reuse existing primitives. |

## Adoption Rules

- Use freely adoptable primitives directly in new blog compositions.
- Validate `ui-trending-list`, `ui-social-links`, `ui-section-header`, and `ui-pullquote` in their final width and surface.
- Treat `ui-author-card` as Experimental and independent.
- Do not use this plan to migrate or replace original SayUI component internals.
- Do not turn page-specific consumer markup into a SayUI component without demonstrated repetition and a separate approved contract.
- Keep navigation, routing, data, forms behavior, and search logic outside SayUI.
