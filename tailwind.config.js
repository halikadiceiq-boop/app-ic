import plugin from "tailwindcss/plugin";
import { zerodayBorderRadiusTokens } from "./src/styles/zerodayBorderRadiusTokens.js";
import { zerodayColorTokens } from "./src/styles/zerodayColorTokens.js";
import { zerodaySpacingTokens } from "./src/styles/zerodaySpacingTokens.js";
import { zerodayTextUtilities } from "./src/styles/zerodayTextTokens.js";
var config = {
    content: ["./index.html", "./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
    theme: {
        extend: {
            borderRadius: zerodayBorderRadiusTokens,
            colors: {
                zd: zerodayColorTokens,
            },
            spacing: zerodaySpacingTokens,
        },
    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities(zerodayTextUtilities);
        }),
    ],
};
export default config;
