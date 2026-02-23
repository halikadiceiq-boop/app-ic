import type { Meta, StoryObj } from "@storybook/react";
import {
  figmaSpacingStyles,
  zerodaySpacingStyleToToken,
  zerodaySpacingTokens,
} from "../../styles/zerodaySpacingTokens.js";

const meta: Meta = {
  title: "Design Tokens/Spacing",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

const entries = Object.entries(figmaSpacingStyles)
  .map(([styleName, valuePx]) => ({
    styleName,
    valuePx,
    valueRem: valuePx / 16,
    token: zerodaySpacingStyleToToken[styleName] ?? "unmapped",
  }))
  .sort((a, b) => a.valuePx - b.valuePx);

export const Scale: Story = {
  render: () => (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", padding: "24px" }}>
      <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
        <header style={{ marginBottom: "24px" }}>
          <h1 style={{ margin: 0, fontSize: "32px", lineHeight: "40px" }}>
            Zeroday Spacing Styles
          </h1>
          <p style={{ margin: "8px 0 0", color: "#444", fontSize: "14px" }}>
            Source node: <code>10198:1602</code>. Imported spacing styles:{" "}
            <strong>{entries.length}</strong>. Tailwind spacing utility pattern:{" "}
            <code>p-zd-{"{token}"}</code>, <code>m-zd-{"{token}"}</code>,{" "}
            <code>gap-zd-{"{token}"}</code>.
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
                  Preview
                </th>
                <th style={{ textAlign: "left", padding: "10px", fontSize: "12px" }}>
                  Figma style
                </th>
                <th style={{ textAlign: "left", padding: "10px", fontSize: "12px" }}>
                  Token
                </th>
                <th style={{ textAlign: "left", padding: "10px", fontSize: "12px" }}>
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.map((item) => (
                <tr key={item.styleName} style={{ borderTop: "1px solid #ececec" }}>
                  <td style={{ padding: "12px", verticalAlign: "middle", width: "30%" }}>
                    <div
                      style={{
                        width: `${Math.min(item.valuePx * 2, 260)}px`,
                        height: "10px",
                        background: "#3b82f6",
                        borderRadius: "6px",
                      }}
                    />
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      verticalAlign: "top",
                      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                      fontSize: "12px",
                      width: "30%",
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
                    }}
                  >
                    zd-{item.token}
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      verticalAlign: "top",
                      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                      fontSize: "12px",
                      width: "20%",
                    }}
                  >
                    {item.valuePx}px ({item.valueRem}rem)
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <footer style={{ marginTop: "14px", fontSize: "12px", color: "#666" }}>
          Token count check: {Object.keys(zerodaySpacingTokens).length}
        </footer>
      </div>
    </div>
  ),
};
