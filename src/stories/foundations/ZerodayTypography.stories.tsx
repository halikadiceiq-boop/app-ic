import type { Meta, StoryObj } from "@storybook/react";
import {
  figmaTextStyles,
  zerodayTextStyleToToken,
  zerodayTextTokens,
} from "../../styles/zerodayTextTokens.js";

const meta: Meta = {
  title: "Design Tokens/Typography",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

const entries = Object.entries(figmaTextStyles)
  .map(([styleName, value]) => ({
    styleName,
    token: zerodayTextStyleToToken[styleName] ?? "unmapped",
    ...value,
  }))
  .sort((a, b) => a.styleName.localeCompare(b.styleName));

export const Scale: Story = {
  render: () => (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", padding: "24px" }}>
      <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
        <header style={{ marginBottom: "24px" }}>
          <h1 style={{ margin: 0, fontSize: "32px", lineHeight: "40px" }}>
            Zeroday Text Styles
          </h1>
          <p style={{ margin: "8px 0 0", color: "#444", fontSize: "14px" }}>
            Source node: <code>10197:1534</code>. Imported styles:{" "}
            <strong>{entries.length}</strong>. Tailwind utility pattern:{" "}
            <code>.zd-text-{"{token}"}</code>.
          </p>
        </header>

        <section
          style={{
            border: "1px solid #d4d4d4",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#fff",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ background: "#efefef" }}>
              <tr>
                <th style={{ textAlign: "left", padding: "10px", fontSize: "12px" }}>
                  Sample
                </th>
                <th style={{ textAlign: "left", padding: "10px", fontSize: "12px" }}>
                  Figma style
                </th>
                <th style={{ textAlign: "left", padding: "10px", fontSize: "12px" }}>
                  Token / Utility
                </th>
                <th style={{ textAlign: "left", padding: "10px", fontSize: "12px" }}>
                  CSS
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.map((item) => (
                <tr key={item.styleName} style={{ borderTop: "1px solid #ececec" }}>
                  <td style={{ padding: "12px", verticalAlign: "top", width: "30%" }}>
                    <p
                      style={{
                        margin: 0,
                        color: "#1f1f1f",
                        fontFamily: `"${item.fontFamily}", ui-sans-serif, system-ui, sans-serif`,
                        fontStyle: item.fontStyle.toLowerCase().includes("italic")
                          ? "italic"
                          : "normal",
                        fontWeight: item.fontWeight,
                        fontSize: `${item.fontSizePx}px`,
                        lineHeight: `${item.lineHeightPx}px`,
                        letterSpacing: `${item.letterSpacingPx}px`,
                      }}
                    >
                      The quick brown fox jumps over the lazy dog
                    </p>
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      verticalAlign: "top",
                      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                      fontSize: "12px",
                      width: "25%",
                      wordBreak: "break-word",
                    }}
                  >
                    {item.styleName}
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      verticalAlign: "top",
                      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                      fontSize: "12px",
                      width: "20%",
                      wordBreak: "break-word",
                    }}
                  >
                    {item.token}
                    <br />
                    <span style={{ color: "#666" }}>zd-text-{item.token}</span>
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      verticalAlign: "top",
                      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                      fontSize: "12px",
                      width: "25%",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {`font-family: ${item.fontFamily} (${item.fontStyle})`}
                    {"\n"}
                    {`font-weight: ${item.fontWeight}`}
                    {"\n"}
                    {`font-size: ${item.fontSizePx}px`}
                    {"\n"}
                    {`line-height: ${item.lineHeightPx}px`}
                    {"\n"}
                    {`letter-spacing: ${item.letterSpacingPx}px`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <footer style={{ marginTop: "14px", fontSize: "12px", color: "#666" }}>
          Token count check: {Object.keys(zerodayTextTokens).length}
        </footer>
      </div>
    </div>
  ),
};
