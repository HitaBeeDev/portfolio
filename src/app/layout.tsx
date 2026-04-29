import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Observability } from "@/components/observability/Observability";
import { SkipToContent } from "@/components/ui/SkipToContent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourname.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anahita Amiri — Frontend Engineer",
    template: "%s — Anahita Amiri",
  },
  description:
    "Frontend engineer who obsesses over performance, accessibility, and the gap between design and code.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Anahita Amiri",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@your-username",
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
      className={`${inter.variable} h-full antialiased`}
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
