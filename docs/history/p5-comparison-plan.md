# P5 Comparative Evaluation Plan

This document is the official inventory, execution policy, and closure record for P5.1 comparative evaluation.

P5.1 compares modern SayUI primitives with related original public patterns. It does not migrate, replace, rename, or remove original components. Comparative demos are evidence for future decisions, not migration approval by themselves.

## Official P5.1 Results

P5.1 is complete. The following comparisons were mounted, audited for fidelity, and given an official coexistence result:

| Modern component | Original pattern | Result | Adoption risk |
| --- | --- | --- | --- |
| `ui-byline` | `ui-banner__author` | `Migrable` | Low |
| `ui-related-list` | `ui-article-sidebar__list` | `Migrable` | Medium |
| `ui-trending-list` | `ui-sidebar__trending-list` | `Migrable` | Medium |
| `ui-social-links` | `ui-article-sidebar__social` | `Migrable` | Low |
| `ui-section-header` | `ui-article-main__section-title` | `Migrable` | Low |
| `ui-pullquote` | `ui-article-main__quote` | `Migrable` | Low |
| `ui-newsletter` | `ui-sidebar__newsletter` | `Migrable` | Medium |
| `ui-comment` | `ui-article-main__comment` | `Migrable` | Low |
| `ui-comment-form` | `ui-article-main__comment-form` | `Migrable` | Medium |
| `ui-author-card` | Author block inside `ui-article-sidebar` | `Experimental` | Medium |

These results describe future adoption viability only. No migration has been executed, and no original component has been replaced.

## Not Compared In P5.1

The following implemented components did not receive an official comparison result in P5.1:

- `ui-eyebrow`
- `ui-meta-list`
- `ui-tag-list`
- `ui-callout`
- `ui-table`
- `ui-code-block`
- `ui-toc`

The `Migrable` result for `ui-social-links` applies only to `ui-article-sidebar__social`. Footer social patterns were not compared. The `Migrable` result for `ui-section-header` applies only to `ui-article-main__section-title`; the other original heading patterns remain unclassified by P5.1.

## Official Evaluation Criteria

Every comparison must evaluate the following dimensions:

### Visual fidelity

- Overall visual intent.
- Shape, borders, backgrounds, and emphasis.
- Whether the primitive preserves the recognizable role of the original pattern.
- Whether differences are intentional improvements or incompatible changes.

### Spacing

- Internal padding and gaps.
- External rhythm in the original context.
- Alignment with surrounding content.
- Behavior in narrow and wide containers.

### Typography

- Font size, weight, line height, case, and letter spacing.
- Heading or text hierarchy.
- Readability at equivalent content lengths.

### Responsive behavior

- Mobile and desktop presentation.
- Wrapping, stacking, overflow, and minimum sizes.
- Behavior inside the original layout context.
- Dependence on parent width or original component selectors.

### Accessibility

- Native semantic structure.
- Accessible names and relationships.
- Keyboard interaction and visible focus where applicable.
- Image alternatives, `time datetime`, labels, and decorative content.
- Any accessibility improvement that would change the original contract.

### Migration risk

- Markup incompatibility.
- Selector or cascade conflicts.
- Visual regressions.
- Responsive regressions.
- Accessibility regressions.
- Effects on demos, documentation, and consumer-facing contracts.

Each comparison should record concise evidence for all six criteria. Similar appearance alone is not enough to approve migration.

## Allowed Results

Every comparison must end with exactly one of these results:

| Result | Meaning |
| --- | --- |
| `Convive` | Both patterns remain valid for different contexts. No replacement is proposed. |
| `Experimental` | The relationship is promising but needs more visual, responsive, or contract validation. |
| `Migrable` | A future controlled adoption is reasonable after a specific migration contract is approved. |
| `No migrar` | Semantics, visual role, composition, or risk make replacement inappropriate. |

`Migrable` does not authorize a code change. It only permits a later migration proposal.

## Components Without A P5.1 Comparison

The following proposed components do not exist in SayUI v1 and were not evaluated:

- `ui-category-list`: flat vertical categories with counts use the documented `ui-tag-list` composition.
- `ui-comment-list`: comment groups use the documented semantic composition with multiple `ui-comment` components.

## Executed Lots

### Lot 1

- `ui-byline` compared with `ui-banner__author`
- `ui-related-list` compared with `ui-article-sidebar__list`

### Lot 2

- `ui-trending-list` compared with `ui-sidebar__trending-list`
- `ui-social-links` compared with `ui-article-sidebar__social`

### Lot 3

- `ui-section-header` compared with `ui-article-main__section-title`
- `ui-pullquote` compared with `ui-article-main__quote`

### Lot 4

- `ui-newsletter` compared with `ui-sidebar__newsletter`
- `ui-author-card` compared with the author block inside `ui-article-sidebar`

### Lot 5

- `ui-comment` compared with `ui-article-main__comment`
- `ui-comment-form` compared with `ui-article-main__comment-form`

## P5.1 Operating Rules

- Original components remain unchanged during comparative evaluation.
- Comparative demos must isolate the primitive and original pattern without altering either internal contract.
- Demo-only layout must use `demo-*` classes and must not enter the public bundle.
- A result must be documented before any adoption proposal.
- No migration may be implemented without separate explicit approval.
- P5.1 favors controlled validation over additional component extraction.

## P5.1 Summary

- 9 comparisons are `Migrable`.
- 1 comparison is `Experimental`.
- 0 comparisons are `No migrar`.
- 7 implemented components are `No comparado` in P5.1.

P5.1 is closed in documentation and comparative evaluation. `Migrable` does not mean migrated: every real adoption still requires a separately approved contract and implementation scope. Original components remain first-class public SayUI compositions.
