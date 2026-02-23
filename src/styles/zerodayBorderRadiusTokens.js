const pxToRem = (px) => `${px / 16}rem`;

export const borderRadiusTokens = {
  "borderRadius-2": 2,
  "borderRadius-4": 4,
  "borderRadius-6": 6,
  "borderRadius-8": 8,
};

export const zerodayBorderRadiusTokens = Object.fromEntries(
  Object.entries(borderRadiusTokens).map(([token, valuePx]) => [
    `zd-${token}`,
    pxToRem(valuePx),
  ]),
);
