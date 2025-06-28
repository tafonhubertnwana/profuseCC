'use client';

import { motion } from 'framer-motion';
import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection/hero";
import Head from 'next/head';

export default function PrivacyPolicyPage() {

    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div>
        <Navbar />
            <HeroSection
        title="Private Policy"
        description="We'd love to hear from you. Whether you have a question, feedback,
                    or just want to say hello, feel free to reach out."
        backgroundImage="/assets/bg-policy.webp"
        breadcrumb="Private Policy" />
       <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Privacy Policy | Profusecc</title>
        <meta name="description" content="Profusecc's privacy policy outlining how we collect, use, and protect your information." />
      </Head>

      <main className="container xl:max-w-7xl mx-auto py-12 px-4 ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className=" p-6 sm:p-8"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            Privacy Policy
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-600 mb-8">
            Last updated March 12, 2025
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                Profusecc respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website profusecc.com (including any related media, forms, or channels). By using our website, you agree to the terms outlined in this Privacy Policy. Please read it carefully. If you do not agree with any part of this policy, we ask that you refrain from using the website.
              </p>
              <p className="text-gray-600">
                We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with the updated "Last Updated" date. These changes will take effect immediately upon posting, and we encourage you to review this policy periodically to stay informed about how we are protecting your information. By continuing to use our website after any updates are posted, you are accepting and agreeing to the changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Privacy Principles</h2>
              <p className="text-gray-600 mb-4">
                Your privacy is very important to us. At Profusecc, we adhere to the following fundamental principles:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We only collect personal information when it is necessary to provide our services and improve your experience with our site.</li>
                <li>We do not share your personal information with third parties, except as necessary to comply with the law, improve our services, or protect our rights.</li>
                <li>We do not store personal information unless required for the ongoing operation of our website or services.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                This Privacy Policy is designed to comply with applicable privacy laws, including the California Consumer Privacy Act (CCPA), where relevant.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We may collect information about you in a variety of ways. Profusecc's purpose in collecting the information below is to better understand how visitors use our website and improve our offerings. The information we may collect includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Personally identifiable information, such as your name, address, email address, and telephone number that you voluntarily provide when filling out a contact form and/or signing up for an email list.</li>
                <li>Technical and usage information that our servers automatically collect when you access our website, such as your IP address, browser type, operating system, access times, and the pages you viewed before and after visiting the site.</li>
                <li>Business intelligence data derived from IP addresses using third-party tools. This helps us identify the companies that visit our site (not individual users), so we can better tailor our sales and marketing efforts.</li>
                <li>Mobile device information, such as your device ID, model, and manufacturer, and information about your device's location, if you access the website from a mobile device.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect in the following ways:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide, operate, and maintain our website</li>
                <li>To improve, personalize, and expand our website</li>
                <li>To understand and analyze how you use our website</li>
                <li>To develop new products, services, features, and functionality</li>
                <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                <li>To process your transactions</li>
                <li>To prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-4">
                Profusecc uses cookies to help identify and track website visitors, analyze usage patterns, and remember user preferences. A cookie is a small text file that a website stores on a visitor's device, which the browser sends back to the website each time the visitor returns.
              </p>
              <p className="text-gray-600">
                We use a consent management platform to provide transparency and allow users to control their cookie preferences. Upon visiting our website, users are presented with a cookie banner where they can accept or reject non-essential cookies, or customize their preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                We may partner with selected third-party vendors such as Google Analytics, Google Ads, Cloudflare, and others to allow tracking technologies and remarketing services on our website through the use of first-party cookies and third-party cookies to analyze and track users' use of the website, determine the popularity of certain content, and better understand online activity.
              </p>
              <p className="text-gray-600">
                By accessing the website, you consent to the collection and use of your information by these third-party vendors. You are encouraged to review their privacy policies and contact them directly for responses to your questions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Privacy Rights</h2>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>The right to access and receive a copy of your personal data</li>
                <li>The right to request correction of inaccurate data</li>
                <li>The right to request deletion of your personal data</li>
                <li>The right to opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Children's Privacy</h2>
              <p className="text-gray-600">
                We do not knowingly solicit information from, or market to, children under the age of 13. If we become aware that we have unintentionally collected personal data from a child under the age of 13, we will take immediate steps to delete that information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600">
                Profusecc reserves the right to update or modify this Privacy Policy at any time. We encourage visitors to review this page periodically to stay informed about any changes. If we make significant changes to the Privacy Policy, we will notify you by posting an updated version on this page with the revised "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions or concerns regarding this Privacy Policy, or if you would like to exercise any of your privacy rights, please feel free to contact us at:
              </p>
              <address className="not-italic mt-4 text-gray-600">
                ProfuseCC<br />
                1944 Katy Fort Bend County Rd, 3<br />
                Katy, TX 7749<br />
                United States<br />
                <a href="mailto:info@profusecc.com" className="text-blue-600 hover:underline">info@profusecc.com</a><br />
                +1 646-509-9274
              </address>
            </section>
          </motion.div>
        </motion.div>
      </main>
    </div>

    </div>
  );
}
