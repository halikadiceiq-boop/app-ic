import { createContext, useContext, useMemo, type ReactNode } from "react";
import { DEFAULT_FLAGS, mergeFlags, type FeatureFlagKey, type FeatureFlags } from "./featureFlags";

const FeatureFlagsContext = createContext<FeatureFlags>(DEFAULT_FLAGS);

type FeatureFlagProviderProps = {
  children: ReactNode;
  overrides?: Partial<FeatureFlags>;
};

export function FeatureFlagProvider({ children, overrides }: FeatureFlagProviderProps) {
  const value = useMemo(() => mergeFlags(overrides), [overrides]);
  return <FeatureFlagsContext.Provider value={value}>{children}</FeatureFlagsContext.Provider>;
}

export function useFeatureFlag(flag: FeatureFlagKey): boolean {
  const flags = useContext(FeatureFlagsContext);
  return flags[flag];
}
