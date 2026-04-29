import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "40px",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-4px",
            lineHeight: 1,
          }}
        >
          AA
        </span>
      </div>
    ),
    { ...size },
  );
}
