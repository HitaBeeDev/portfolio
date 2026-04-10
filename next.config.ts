import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { withSentryConfig } from "@sentry/nextjs";

const securityHeaders = [
  // Allow browser DNS prefetching for faster external link resolution
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // Force HTTPS for 2 years, including subdomains
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Limit referrer info sent to other origins
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  // Disable browser features not needed by a portfolio
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  images: {
    remotePatterns: [
      // GitHub avatars (profile photo)
      new URL("https://avatars.githubusercontent.com/**"),
      // Raw GitHub content (project screenshots hosted in repos)
      new URL("https://raw.githubusercontent.com/**"),
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["rehype-slug", "rehype-highlight"],
  },
});

export default withSentryConfig(withMDX(nextConfig), {
  // Suppresses build-time Sentry telemetry and the "Sentry is not configured" warning
  silent: true,
  // Upload source maps only in CI to avoid leaking them in local builds
  sourcemaps: {
    disable: !process.env.CI,
  },
});
