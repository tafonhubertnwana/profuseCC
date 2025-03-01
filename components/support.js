// components/ItSupportSection.js

import Image from "next/image";

export default function ItSupportSection() {
  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Section */}
        <div className="w-full flex flex-col space-y-6">
          <div className="flex space-x-6">
            <div className="relative  h-full">
              <Image src="/assets/about-1.png" alt="Person 1" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
           
          </div>
          
        </div>

        {/* Right Section */}
        <div className=" w-full mb-8 lg:mb-0">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm">
              Award Winning
            </div>
            <div className="ml-4 bg-gray-200 text-blue-600 py-2 px-4 rounded-lg text-sm">
              Best Services
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ensuring Your Success Trusted IT Services Source
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Monotonectally synergize granular markets and front markets.
            Collaboratively visualize strategic intermediaries after multimedia based models. Synergistically task state of the art infrastructures for.
          </p>
          <div className="flex space-x-6 mb-6">
            <div className="flex items-center">
              <span className="text-3xl font-semibold text-blue-600 mr-2">283k+</span>
              <span className="text-gray-600">Complete Projects</span>
            </div>
            <div className="flex items-center">
              <span className="text-3xl font-semibold text-blue-600 mr-2">45%</span>
              <span className="text-gray-600">Solution Business</span>
            </div>
          </div>
          <p className="bg-blue-100 text-blue-800 p-4 rounded-lg">
            If you are accused of committing a crime, you will the very best criminal defense attorneys.
          </p>
          <button className="bg-blue-600 text-white mt-4 py-2 px-6 rounded-lg hover:bg-blue-700 transition">
            More About
          </button>
        </div>
      </div >
      
    </section>
  );
}