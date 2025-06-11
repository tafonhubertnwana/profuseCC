import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Security Management",
      description: "These services collectively help organizations establish a comprehensive cybersecurity framework and protect their digital assets.",
    },
    {
      title: "Data Privacy",
      description: "These services collectively help organizations establish a comprehensive cybersecurity framework and protect their digital assets.",
    },
    {
      title: "Network Security",
      description: "These services collectively help organizations establish a comprehensive cybersecurity framework and protect their digital assets.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            Introducing Our Cyber Security Services.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More <span className="ml-1 text-xl">✧</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;