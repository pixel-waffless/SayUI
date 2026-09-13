# SayUI Internal v1

SayUI Internal v1 is the first internally releasable state of the framework-agnostic HTML, SCSS, and compiled CSS library.

The official project brand is **SayUI**, its expanded written form is **Sayu UI**, and its npm package name is `sayu-ui`. The distributed stylesheet filenames remain `sayui.css` and `sayui.min.css`.

## Summary

- 17 public primitives are implemented, documented, demonstrated, imported into the main Sass bundle, and available in compiled CSS.
- P5.1 comparative evaluations are complete: 9 mappings are `Migrable`, 1 is `Experimental`, and no mapping is `No migrar`.
- P5.2 responsive and contextual hardening is complete.
- P5.3 internal adoption guidance and the final adoption matrix are complete.
- P5.4 includes a complete six-page consumer blog demo.
- P5.5 synchronizes the standard and minified CSS distribution through the default build.

No original SayUI component was replaced or migrated in this release.

## Included Components

The 17 public primitives and reusable components included in this release are:

1. [`ui-section-header`](../components/ui-section-header.md)
2. [`ui-eyebrow`](../components/ui-eyebrow.md)
3. [`ui-meta-list`](../components/ui-meta-list.md)
4. [`ui-tag-list`](../components/ui-tag-list.md)
5. [`ui-pullquote`](../components/ui-pullquote.md)
6. [`ui-newsletter`](../components/ui-newsletter.md)
7. [`ui-author-card`](../components/ui-author-card.md)
8. [`ui-related-list`](../components/ui-related-list.md)
9. [`ui-byline`](../components/ui-byline.md)
10. [`ui-comment`](../components/ui-comment.md)
11. [`ui-comment-form`](../components/ui-comment-form.md)
12. [`ui-trending-list`](../components/ui-trending-list.md)
13. [`ui-social-links`](../components/ui-social-links.md)
14. [`ui-callout`](../components/ui-callout.md)
15. [`ui-table`](../components/ui-table.md)
16. [`ui-code-block`](../components/ui-code-block.md)
17. [`ui-toc`](../components/ui-toc.md)

Original editorial components remain current public SayUI compositions and continue to coexist with these components.

## Included Demos

- [Reusable Components Demo](../../src/demo/ui-components.html)
- [Blog Article](../../src/demo/blog-article.html)
- [Blog Home](../../src/demo/blog-home.html)
- [Blog Category](../../src/demo/blog-category.html)
- [Blog Author](../../src/demo/blog-author.html)
- [Blog 404](../../src/demo/blog-404.html)
- [Blog Search](../../src/demo/blog-search.html)

The blog pages are consumer compositions. They validate the use of SayUI without adding routing, application state, or new public primitives to the library.

## Adoption Status

### Adoptable

These components can be used freely in new internal compositions:

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

### Adoptable With Contextual Validation

These components are usable but should be checked in their final width, surface, or editorial context:

- `ui-trending-list`
- `ui-social-links`
- `ui-section-header`
- `ui-pullquote`

### Experimental

- `ui-author-card` is valid as an independent block, but it remains Experimental as a migration target for the author area inside `ui-article-sidebar`.

The complete policy is recorded in the [Component Coexistence Matrix](../component-coexistence.md). Adoption status does not authorize automatic migration of original component markup.

## Important Decisions

- No generic card component was created.
- No generic grid component was created.
- No `ui-category-list` was created; flat category navigation uses the documented `ui-tag-list` composition.
- No `ui-comment-list` was created; comment groups remain a documented semantic composition using `ui-comment`.
- No general form system was created; `ui-newsletter` and `ui-comment-form` keep purpose-specific contracts.
- No SayUI icon system or required icon pack was created.
- No original component migration was executed.

Cards, grids, search results, filters, profile-page structure, error presentation, and empty states remain consumer layout or application responsibilities.

## Build

Run:

```bash
npm run build
```

The command regenerates both distribution bundles from `src/styles/main.scss`:

- `dist/css/sayui.css`
- `dist/css/sayui.min.css`

The minified bundle is synchronized with the standard bundle and includes all 17 public components.

## Known Risks

- `ui-author-card` remains Experimental for migration into the existing article-sidebar shell because that context owns additional surface, spacing, and sticky behavior.
- Demo form endpoints such as `/comments` and `/newsletter/subscribe` require a real backend or external form service. GitHub Pages does not process them.
- Manual visual review remains recommended for narrow sidebars, dark surfaces, inline section headers, decorated pullquotes, and other context-sensitive treatments.

## Suggested Next Steps

- Present the completed pages and component gallery as an internal demo.
- Perform manual visual validation across representative browsers and viewport widths.
- Base any later roadmap only on demonstrated consumer gaps and explicitly approved migration needs.

SayUI Internal v1 is ready for internal release and demonstration.
