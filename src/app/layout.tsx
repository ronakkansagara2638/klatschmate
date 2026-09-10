import type { Metadata, Viewport } from "next";
import { CafeProvider } from "@/components/CafeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://klatschmate-rho.vercel.app"),
  title: {
    default: "Klatsch Mate — European Café in Chandkheda, Ahmedabad",
    template: "%s · Klatsch Mate",
  },
  description:
    "Best European cuisine in Ahmedabad — authentic Neapolitan pizza, fresh in-house Italian pasta & specialty coffee. Open daily 11 AM – 1 AM in Chandkheda, Motera, Sabarmati.",
  keywords: [
    "cafe in Chandkheda",
    "European cafe Ahmedabad",
    "Neapolitan pizza Ahmedabad",
    "specialty coffee Ahmedabad",
    "matcha Ahmedabad",
    "Klatsch Mate",
    "best cafes in Chandkheda",
    "late night cafe Ahmedabad",
  ],
  openGraph: {
    title: "Klatsch Mate — Konnect · Klatsch · Kreate",
    description:
      "Authentic Neapolitan pizza, fresh in-house pasta & specialty coffee in Chandkheda, Ahmedabad. Open daily 11 AM – 1 AM.",
    type: "website",
    locale: "en_IN",
    siteName: "Klatsch Mate",
    images: [{ url: "/assets/hero-still.jpeg", width: 1200, height: 630, alt: "Klatsch Mate café" }],
  },
  icons: { icon: "/assets/logo.jpeg" },
};

export const viewport: Viewport = {
  themeColor: "#241105",
  width: "device-width",
  initialScale: 1,
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Klatsch Mate",
  alternateName: "Klatsch Mate Cafe",
  slogan: "Konnect, Klatsch, Kreate",
  servesCuisine: ["European", "Italian", "Pizza", "Pasta", "Coffee"],
  priceRange: "₹₹",
  telephone: "+919726661567",
  email: "klatschmatecafe@gmail.com",
  url: "https://klatschmate-rho.vercel.app",
  address: {
    "@type": "PostalAddress",
    streetAddress: "G-3, Akshar 111 Commercial Hub, Tapovan Circle, Opp. SMS Hospital, GIDC Bhat",
    addressLocality: "Chandkheda, Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380005",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 23.1128, longitude: 72.5894 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "01:00",
    },
  ],
  sameAs: ["https://www.instagram.com/klatschmate/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <CafeProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </CafeProvider>
      </body>
    </html>
  );
}
