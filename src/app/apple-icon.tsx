import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f2f4f1" }}>
        <div style={{ width: 140, height: 140, display: "flex", alignItems: "center", justifyContent: "center", border: "9px solid #c23b2e", borderRadius: 10, color: "#c23b2e", fontSize: 64, fontWeight: 800 }}>
          NT
        </div>
      </div>
    ),
    size
  );
}
