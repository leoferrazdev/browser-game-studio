# Changelog

All notable changes to the public core are documented here.

## [0.1.0] — 2026-08-25

First stable public release of the Browser Game Studio core.

### Added

- Codex-compatible `game-studio` skill router.
- Workflow references for browser games, engines, quality gates, and platform profiles.
- Reusable project, platform, validation, and submission templates.
- Operational summaries for CrazyGames, GamePix, GameDistribution, and Poki.
- Dependency-free local release auditor.
- Valid, missing-root, and cross-platform SDK fixtures.
- GitHub Issue templates for bugs, reusable features, and platform requirement changes.
- Public feedback and validation policy.

### Verification

- Node.js 22 test suite: 3 passing tests.
- Valid fixture: accepted.
- Missing `index.html` fixture: rejected.
- Cross-platform SDK marker fixture: rejected.
- Public reference scan: clean.

### Known limitations

- The auditor does not certify portal approval or publication.
- Platform requirements must be revalidated against official documentation.
- No portal upload, account automation, player telemetry, or external analytics is included.
- Engine adapters and professional modules are not part of this release.
