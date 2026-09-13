# Component Coexistence Matrix

This document defines the official coexistence policy between SayUI's original public components and newer reusable primitives.

Modern primitives do not make original components legacy. Original components remain public compositions unless a future migration is designed, documented, tested in demos, and explicitly approved.

## Official Status Criteria

| Status | Meaning |
| --- | --- |
| Implementado | The public component exists with HTML, SCSS, documentation, bundle import, and demo coverage. This does not approve migration of an original pattern. |
| Conviven | The primitive and original pattern can exist side by side. No migration is expected. |
| Experimental en demo | The primitive is close enough to an original pattern to test visually in demos before any real migration. |
| Migracion futura posible | The primitive could replace or standardize part of an original component later, after contract approval. |
| Migrable | P5.1 confirmed that a specific original pattern could adopt the primitive after a separate migration contract is approved. |
| Experimental | P5.1 confirmed meaningful overlap, but the compared pattern still needs further evaluation before adoption. |
| No comparado | The primitive did not receive an official comparative result in P5.1. |
| No migrar | The overlap is superficial or semantically incorrect. The primitive should not replace the original pattern. |
| Requiere contrato futuro | Another component or integration contract is needed before deciding whether migration makes sense. |

## Official Matrix

| Modern primitive | Related original patterns | Official status | Justification | Adoption risk | Potential benefit | Future dependencies | Before real migration |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `ui-section-header` | `ui-main__heading`, `ui-sidebar__section-title`, `ui-article-sidebar__section-title`, `ui-article-related__header`, `ui-article-main__section-title` | Migrable for `ui-article-main__section-title`; other mappings No comparado | P5.1 confirmed equivalent responsibility for the article-main section title. Other heading contexts were not evaluated. | Low for the compared pattern | A shared section-heading contract could reduce repeated title patterns. | Separate comparison for each remaining heading context. | Approve a specific adoption contract; do not generalize the result to untested headings. |
| `ui-eyebrow` | `ui-banner__eyebrow`, `ui-post-card__eyebrow`, `ui-article-hero__eyebrow`, `ui-article-related__category`, `ui-article-sidebar__category` | No comparado | It remains implemented and independent, but P5.1 did not issue a comparative result. | Unclassified | Strong reuse for labels and category markers. | Comparative evidence. | Compare a specific original pattern before assigning adoption status. |
| `ui-meta-list` | `ui-post-card__meta`, `ui-banner__meta`, `ui-sidebar__item-meta`, `ui-article-hero__meta-group`, `ui-article-main__meta` | No comparado | P5.1 did not evaluate metadata adoption. | Unclassified | Standard metadata semantics, separators, and `time datetime` usage. | Comparative evidence and metadata scope boundaries. | Compare simple metadata independently from structured hero/article metadata. |
| `ui-tag-list` | `ui-article-main__tags`, `ui-article-sidebar__tags`, `ui-sidebar__categories` | No comparado | P5.1 did not evaluate tag adoption. The official category composition remains documentation only. | Unclassified | Shared tag/category contract and accessible interactive states. | Comparative evidence. | Test article tags separately before considering adoption. |
| `ui-pullquote` | `ui-article-main__quote` | Migrable | P5.1 confirmed direct visual, structural, and semantic equivalence through the editorial variant. | Low | A reusable quote component for articles and editorial pages. | Specific migration contract. | Preserve quote content, cite, and decorative-mark behavior during any future adoption. |
| `ui-newsletter` | `ui-sidebar__newsletter` | Migrable | P5.1 confirmed the same dark signup responsibility with a more explicit form contract. | Medium | Reusable newsletter block outside sidebars. | Specific sidebar adoption contract. | Preserve sidebar width/context and approve the semantic markup change. |
| `ui-author-card` | `ui-article-sidebar__author` | Experimental | P5.1 confirmed meaningful overlap, but the original author block still shares its shell with the larger sidebar card. | Medium | Reusable author presentation for sidebars and editorial contexts. | Further evaluation of shell ownership and link treatment. | Keep it in evaluation; do not treat it as approved for adoption. |
| `ui-byline` | `ui-banner__author`, partial author/metadata patterns in `ui-article-hero` | Migrable for `ui-banner__author` | P5.1 confirmed equivalent compact authorship responsibility. The article-hero relationship was not compared. | Low for the compared pattern | Standard compact authorship across banners and previews. | Specific banner adoption contract. | Preserve banner-owned padding and dividers; do not extend the result to article hero automatically. |
| `ui-comment` | Comment blocks inside `ui-article-main` | Migrable | P5.1 confirmed direct responsibility alignment with improved native semantics. | Low | Reusable, accessible comment markup outside article-main. | Specific article-main adoption contract. | Keep the surrounding comments composition unchanged unless separately approved. |
| `ui-comment-form` | `ui-article-main__comment-form`, `ui-article-main__textarea`, `ui-article-main__submit` | Migrable | P5.1 confirmed equivalent responsibility and a stronger semantic form contract. | Medium | Reusable and accessible comment-entry form independent from article-main. | Form integration and article-main adoption contract. | Approve the structural change from a visual block to a real form before adoption. |
| `ui-related-list` | `ui-article-sidebar__list`, `ui-article-related` | Migrable for `ui-article-sidebar__list` | P5.1 confirmed the compact textual list. The related-card grid remains a different, untested pattern. | Medium | Reusable compact related-content lists. | Specific sidebar-list adoption contract. | Preserve editorial spacing and do not apply the result to card grids. |
| `ui-trending-list` | `ui-sidebar__trending-list` | Migrable | P5.1 confirmed equivalent media, title, and metadata responsibility. | Medium | Reusable trending/editorial recommendation lists outside the composed sidebar. | Specific sidebar adoption contract. | Preserve sidebar-owned width and padding during any future adoption. |
| `ui-social-links` | `ui-article-sidebar__social`, `ui-footer__socials`, `ui-footer-editorial__social`, `ui-author-card__links` | Migrable for `ui-article-sidebar__social`; other mappings No comparado | P5.1 confirmed the article-sidebar link group. Footer and author-card contexts were not evaluated. | Low for the compared pattern | Shared accessible social/contact link groups. | Separate footer and author-card comparisons. | Do not generalize the result to dark or footer contexts. |
| `ui-callout` | `ui-article-main__principle`, `ui-sidebar__newsletter`, `ui-article-main__quote` | No comparado | P5.1 did not compare it. Its existing semantic boundary still keeps it independent from quotes, newsletters, and numbered principles. | High if forced | Useful for technical/editorial notes as a separate pattern. | None for current coexistence. | Keep it independent. |
| `ui-table` | Future article/docs tabular content | No comparado | It has no current original equivalent requiring migration. | Low | Better technical/documentation content support. | None. | Continue independent use. |
| `ui-code-block` | Future article/docs code content | No comparado | It has no current original equivalent requiring migration. | Low | Better technical content support without JavaScript. | None. | Continue independent use. |
| `ui-toc` | `ui-article-sidebar`, docs sidebar navigation | No comparado | P5.1 did not evaluate sidebar integration. | Medium | Reusable table of contents for long content. | Future sidebar integration contract. | Define its relationship with editorial sidebars before adoption. |

