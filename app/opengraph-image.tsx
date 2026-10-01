import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { apps, profile } from "@/data/site";

export const alt = `${profile.fullName}, ${profile.role}. Maker of CalMeter, ParkSaathi and Neon Drift Zero.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const dataUri = async (file: string, type: string) =>
  `data:${type};base64,${(await readFile(join(process.cwd(), "public", file))).toString("base64")}`;

/** Share card, rendered once at build time: name and role on the left, portrait with the app icons on the right. */
export default async function OpengraphImage() {
  const portrait = await dataUri("shubham.jpg", "image/jpeg");
  const icons = await Promise.all(apps.map((a) => dataUri(a.icon.slice(1), "image/png")));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          background:
            "radial-gradient(900px 600px at 85% 10%, rgba(37,78,170,0.55), transparent 70%), radial-gradient(700px 500px at 0% 100%, rgba(110,160,255,0.12), transparent 70%), #050a14",
          color: "#eef2f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 700 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.05)",
              color: "#8f99ad",
              fontSize: 20,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            {`${profile.role} at Kotak811`}
          </div>
          <div style={{ display: "flex", marginTop: 34, fontSize: 84, fontWeight: 700, letterSpacing: -3.5, lineHeight: 1, whiteSpace: "nowrap" }}>
            {profile.fullName}
          </div>
          <div style={{ display: "flex", marginTop: 14, fontSize: 42, fontWeight: 700, letterSpacing: -1.5, color: "#7d889e", whiteSpace: "nowrap" }}>
            Mobile and frontend engineer.
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 46, gap: 14 }}>
            {icons.map((src) => (
               
              <img key={src.slice(-24)} src={src} width={64} height={64} style={{ borderRadius: 16 }} alt="" />
            ))}
            <div style={{ display: "flex", marginLeft: 10, fontSize: 26, color: "#8f99ad" }}>3 apps, built end to end</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 340,
            height: 340,
            borderRadius: 999,
            padding: 10,
            border: "2px dashed rgba(255,255,255,0.14)",
          }}
        >
          { }
          <img
            src={portrait}
            width={316}
            height={316}
            alt=""
            style={{ borderRadius: 999, objectFit: "cover", border: "2px solid rgba(156,195,255,0.6)" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
