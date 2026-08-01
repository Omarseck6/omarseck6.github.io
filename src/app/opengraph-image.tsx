import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const alt = `${portfolio.name} — ${portfolio.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px", color: "white", background: "radial-gradient(circle at 72% 45%, #4f1119 0%, #19090b 34%, #090909 72%)", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "24px", fontWeight: 700 }}><span style={{ color: "#B11226" }}>●</span>{portfolio.name}</div>
      <div style={{ display: "flex", flexDirection: "column" }}><span style={{ color: "#B11226", fontSize: "22px", letterSpacing: "5px", textTransform: "uppercase" }}>Software portfolio</span><strong style={{ fontSize: "92px", lineHeight: 0.92, letterSpacing: "-6px", maxWidth: "900px", marginTop: "22px" }}>ENGINEERING CLARITY.</strong></div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#cfcfcf", fontSize: "20px" }}><span>{portfolio.role}</span><span>{portfolio.location}</span></div>
    </div>, size,
  );
}
