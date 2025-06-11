import React from "react";

const AboutCyber = () => {
  const stats = [
    { value: "36+", label: "YEARS' EXPERIENCE" },
    { value: "645+", label: "CYBER SECURITY EXPERTS" },
    { value: "100%", label: "CUSTOMER SATISFACTION" },
    { value: "35 M", label: "CUSTOMER SERVED GLOBALLY" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Cyber</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Unveiling the Essence of Pure Visibility.
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Cybersecurity is crucial in today's digital age, where many individuals and organizations store a significant amount of sensitive data on computers and other devices. This data could be financial information, personal information,
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission & Vision</h3>
            <p className="text-gray-600">
              We pride ourselves on working to an extent of your marketing team and tailored to your industry, and security goals.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Purpose</h3>
            <p className="text-gray-600">
              We pride ourselves on working to an extent of your marketing team and tailored to your industry, and security goals.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCyber;