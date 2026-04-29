import { ImageResponse } from "next/og";
import { projects } from "@/lib/projects";

export const alt = "Case Study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  const title = project?.name ?? "Case Study";
  const description = project?.description ?? "";
  // Show at most 4 stack items so they fit on one line
  const stack = project?.stack.slice(0, 4) ?? [];

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
          Case Study
        </span>

        {/* Centre content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: 60,
              fontWeight: 700,
              letterSpacing: "-1.5px",
              lineHeight: 1.05,
            }}
          >
            {title}
          </span>

          {description && (
            <span
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 26,
                fontWeight: 400,
                lineHeight: 1.45,
                maxWidth: 800,
              }}
            >
              {description}
            </span>
          )}

          {/* Tech stack pills */}
          {stack.length > 0 && (
            <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
              {stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 99,
                    color: "rgba(255,255,255,0.65)",
                    fontSize: 15,
                    fontWeight: 500,
                    padding: "6px 14px",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
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
