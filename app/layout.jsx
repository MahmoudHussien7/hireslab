import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/app/Provider";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "The Hires Lab",
  description: "Recruitment and HR solutions for your business",
  keywords: ["Recruitment", "HR", "Hiring", "Talent acquisition", "Hires Lab"],
  authors: [{ name: "The Hires Lab", url: "https://thehireslab.com" }],
  creator: "The Hires Lab",
  themeColor: "#7ED967",
  openGraph: {
    title: "The Hires Lab",
    description: "Recruitment and HR solutions for your business",
    url: "https://thehireslab.com",
    siteName: "The Hires Lab",
    images: [
      {
        url: "https://thehireslab.com/og-image.jpg", // replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "The Hires Lab",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Hires Lab",
    description: "Recruitment and HR solutions for your business",
    images: ["https://thehireslab.com/og-image.jpg"],
    creator: "@thehireslab", // update with your Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // if you have one
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "The Hires Lab",
            url: "https://thehireslab.com",
            logo: "https://thehireslab.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/company/the-hires-lab/",
              "https://www.facebook.com/The.Hires.Lab/",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-800-555-0199",
              contactType: "Customer Support",
            },
          }),
        }}
      />

      <head>
        {/* Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Hires Lab",
              url: "https://thehireslab.com",
              logo: "https://thehireslab.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/the-hires-lab/",
                "https://twitter.com/thehireslab",
                "https://www.facebook.com/The.Hires.Lab/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-555-0199",
                contactType: "Customer Support",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} font-sans`}
        cz-shortcut-listen="true"
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
