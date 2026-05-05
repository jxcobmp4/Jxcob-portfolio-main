import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: `${SITE.name} — Editor de Video para Creadores de Contenido`,
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: SITE.author, url: SITE.url }],
  creator: SITE.author,
  publisher: SITE.author,
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE.url,
    title: `${SITE.name} — Editor de Video para Creadores de Contenido`,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Editor de Video para Creadores de Contenido`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  image: SITE.ogImage,
  sameAs: [
    "https://www.instagram.com/by.jxcob",
    "https://www.tiktok.com/@jxcob.mp4",
  ],
  knowsAbout: [
    "Edición de video",
    "YouTube",
    "TikTok",
    "Instagram Reels",
    "Motion Graphics",
    "Videos que venden",
  ],
};

  return (
    <html lang="es" className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] font-sans">
        {children}
      </body>
    </html>
  );
}
