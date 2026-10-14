import type { Metadata } from "next";
import "./globals.css";
import HostlyScript from "@/components/HostlyScript";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Sacramento Property Management | Hostly Management Company";
const description =
  "Short-term, furnished mid-term, long-term, and event-friendly property management throughout Sacramento and surrounding communities.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary", title, description },
  other: {
    "color-scheme": "dark",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <HostlyScript />
      </body>
    </html>
  );
}
