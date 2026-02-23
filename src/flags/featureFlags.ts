export type FeatureFlagKey = "exp_ui_button_v2";

export type FeatureFlags = Record<FeatureFlagKey, boolean>;

export const DEFAULT_FLAGS: FeatureFlags = {
  exp_ui_button_v2: false,
};

export function mergeFlags(overrides?: Partial<FeatureFlags>): FeatureFlags {
  return {
    ...DEFAULT_FLAGS,
    ...overrides,
  };
}
