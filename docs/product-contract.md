# Product Contract

Browser Game Studio is the public core of a Game Studio OS for AI-assisted browser-game production.

## Boundaries

- `base-game` owns gameplay, content, progression, and local save contracts.
- `engine-layer` owns engine-specific scenes, assets, scripts, and lifecycle integration.
- `platform-adapter` owns portal SDKs, ads, consent, pause/resume, and analytics.
- `submission-profile` owns build configuration, metadata, media, and portal checklist state.
- Local tools are read-only over the inspected build and never upload or call external services.

## Evidence states

Reports must distinguish `local`, `repository`, `portal`, `review`, `published`, and `metrics`. Passing a local audit is not proof of portal approval or public distribution.

## Product status

This repository is the public core. Premium updates, private platform maintenance, support, audits, and implementation services are separate product layers and are not implied by this repository.
