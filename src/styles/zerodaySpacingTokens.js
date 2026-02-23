const pxToRem = (px) => `${px / 16}rem`;

export const figmaSpacingStyles = {
  "Spacing/spacing-6": 6,
  "Spacing/spacing-12": 12,
  "Spacing/spacing-60": 60,
  "Spacing/spacing-72": 72,
  "Spacing/spacing-84": 84,
  "Spacing/spacing-120": 120,
};

export const zerodaySpacingStyleToToken = {
  "Spacing/spacing-6": "spacing-6",
  "Spacing/spacing-12": "spacing-12",
  "Spacing/spacing-60": "spacing-60",
  "Spacing/spacing-72": "spacing-72",
  "Spacing/spacing-84": "spacing-84",
  "Spacing/spacing-120": "spacing-120",
};

export const zerodaySpacingTokens = Object.fromEntries(
  Object.entries(zerodaySpacingStyleToToken).map(([styleName, token]) => [
    `zd-${token}`,
    pxToRem(figmaSpacingStyles[styleName]),
  ]),
);
