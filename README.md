# Simulation App Scaffold

Local-only React + Tailwind + Storybook environment for desktop web ideation.

## Run Locally

1. Install dependencies:
   - `npm install`
2. Run the app:
   - `npm run dev`
3. Open:
   - `http://localhost:5173/` for baseline
   - `http://localhost:5173/exp` for experiments

## Storybook

1. Start Storybook:
   - `npm run storybook`
2. Open:
   - `http://localhost:6006`
3. Included stories:
   - `DS/Button Small/Default`
   - `Design Tokens/Colors`
   - `Design Tokens/Typography`
   - `Design Tokens/Spacing`

## Design Tokens

- Colors: `src/styles/zerodayColorTokens.js`
- Typography: `src/styles/zerodayTextTokens.js`
- Spacing: `src/styles/zerodaySpacingTokens.js`
- Raw imported style snapshots:
  - `docs/zeroday-color-styles.raw.json`
  - `docs/zeroday-text-styles.raw.json`
  - `docs/zeroday-spacing-styles.raw.json`
- Tailwind spacing utility usage:
  - `p-zd-spacing-12`
  - `m-zd-spacing-60`
  - `gap-zd-spacing-6`

## Feature Flags

- Central typed flags file: `src/flags/featureFlags.ts`
- Example flag: `exp_ui_button_v2`
- Baseline default:
  - `exp_ui_button_v2: false`
- Experiment override:
  - enabled under `/exp/*` via `FeatureFlagProvider` override

## Folder Conventions

- `src/app`: app shell and top-level routing
- `src/routes`: baseline and experiment route surfaces
- `src/components`: reusable UI components
- `src/flags`: typed feature flags and provider/hooks
- `src/data`: local fake DB fixtures and deterministic loaders
- `src/stories`: Storybook stories
- `docs/experiments`: experiment log and architecture decisions

## Constraints

- Desktop-focused layouts only
- No auth or backend integration
- Local deterministic mock data only
