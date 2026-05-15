import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZevranBey — Web Designer & Developer",
  description:
    "I build websites that make businesses look like they mean it. From landing pages to full creative experiences. Based in Indonesia, working worldwide.",
  openGraph: {
    title: "ZevranBey — Web Designer & Developer",
    description: "Clean, fast, and effective websites. Starting from $80.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZevranBey — Web Designer & Developer",
    description: "Clean, fast, and effective websites. Starting from $80.",
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
    <html lang="en" className={`${syne.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-bg text-ink font-body antialiased overflow-x-hidden">
        <main role="main">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
