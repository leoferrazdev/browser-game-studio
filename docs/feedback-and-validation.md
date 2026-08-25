# Feedback and Validation

The public core is validated through reproducible use, not vanity metrics or embedded analytics.

## How to report feedback

Use GitHub Issues for:

- a reproducible bug in the skill, templates, or auditor;
- a reusable feature request supported by more than one workflow;
- a dated change in an official platform requirement.

Before opening an issue, run:

```powershell
npm test
npm run audit:release -- --build .\examples\minimal-build
```

Remove credentials, tokens, private URLs, account identifiers, screenshots of private dashboards, and raw browser history.

## Triage model

| Signal | Action |
| --- | --- |
| One-off project-specific request | Keep in the project, do not add to core |
| Reproducible defect | Fix in the public core with a regression test |
| Same need in two independent workflows | Consider a reusable feature |
| Official portal change | Update the dated platform profile and re-run audits |
| Repeated request with willingness to pay | Evaluate for the professional kit or service |

## Product validation gates

Do not create a paid module from a single request. A candidate feature must have:

1. a clear recurring problem;
2. evidence from at least two independent workflows or users;
3. a bounded implementation that does not compromise the public core;
4. a measurable reduction in release risk, time, or rework;
5. no dependency on credentials or undocumented portal behavior.

The professional kit and Release Readiness Sprint remain separate layers. The public core must stay useful without purchasing either layer.

## What is intentionally not measured here

This repository does not collect player telemetry, portal analytics, personal data, or automatic usage events. Game retention and monetization belong to the game project and its authorized platform dashboards, not to this toolkit.
