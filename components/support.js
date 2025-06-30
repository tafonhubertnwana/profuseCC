// components/ItSupportSection.js
'use client';
import Image from "next/image";
import Link from "next/link";


export default function ItSupportSection() {
  return (
    <section className="container xl:max-w-6xl mx-auto py-10 px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Left Section */}
    <div className="w-full flex flex-col space-y-6">
      <div className="flex space-x-6">
        <div className="relative h-full">
          <Image
            src="/assets/about.webp"
            alt="Person 1"
            objectFit="cover"
            width={500} // Updated width
            height={600} // Updated height
            className="rounded-lg"
          />
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full mb-8 lg:mb-0">
  <div className="flex items-center mb-4">
    <div className="bg-[#FF0000] text-white py-2 px-4 text-sm">
      AI Innovation 
    </div>
    <div className="ml-4 bg-gray-200 text-[#FF0000] py-2 px-4 text-sm">
      Cloud AI Provider
    </div>
  </div>
  <h2 className="text-4xl font-bold text-gray-900 mb-6">
    Accelerate Your Business with AI-Powered Cloud Solutions
  </h2>
  <p className="text-lg text-gray-700 mb-6">
    ProfuseCC delivers cutting-edge artificial intelligence on scalable cloud infrastructure to transform your business. Our AI platforms automate processes, generate predictive insights, and optimize operations through machine learning and generative AI technologies. We architect intelligent cloud solutions that drive innovation, efficiency, and competitive advantage for enterprises worldwide.
  </p>
  <div className="flex space-x-6 mb-6">
    <div className="flex items-center">
      <span className="text-3xl font-semibold text-[#FF0000] mr-2">
        950+
      </span>
      <span className="text-gray-600">AI Models Deployed</span>
    </div>
    <div className="flex items-center">
      <span className="text-3xl font-semibold text-[#FF0000] mr-2">
        100%
      </span>
      <span className="text-gray-600">Cloud Uptime SLA</span>
    </div>
  </div>
  <p className="bg-black text-white p-4 rounded-lg">
    Looking to harness AI for your business? ProfuseCC's cloud-native AI platform delivers 3x faster insights and 40% cost savings compared to traditional solutions.
  </p>
  <Link href='/service/generative-ai'>
    <button className="bg-[#FF0000] text-white mt-4 py-2 px-6 hover:bg-[#FF0000] transition">
      Explore Our AI Solutions
    </button>
  </Link>
</div>
  </div>
</section>
  );
}