## P5.1 Summary

P5.1 is complete:

- 9 comparisons are `Migrable`.
- 1 comparison is `Experimental`.
- 0 comparisons are `No migrar`.

`ui-author-card` remains under evaluation. The primitives not compared in P5.1 are `ui-eyebrow`, `ui-meta-list`, `ui-tag-list`, `ui-callout`, `ui-table`, `ui-code-block`, and `ui-toc`.

No migration has been executed. No original component has been replaced. Every result records only the viability of a future, separately approved adoption.

## P5.2 Responsive And Contextual Closure

P5.2 is technically complete. It reviewed responsive behavior, narrow and wide contexts, wrapping, focus, box sizing, density, and composition risks for the primitives that received comparative attention.

`Adoptable` in this section means that a primitive can be used in new compositions without a known blocking technical defect. It does not authorize replacement of an original pattern.

| Component | Final risk | Adoptable in new compositions | Key contextual note |
| --- | --- | --- | --- |
| `ui-byline` | Low | Yes | Compact authorship and metadata wrap safely in narrow contexts. |
| `ui-related-list` | Low | Yes | Stable vertical list; compact treatment fits sidebars well. |
| `ui-trending-list` | Medium | With caution | Use controlled widths or compact treatment in very narrow sidebars. |
| `ui-social-links` | Medium | With caution | Validate contrast on dark surfaces and touch targets in compact/bare treatments. |
| `ui-section-header` | Low/medium | With caution | Base and compact are stable; inline, related, and divider layouts remain context-sensitive. |
| `ui-pullquote` | Low/medium | With caution | Box sizing is fixed; editorial spacing and decorative mark still need suitable article width. |
| `ui-newsletter` | Low | Yes | Root, input, and submit no longer depend on a global reset for sizing. |
| `ui-comment` | Low/medium | Yes | Simple replies adapt on mobile; unusually narrow containers can remain dense. |
| `ui-comment-form` | Low | Yes | Form, textarea, actions, focus, and sizing are self-contained. |
| `ui-author-card` | Medium | With caution / Experimental | Independent use is valid, but adoption inside `ui-article-sidebar__card` would duplicate the editorial shell. |

