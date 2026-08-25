---
name: game-studio
description: "Use when conceiving, building, reviewing, testing, optimizing, or preparing a game for release and the project targets a browser or uses Unreal Engine, Unity, Godot Engine, or GameMaker."
---

# Game Studio — processo de desenvolvimento de jogos

Use this skill to organize game work as a repeatable product-and-technology process. Preserve the project's existing conventions and inspect the actual project before prescribing engine-specific commands.

## Start with discovery

1. Identify the project, engine and version, target runtime, devices, current stage, repository state, build scripts, tests and release constraints.
2. For browser projects, read the relevant project knowledge vault when one exists. Prioritize browser manuals, platform guidelines, and project playbooks; do not load unrelated notes.
3. Read project-local `AGENTS.md`, `README.md`, package manifests, export profiles and contribution rules before editing.
4. Classify each statement as observed evidence, an engineering inference, a requirement, or an assumption that still needs verification.

## Use the production flow

Work through the smallest applicable sequence: concept and core loop → playable prototype → engine implementation → quality gates → platform adaptation → submission evidence. Keep the following layers separate:

- `base-game`: gameplay, content, progression and local save contracts that do not depend on a portal;
- `engine-layer`: engine scenes/assets/scripts/Blueprints/objects and engine lifecycle integration;
- `platform-adapter`: SDK, ads, pause/resume, consent, analytics and platform-specific input/orientation behavior;
- `submission-profile`: build configuration, metadata, covers, videos, privacy text and portal checklist.

Never add a platform SDK, ad call, analytics request or external resource to the base build merely because a platform may eventually require it. Use the platform reference only after the target platform and its current official requirements are known.

Apply the browser production and release gates from `references/quality-gates.md`. For projects in the Games vault, map the work to the vault's R.E.T.E.R. and B.S.M.P.A.L. processes, and record decisions/evidence in the vault without storing credentials.

## Route by engine

Read `references/engine-matrix.md` only for the detected engine. Its paths and commands are discovery heuristics, not proof of a project's structure or a target's support.

- Unreal Engine: establish target feasibility first, especially for browser delivery; do not equate web with HTML5, Pixel Streaming, cloud delivery or a wrapper.
- Unity: inspect packages, render pipeline, input, scenes, build profiles, stripping, size and memory before assuming WebGL/mobile behavior.
- Godot: inspect `project.godot`, renderer, export presets, templates, addons, scripts and resource loading before diagnosing an export.
- GameMaker: inspect the `.yyp`, target configuration, extensions, JavaScript, assets, input, scale and HTML5 export before prescribing release settings.
- Browser without a listed engine: treat the repository's actual HTML/CSS/JS/build structure as authoritative and run the browser-specific gates.

If an engine's target support or command is uncertain, stop assuming and verify the current official documentation or a local executable/project configuration before changing architecture.

## Route by platform and evidence

For CrazyGames, GamePix, GameDistribution, Poki or another portal, read `references/browser-platforms.md`, then revalidate the live official documentation. Maintain one profile per platform even when the game-base is shared. Distinguish these states in notes and reports: local build, GitHub artifact, portal upload, checklist/preview, submission, approval, publication and public behavior/metrics.

Mocks and local tests demonstrate integration shape only; they do not demonstrate approval, distribution or real-player retention. Do not claim those states without direct evidence.

## Autonomy and safety

Perform routine, reversible, in-scope inspection, implementation and local validation autonomously. Ask before destructive changes, new external authority, credential use, final external submission, publication, or an action whose target cannot be resolved safely. Preserve unrelated dirty work and stage only intended files when version control is in scope.

Do not port Claude Code repository conventions into Codex. In particular, do not invent `CLAUDE.md` requirements, slash commands, generic shell hooks, mass agent fleets or incompatible configuration as part of this skill.

## Supporting references

- [workflow](references/workflow.md): discovery, lifecycle, evidence and decision flow.
- [engine matrix](references/engine-matrix.md): focused engine heuristics and validation risks.
- [browser platforms](references/browser-platforms.md): shared build versus portal-specific profile.
- [quality gates](references/quality-gates.md): pass/needs-work/blocked criteria and evidence types.
