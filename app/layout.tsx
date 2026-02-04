import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SITE_INFO, META_THEME_COLORS } from "@/config/site";
import { USER } from "@/features/profile/data/user";

const fontSans = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_INFO.name,
    template: `%s | ${SITE_INFO.name}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: USER.displayName,
      url: SITE_INFO.url,
    },
  ],
  creator: USER.displayName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_INFO.url,
    title: SITE_INFO.name,
    description: SITE_INFO.description,
    siteName: SITE_INFO.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_INFO.name,
    description: SITE_INFO.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
