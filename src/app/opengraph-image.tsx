import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Image d'aperçu partagée sur WhatsApp, LinkedIn, Facebook, etc.
export const alt = `${site.name}, commissionnaire en douane à Tunis`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f2f4f1",
          padding: "70px 80px",
          fontFamily: "sans-serif",
          color: "#13243a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              border: "5px solid #c23b2e",
              borderRadius: 6,
              color: "#c23b2e",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            NT
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 38, fontWeight: 800 }}>Nas-Trans</div>
            <div style={{ fontSize: 22, color: "#5a6878" }}>Tunisie SARL</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.02, maxWidth: 900 }}>
            {`Commissionnaire en douane à Tunis depuis ${site.foundingYear}`}
          </div>
          <div style={{ fontSize: 30, color: "#5a6878" }}>
            Formalités douanières · Commerce extérieur · Dédouanement et livraison
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 28 }}>
          <div style={{ display: "flex", fontWeight: 700 }}>{site.phone.label}</div>
          <div
            style={{
              display: "flex",
              border: "4px solid #c23b2e",
              color: "#c23b2e",
              padding: "8px 22px",
              fontSize: 40,
              fontWeight: 800,
              transform: "rotate(-8deg)",
            }}
          >
            DÉDOUANÉ
          </div>
        </div>
      </div>
    ),
    size
  );
}
