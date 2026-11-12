# Tracy Anne Griffin Manning — AI Architect

Public portfolio: https://tam-ds.github.io/

**Understand the workflow. Then build the AI.**

Try the [interactive BALLAST walkthrough](https://tam-ds.github.io/demo.html). It replays four synthetic scenarios exported by the actual Python engine. No credentials are required. It is a static browser demonstration, not a hosted Python backend or live operational system.

## Build source and drift check

- `templates/index.html`: curated homepage source. Edit this file, not generated `index.html`.
- `build.py`: generates the homepage from that template plus Approach, Evidence, robots.txt, and llms.txt.
- `projects.js`, `explorer.js`, `styles.css`: evidence explorer data and presentation.
- `demo.html`, `demo.js`, `demo.css`: standalone interactive walkthrough.
- `demo-fixtures.json`: exported Python results with source-file hashes. Regenerate from the BALLAST repository using `python scripts/export_demo.py /path/to/this/repo/demo-fixtures.json`.

```bash
python build.py
python -m unittest discover -s tests -v
git diff --exit-code -- index.html approach.html evidence.html robots.txt llms.txt
```

CI performs this build-drift check on every push and pull request. GitHub Pages serves `main` at the repository root; retain `.nojekyll`.
