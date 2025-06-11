// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "react-hot-toast";
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

export const metadata = {
  title: "profuseCC",
  description: "Artificial Intelligent cloud startup Company",
  keywords: 'Artificial Intelligent, web development, cloud, generative AI, AWS, google Cloud'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />
  <meta name="google-site-verification" content="YOUR_ACTUAL_VERIFICATION_CODE" />
  
  {/* Open Graph / Twitter */}
  <meta property="og:title" content={metadata.title} />
  <meta property="og:description" content={metadata.description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://profuse-cc.vercel.app" />
  <meta property="og:image" content="https://profuse-cc.vercel.app/og-image.jpg" />
  
  {/* Preconnect */}
  <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* ✅ Google Search Console Verification */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_TOKEN_HERE" />

        {/* ✅ JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ProfuseCC",
              "url": "https://profuse-cc.vercel.app",
              "logo": "https://profuse-cc.vercel.app/logo.png",
              "sameAs": [
                "https://www.facebook.com/profuseCC",
                "https://www.linkedin.com/company/profuseCC"
              ]
            }),
          }}
        />

        {/* ✅ JSON-LD: Breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "About Us", "item": "https://profuse-cc.vercel.app/about-us" },
                { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://profuse-cc.vercel.app/contact" },
                { "@type": "ListItem", "position": 3, "name": "Cloud Computing", "item": "https://profuse-cc.vercel.app/service/cloud-computing" },
                { "@type": "ListItem", "position": 4, "name": "Software Development", "item": "https://profuse-cc.vercel.app/service/software-development" },
                { "@type": "ListItem", "position": 5, "name": "Projects", "item": "https://profuse-cc.vercel.app/project" }
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
            })(window,document,'script','dataLayer','GTM-MHC2MK3Z');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* ✅ GTM noscript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MHC2MK3Z"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* <Navbar /> */}
        <Toaster position="bottom-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}