### P5.2 Microcorrections

- Added local `box-sizing: border-box` to `ui-section-header` and `ui-pullquote`.
- Added local box sizing to `ui-newsletter`, its input, and its submit button.
- Added local box sizing, defensive wrapping, a larger reply target, and reduced mobile reply indentation to `ui-comment`.
- Added local box sizing, defensive text wrapping, and narrow-screen editorial padding/avatar adjustments to `ui-author-card`.

### Remaining Contextual Risks

- Media-heavy lists need controlled width in very narrow columns.
- Social links need contextual contrast review on dark surfaces.
- Inline or decorated editorial treatments can become dense in narrow containers.
- `ui-author-card` must not be nested directly inside the existing `ui-article-sidebar__card` shell without a separately approved adoption contract.

No migration occurred during P5.2. Original components remain current public compositions. Adoptable primitives may be used in new compositions, while any future migration of original markup still requires explicit approval.

## Final Internal Adoption Matrix

This is the official internal-consumption matrix used by the implemented blog demos and future internal compositions.

### Use Freely In New Compositions

- `ui-byline`
- `ui-related-list`
- `ui-newsletter`
- `ui-comment`
- `ui-comment-form`
- `ui-eyebrow`
- `ui-meta-list`
- `ui-tag-list`
- `ui-callout`
- `ui-table`
- `ui-code-block`
- `ui-toc`

### Use With Contextual Validation

- `ui-trending-list`: validate width and density in narrow sidebars.
- `ui-social-links`: validate contrast and touch targets in dark or compact contexts.
- `ui-section-header`: validate inline, related, and divider treatments in the target container.
- `ui-pullquote`: validate editorial spacing and the decorative mark in narrow articles.

### Experimental

- `ui-author-card`: it can be used as an independent block, but it is not a direct replacement for `ui-article-sidebar__card`.

The blog may consume adoptable primitives directly in new compositions. This matrix does not authorize automatic migration of original components. Original components remain current public SayUI APIs, and any replacement of their internal patterns belongs to a later, explicitly approved migration.

Copyable component examples and `src/demo/ui-components.html` no longer use empty `href="#"` destinations. The string remains only where documentation explicitly identifies it as an antipattern.

## Must Remain Independent

These components should remain independent and should not be used as replacements for original editorial compositions:

- `ui-callout`
- `ui-table`
- `ui-code-block`
- `ui-toc`

`ui-callout` is especially important: it must not absorb quotes, newsletter blocks, or article principles just because they are visually emphasized blocks.

## Documented Compositions And Boundaries

P4 intentionally avoids creating components where a documented composition is sufficient:

- SayUI does not include `ui-category-list` in v1. Flat vertical categories with counts use `ui-tag-list`, `ui-tag-list--stacked`, and `ui-tag-list--with-count`.
- `ui-sidebar__categories` remains part of the current `ui-sidebar` contract and is not migrated automatically.
- SayUI does not include `ui-comment-list` in v1. Comment groups use a semantic `section`, an external heading or `ui-section-header`, and multiple `article.ui-comment` elements.
- A future `ui-comment-list` would require additional needs such as official list spacing, an empty state, a divided variant, or formal integration with a comment form.
- SayUI does not include a general form system. `ui-comment-form` is specific to writing comments, while `ui-newsletter` retains its own subscription contract.
- Sidebar table-of-contents integration still requires a future adoption contract before `ui-toc` becomes part of an original sidebar composition.

## Migration Rule

No primitive should replace an original component pattern directly.

The required order is:

1. Test the primitive visually in a demo.
2. Document the equivalence and limitations.
3. Approve the migration contract.
4. Update one low-risk pattern first.
5. Verify demos and compiled CSS.

Until those steps happen, original patterns and modern primitives coexist.

## P4 Closure Status

P4 is closed for implementation and public contracts.

The modern primitives completed through P4 are implemented, documented, included in the complete Sass bundle, and represented in the reusable-components demo. Their existence does not make original SayUI components legacy. Original components remain public compositions with valid current contracts.

Real migrations remain blocked until all of the following happen:

1. A comparative demo presents the primitive beside the original pattern.
2. Visual and responsive equivalence is reviewed and approved.
3. Semantic and accessibility differences are documented.
4. A specific adoption contract defines compatibility and migration scope.

P5.1 is closed for comparative demos and official classification. P5.2 is closed for responsive and contextual technical review. Any later migration remains blocked until a specific migration contract and implementation scope are explicitly approved.

The official P5.1 results, evaluation criteria, untested components, and executed lots are documented in the historical [P5 Comparative Evaluation Plan](history/p5-comparison-plan.md).
