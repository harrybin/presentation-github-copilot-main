# Copilot Agent Instructions for This Codebase

## Project Overview

This is a Slidev-based presentation project (not a web app). The Vite/Vue stack is used only as a platform for rendering markdown-driven slides. All content and logic are markdown-centric.

## Key Structure & Workflow

- **Entrypoint:** `slides.md` (root) is the index for all slide decks. It links to other markdown files (e.g., `slides_Getting_the_Most_out_of_Copilot.md`, `slides_How_to_Boost_Your_Copilot.md`).
- **Slide Content:** Most slides are in markdown files in the root and in `slides/` (chapters, common slides). Each slide is separated by `---` (with or without frontmatter).
- **Frontmatter:** Use YAML frontmatter for slide config (see [Slidev docs](https://sli.dev/custom/#frontmatter)). Supported layouts: [builtin layouts](https://sli.dev/builtin/layouts).
- **Speaker Notes:** Notes are written as markdown comments. Only the last comment in a slide is used as the note. Custom notes can be set via `_note:` in frontmatter, referencing files in `speaker/%SLIDEV_SPEAKER%/notes/`.
- **Speaker Slides:** Add your profile and custom slides in `speaker/<handle>/` and reference in `.env` (`SLIDEV_SPEAKER`).
- **Custom Components:** Vue components in `components/` (e.g., `PartialWebContent.vue`) can be used in markdown for enhanced visuals.
- **Assets:** Images and media are in `public/`.
- **Styles:** Custom CSS in `styles/`.

## Project-Specific Patterns

- **Slide Syntax:** Slides must be separated by `---` and followed by a blank line. HTML tags (e.g., `<v-clicks>`) must be followed by a blank line.
- **Frontmatter Variables:** Use `_note:` for custom notes, `layout:` for slide layout, and other Slidev config options.
- **Speaker Note Logic:** See `setup/preparser.ts` for how notes are replaced at compile time.
- **Variable Replacement:** Use `%SLIDEV_SPEAKER%` and other variables in markdown; replaced at build by preparser.
- **Manual Indexing:** When adding new slide decks, update `slides.md` manually.

## Integration Points

- **External Packages:** Uses `@xebia` npm packages (requires PAT).
- **Theme:** Custom theme from Xebia (see README for link).
- **Slidev Framework:** All slide logic and rendering is via [Slidev](https://sli.dev/).

## Examples

- To add a new slide deck: create `slides_newtopic.md`, add to `slides.md` index.
- To add a custom speaker note: add `_note: speaker/<handle>/notes/note.md` to slide frontmatter.
- To use a custom Vue component: `<PartialWebContent />` in markdown.

## References

- [README.md](../README.md) for setup, speaker notes, and build/export details
- [Slidev documentation](https://sli.dev/guide/syntax)
- [Slidev components](https://sli.dev/builtin/components)
- [Theme repo](https://github.com/xebia/presentation-templates)

---

If any section is unclear or missing, please request clarification or provide feedback for further improvement.
