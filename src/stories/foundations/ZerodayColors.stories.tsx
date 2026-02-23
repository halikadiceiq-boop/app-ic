import type { Meta, StoryObj } from "@storybook/react";
import {
  figmaColorStyles,
  zerodayColorStyleToToken,
} from "../../styles/zerodayColorTokens.js";

const meta: Meta = {
  title: "Design Tokens/Colors",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

const entries = Object.entries(figmaColorStyles)
  .map(([styleName, hex]) => ({
    styleName,
    hex,
    token: zerodayColorStyleToToken[styleName] ?? "unmapped",
    group: styleName.split("/")[0].trim().toLowerCase(),
  }))
  .sort((a, b) => a.styleName.localeCompare(b.styleName));

const groupOrder = [
  "primary",
  "secondary",
  "severity",
  "neutral",
  "system",
  "other",
];

const grouped = entries.reduce<Record<string, typeof entries>>((acc, item) => {
  const group = groupOrder.includes(item.group) ? item.group : "other";
  if (!acc[group]) acc[group] = [];
  acc[group].push(item);
  return acc;
}, {});

export const Palette: Story = {
  render: () => (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", padding: "24px" }}>
      <div style={{ margin: "0 auto", maxWidth: "1400px" }}>
        <header style={{ marginBottom: "24px" }}>
          <h1 style={{ margin: 0, fontSize: "32px", lineHeight: "40px" }}>
            Zeroday Color Styles
          </h1>
          <p style={{ margin: "8px 0 0", color: "#444", fontSize: "14px" }}>
            Source: Figma file styles. Total styles: <strong>{entries.length}</strong>
            . Tailwind token namespace: <code>colors.zd.*</code>.
          </p>
          <p style={{ margin: "6px 0 0", color: "#666", fontSize: "13px" }}>
            {groupOrder
              .filter((group) => grouped[group]?.length)
              .map((group) => `${group}: ${grouped[group].length}`)
              .join(" | ")}
          </p>
        </header>

        {groupOrder
          .filter((group) => grouped[group]?.length)
          .map((group) => (
            <section key={group} style={{ marginBottom: "28px" }}>
              <h2
                style={{
                  margin: "0 0 10px",
                  fontSize: "22px",
                  lineHeight: "28px",
                  textTransform: "capitalize",
                }}
              >
                {group} ({grouped[group].length})
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                  gap: "12px",
                }}
              >
                {grouped[group].map((item) => (
                  <article
                    key={item.styleName}
                    style={{
                      overflow: "hidden",
                      borderRadius: "8px",
                      border: "1px solid #d4d4d4",
                      background: "#fff",
                      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <div
                      style={{
                        height: "74px",
                        width: "100%",
                        borderBottom: "1px solid #d4d4d4",
                        backgroundColor: item.hex,
                      }}
                    />
                    <div style={{ padding: "10px", fontSize: "12px", lineHeight: 1.4 }}>
                      <p style={{ margin: 0, fontWeight: 700, wordBreak: "break-word" }}>
                        {item.styleName}
                      </p>
                      <p style={{ margin: "4px 0 0", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
                        {item.hex}
                      </p>
                      <p
                        style={{
                          margin: "4px 0 0",
                          color: "#555",
                          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                          wordBreak: "break-word",
                        }}
                      >
                        zd-{item.token}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
      </div>
    </div>
  ),
};
