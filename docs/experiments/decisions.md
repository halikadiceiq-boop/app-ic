# Experiment Decisions

## 2026-02-23

- Decision: keep feature flags in a typed central file at `src/flags/featureFlags.ts`.
- Decision: default all experiment flags to OFF in baseline routes.
- Decision: use deterministic local fake data loader for repeatable simulation behavior.
- Decision: isolate experiments under `/exp/*` route namespace and equivalent Storybook stories.
