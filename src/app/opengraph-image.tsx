import { ImageResponse } from "next/og";

export const alt = "Your Name — Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        {/* Top label */}
        <span
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </span>

        {/* Centre content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-2px",
              lineHeight: 1.05,
            }}
          >
            Your Name
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: 28,
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: 700,
            }}
          >
            Frontend engineer who obsesses over performance, a11y, and the gap
            between design and code.
          </span>
        </div>

        {/* Bottom URL */}
        <span
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          yourname.com
        </span>
      </div>
    ),
    { ...size },
  );
}
