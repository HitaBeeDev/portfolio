import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function Observability() {
  if (process.env.NEXT_PUBLIC_ENABLE_VERCEL_INSIGHTS !== "true") {
    return null;
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
