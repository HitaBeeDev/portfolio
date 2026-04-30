import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Observability } from "@/components/observability/Observability";
import { SkipToContent } from "@/components/ui/SkipToContent";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anahitaamiri.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anahita Amiri — Frontend Engineer",
    template: "%s — Anahita Amiri",
  },
  description:
    "Frontend engineer based in Aachen, Germany. 2+ years building privacy-first compliance tools and refactoring React codebases at Jurcom GRC Services.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Anahita Amiri",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@HitaBeeDev",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${dmSans.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <SkipToContent />
        {/*
          Runs synchronously before first paint.
          Reads localStorage and sets .dark / .light on <html> to prevent flash.
          Minified intentionally — every byte here is render-blocking.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');else if(t==='light')document.documentElement.classList.add('light')}catch(e){}})()`,
          }}
        />
        <Header />
        {children}
        <Observability />
      </body>
    </html>
  );
}
