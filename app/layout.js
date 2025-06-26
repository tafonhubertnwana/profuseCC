import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import SeoConfigClient from "@/components/SeoConfigClient";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Static metadata for all pages
export const metadata = {
  title: "ProfuseCC Artificial Intelligence Software Consulting Company",
  description:
    "ProfuseCC is an artificial intelligence software startup delivering cloud solutions, AI innovations, and secure technologies.",
  keywords:
    "Artificial Intelligence, Web Development, Cloud, Generative AI, AWS, Google Cloud, Cybersecurity, Analytics",
  robots: "index, follow",
  metadataBase: new URL("https://profusecc.ai"),
  openGraph: {
    title: "ProfuseCC Artificial Intelligence Software Consulting Company",
    description:
      "AI-driven innovation and secure cloud consulting for modern businesses.",
    url: "https://profusecc.ai",
    siteName: "ProfuseCC",
    images: [
      {
        url: "https://profusecc.ai/assets/profuse.jpg",
        width: 1200,
        height: 630,
        alt: "ProfuseCC OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProfuseCC Artificial Intelligence Software Consulting Company",
    description:
      "AI-driven innovation and secure cloud consulting for modern businesses.",
    site: "@profusecc",
    creator: "@profusecc",
    images: ["https://profusecc.ai/assets/profuse.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
        {/* GTM noscript fallback */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5QFGRS2P"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        {/* Global SEO and GTM script (client-only) */}
        <SeoConfigClient />

        {/* Toast Notifications */}
        <Toaster position="bottom-right" />

        {/* Main Content */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
