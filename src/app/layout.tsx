import type { Metadata } from "next";
import Shell from "@/components/Shell";
import "./globals.css";

const SITE_URL = "https://peter-chl.github.io/or_apps";
const SITE_NAME = "or_apps";
const DESCRIPTION =
  "Lecture notes on applications of operations research — logistics, scheduling, services, pricing, finance, and energy — with the models written out in full.";

export const metadata: Metadata = {
  title: {
    default: "Applications of Operations Research — Lecture Notes",
    template: "%s — or_apps",
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Applications of Operations Research",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen font-sans">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
