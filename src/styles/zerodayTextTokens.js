const pxToRem = (px) => `${px / 16}rem`;

export const figmaTextStyles = {
  "Headlines/Headline 1": {
    fontFamily: "Gotham",
    fontStyle: "Medium",
    fontWeight: 500,
    fontSizePx: 26,
    lineHeightPx: 32,
    letterSpacingPx: 0,
  },
  "Headlines/Headline 2": {
    fontFamily: "Gotham",
    fontStyle: "Medium",
    fontWeight: 500,
    fontSizePx: 23,
    lineHeightPx: 28,
    letterSpacingPx: 0,
  },
  "Headlines/Headline 3": {
    fontFamily: "Gotham",
    fontStyle: "Medium",
    fontWeight: 500,
    fontSizePx: 20,
    lineHeightPx: 25,
    letterSpacingPx: 0,
  },
  "Headlines/Headline 4": {
    fontFamily: "Gotham",
    fontStyle: "Medium",
    fontWeight: 500,
    fontSizePx: 18,
    lineHeightPx: 22,
    letterSpacingPx: 0,
  },
  "Headlines/Headline 5": {
    fontFamily: "Gotham",
    fontStyle: "Medium",
    fontWeight: 500,
    fontSizePx: 16,
    lineHeightPx: 20,
    letterSpacingPx: 0,
  },
  "Headlines/Headline 6": {
    fontFamily: "Gotham",
    fontStyle: "Medium",
    fontWeight: 500,
    fontSizePx: 14,
    lineHeightPx: 18,
    letterSpacingPx: 0,
  },
  "Body/X Large/Body > Regular": {
    fontFamily: "Gotham",
    fontStyle: "Book",
    fontWeight: 400,
    fontSizePx: 16,
    lineHeightPx: 22,
    letterSpacingPx: 0,
  },
  "Body/Large/Body > Regular": {
    fontFamily: "Gotham",
    fontStyle: "Book",
    fontWeight: 400,
    fontSizePx: 14,
    lineHeightPx: 18,
    letterSpacingPx: 0,
  },
  "Body/Small/Body > Regular": {
    fontFamily: "Gotham",
    fontStyle: "Book",
    fontWeight: 400,
    fontSizePx: 12,
    lineHeightPx: 14,
    letterSpacingPx: 0,
  },
  "Label 3": {
    fontFamily: "Gotham",
    fontStyle: "Book",
    fontWeight: 400,
    fontSizePx: 14,
    lineHeightPx: 13,
    letterSpacingPx: 0,
  },
  "Button 1": {
    fontFamily: "Gotham",
    fontStyle: "Medium",
    fontWeight: 500,
    fontSizePx: 12,
    lineHeightPx: 11,
    letterSpacingPx: 1,
  },
};

export const zerodayTextStyleToToken = {
  "Headlines/Headline 1": "headlines-headline-1",
  "Headlines/Headline 2": "headlines-headline-2",
  "Headlines/Headline 3": "headlines-headline-3",
  "Headlines/Headline 4": "headlines-headline-4",
  "Headlines/Headline 5": "headlines-headline-5",
  "Headlines/Headline 6": "headlines-headline-6",
  "Body/X Large/Body > Regular": "body-x-large-body-regular",
  "Body/Large/Body > Regular": "body-large-body-regular",
  "Body/Small/Body > Regular": "body-small-body-regular",
  "Label 3": "label-3",
  "Button 1": "button-1",
};

export const zerodayTextTokens = Object.fromEntries(
  Object.entries(zerodayTextStyleToToken).map(([styleName, token]) => [
    token,
    figmaTextStyles[styleName],
  ]),
);

export const zerodayTextUtilities = Object.fromEntries(
  Object.entries(zerodayTextTokens).map(([token, value]) => [
    `.zd-text-${token}`,
    {
      fontFamily: `"${value.fontFamily}", ui-sans-serif, system-ui, sans-serif`,
      fontWeight: `${value.fontWeight}`,
      fontSize: pxToRem(value.fontSizePx),
      lineHeight: pxToRem(value.lineHeightPx),
      letterSpacing: pxToRem(value.letterSpacingPx),
    },
  ]),
);
