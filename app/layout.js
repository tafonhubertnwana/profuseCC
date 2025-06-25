import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "react-hot-toast";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Google Verification */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_TOKEN_HERE" />

        {/* ✅ JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ProfuseCC",
              "url": "https://profusecc.ai/",
              "logo": "https://profusecc.ai/logo.png",
              "sameAs": [
                "https://www.facebook.com/profuseCC",
                "https://www.linkedin.com/company/profuseCC"
              ]
            }),
          }}
        />

        {/* ✅ JSON-LD: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "About Us", "item": "https://profusecc.ai/aboutUs" },
                { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://profusecc.ai/contact" },
                { "@type": "ListItem", "position": 3, "name": "Cloud Computing", "item": "https://profusecc.ai/service/cloud-computing" },
                { "@type": "ListItem", "position": 4, "name": "Software Development", "item": "https://profusecc.ai/service/software-development" },
                { "@type": "ListItem", "position": 5, "name": "Projects", "item": "https://profusecc.ai/project" }
              ]
            }),
          }}
        />

        {/* ✅ Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5QFGRS2P');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}>
        {/* ✅ GTM noscript fallback */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5QFGRS2P"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        {/* ✅ Global SEO */}
        <DefaultSeo {...SEO} />

        {/* <Navbar /> */}
        <Toaster position="bottom-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
