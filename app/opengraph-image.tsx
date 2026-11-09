import { ImageResponse } from "next/og";

export const dynamic = "force-static";
import { site } from "@/data/portfolio";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#10b981", fontFamily: "monospace" }}>
          {"// portfolio"}
        </div>
        <div style={{ fontSize: 88, fontWeight: 800, marginTop: 16 }}>{site.name}</div>
        <div style={{ fontSize: 44, color: "#a1a1aa", marginTop: 8 }}>{site.title}</div>
        <div style={{ fontSize: 30, color: "#71717a", marginTop: 36, maxWidth: 960 }}>
          {site.tagline}
        </div>
      </div>
    ),
    size
  );
}
