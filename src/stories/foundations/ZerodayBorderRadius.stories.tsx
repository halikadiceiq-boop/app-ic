import type { Meta, StoryObj } from "@storybook/react";
import { borderRadiusTokens, zerodayBorderRadiusTokens } from "../../styles/zerodayBorderRadiusTokens.js";

const meta: Meta = {
  title: "Design Tokens/Border Radius",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

const entries = Object.entries(borderRadiusTokens)
  .map(([token, valuePx]) => ({
    token,
    valuePx,
    valueRem: valuePx / 16,
  }))
  .sort((a, b) => a.valuePx - b.valuePx);

export const Scale: Story = {
  render: () => (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", padding: "24px" }}>
      <div style={{ margin: "0 auto", maxWidth: "1000px" }}>
        <header style={{ marginBottom: "24px" }}>
          <h1 style={{ margin: 0, fontSize: "32px", lineHeight: "40px" }}>
            Border Radius Tokens
          </h1>
          <p style={{ margin: "8px 0 0", color: "#444", fontSize: "14px" }}>
            Tokens for rounded corners. Tailwind utility pattern:{" "}
            <code>rounded-zd-{"{token}"}</code>.
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
                  Token
                </th>
                <th style={{ textAlign: "left", padding: "10px", fontSize: "12px" }}>
                  Tailwind Utility
                </th>
                <th style={{ textAlign: "left", padding: "10px", fontSize: "12px" }}>
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.map((item) => (
                <tr key={item.token} style={{ borderTop: "1px solid #ececec" }}>
                  <td style={{ padding: "12px", width: "28%" }}>
                    <div
                      style={{
                        height: "50px",
                        width: "130px",
                        borderRadius: `${item.valuePx}px`,
                        background: "#3b82f6",
                      }}
                    />
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                      fontSize: "12px",
                      width: "24%",
                    }}
                  >
                    {item.token}
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                      fontSize: "12px",
                      width: "28%",
                    }}
                  >
                    rounded-zd-{item.token}
                  </td>
                  <td
                    style={{
                      padding: "12px",
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
          Token count check: {Object.keys(zerodayBorderRadiusTokens).length}
        </footer>
      </div>
    </div>
  ),
};
