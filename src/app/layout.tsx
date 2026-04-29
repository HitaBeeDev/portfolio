import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Observability } from "@/components/observability/Observability";
import { SkipToContent } from "@/components/ui/SkipToContent";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourname.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Your Name — Frontend Engineer",
    template: "%s — Your Name",
  },
  description:
    "Frontend engineer who obsesses over performance, accessibility, and the gap between design and code.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Your Name",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@your-username",
  },
  icons: {
    // Static 192/512 PNGs — replace with real branded icons before launch
    other: [
      { rel: "icon", url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <SkipToContent />
        {/*
          Inline script runs synchronously before paint.
          Sets .dark or .light on <html> from localStorage so there is no flash.
          Minified intentionally — every byte here is render-blocking.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');else if(t==='light')document.documentElement.classList.add('light')}catch(e){}})()`,
          }}
        />
        <Header />
        {children}
        <Footer />
        <Observability />
      </body>
    </html>
  );
}
