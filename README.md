# Browser Game Studio

Reusable, AI-assisted workflow for building, validating, and preparing browser games for distribution.

This repository is the public core of the Game Studio OS. It is intentionally browser-first, engine-agnostic at the workflow level, and designed for small games that need fast loading, reliable input, clear onboarding, platform-specific builds, and evidence-based QA.

## What it provides

- `skill/game-studio/`: Codex-compatible skill router and references.
- `templates/`: project, platform, validation, and submission records.
- `platforms/`: dated operational summaries for common browser-game portals.
- `tools/audit-release.mjs`: dependency-free local package auditor.
- `examples/`: valid and invalid fixtures for the auditor.

## What it does not promise

This toolkit does not guarantee portal approval, publication, distribution, revenue, player retention, or monetization. Portal requirements change; always verify the current official documentation before submission.

It does not upload builds, use credentials, call portal APIs, or make network requests from the auditor.

## Quick start

Requirements: Node.js 22 or newer.

```powershell
npm test
npm run audit:release -- --build .\examples\minimal-build
```

Audit a platform package:

```powershell
node tools/audit-release.mjs --build .\path\to\build --platform crazygames
```

The auditor checks for a root `index.html`, total package size, and known cross-platform SDK markers. It is a local readiness signal, not a portal certification.

## Recommended workflow

1. Define the audience, core loop, first input, reward, progression, and return motivation.
2. Keep the game core independent from portal SDKs, ads, analytics, and external requests.
3. Create one build profile per portal.
4. Run automated tests and local package audits.
5. Test desktop, mobile, orientation, input, audio, pause, storage, and loading.
6. Run the portal Preview Tool or equivalent QA.
7. Record local, repository, portal, review, publication, and metrics states separately.

## Platform profiles

The profiles are operational summaries, not copied manuals. Each profile includes a source and a revalidation warning. Treat portal documentation as volatile.

## Feedback

Use [GitHub Issues](https://github.com/leoferrazdev/browser-game-studio/issues) for reproducible bugs, reusable feature requests, and dated platform requirement changes. See [`docs/feedback-and-validation.md`](docs/feedback-and-validation.md) before opening an issue.

## Scope

The core workflow can later receive adapters for Unity, Godot, GameMaker, or Unreal. Those adapters are not bundled until their browser export behavior and release requirements are validated independently.

## License

The public core is released under the MIT License. Platform names and documentation remain subject to their respective owners' terms.
