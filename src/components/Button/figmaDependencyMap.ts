export type FigmaDependencyMapping = {
  figmaName: string;
  figmaNodeId: string;
  level: number;
  codeComponent: string;
  filePath: string;
  notes?: string;
};

export const buttonSmallDefaultDependencyMap: FigmaDependencyMapping[] = [
  {
    figmaName: "button-small/default",
    figmaNodeId: "235:4118",
    level: 0,
    codeComponent: "ButtonSmallDefault",
    filePath: "src/components/Button/ButtonSmallDefault.tsx",
    notes: "Main DS component. Handles small size + default variant states.",
  },
  {
    figmaName: "Status=default, Dark mode=false",
    figmaNodeId: "235:4119",
    level: 1,
    codeComponent: "ButtonSmallDefault state=default",
    filePath: "src/components/Button/ButtonSmallDefault.tsx",
  },
  {
    figmaName: "Status=hover, Dark mode=false",
    figmaNodeId: "235:4121",
    level: 1,
    codeComponent: "ButtonSmallDefault state=hover",
    filePath: "src/components/Button/ButtonSmallDefault.tsx",
  },
  {
    figmaName: "Status=focus, Dark mode=false",
    figmaNodeId: "235:4123",
    level: 1,
    codeComponent: "ButtonSmallDefault state=focus",
    filePath: "src/components/Button/ButtonSmallDefault.tsx",
  },
  {
    figmaName: "Status=press, Dark mode=false",
    figmaNodeId: "235:4125",
    level: 1,
    codeComponent: "ButtonSmallDefault state=press",
    filePath: "src/components/Button/ButtonSmallDefault.tsx",
  },
  {
    figmaName: "Status=disabled, Dark mode=false",
    figmaNodeId: "235:4127",
    level: 1,
    codeComponent: "ButtonSmallDefault state=disabled",
    filePath: "src/components/Button/ButtonSmallDefault.tsx",
  },
  {
    figmaName: "icon-left",
    figmaNodeId: "2720:2335",
    level: 1,
    codeComponent: "ButtonIconSlot (left)",
    filePath: "src/components/Button/ButtonIconSlot.tsx",
    notes: "Slot can receive caller-provided icon via iconLeft.",
  },
  {
    figmaName: "icon-right",
    figmaNodeId: "2720:2336",
    level: 1,
    codeComponent: "ButtonIconSlot (right)",
    filePath: "src/components/Button/ButtonIconSlot.tsx",
    notes: "Slot can receive caller-provided icon via iconRight.",
  },
  {
    figmaName: "example",
    figmaNodeId: "1408:5446",
    level: 2,
    codeComponent: "ButtonDefaultIcon",
    filePath: "src/components/Button/ButtonDefaultIcon.tsx",
    notes: "Shared fallback icon for slot visibility when no icon is passed.",
  },
  {
    figmaName: "Button 1",
    figmaNodeId: "style-variable",
    level: 1,
    codeComponent: "ButtonLabel",
    filePath: "src/components/Button/ButtonLabel.tsx",
    notes: "Typography tokenized in src/styles/zerodayTextTokens.js as zd-text-button-1.",
  },
];

export const unresolvedButtonSmallDefaultDependencies: Array<{
  parentNodeId: string;
  missingDependency: string;
}> = [];
