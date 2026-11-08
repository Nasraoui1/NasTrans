import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Douane & Transit en Tunisie`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "transitaire Tunis",
    "commissionnaire en douane",
    "dédouanement Tunisie",
    "formalités douanières",
    "commerce extérieur",
    "import export Tunisie",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_TN",
    siteName: site.name,
    title: `${site.name} | Douane & Transit en Tunisie`,
    description: site.description,
    url: "/",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0056b3",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: "+21671256462",
  faxNumber: "+21671256462",
  email: site.emails[0],
  foundingDate: String(site.foundingYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: { "@type": "Country", name: "Tunisie" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-slate-50 text-slate-800 selection:bg-brand-primary selection:text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg text-brand-primary font-semibold"
        >
          Aller au contenu
        </a>
        <Providers>
          <Navbar />
          <main id="contenu" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
