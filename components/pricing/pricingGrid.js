'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { servicePricings } from '@/data/services';
import Slider from "react-slick";
// ✅ required CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  
  
};

export default function PricingGrid({ selectedService, onSelectPlan }) {
  const serviceData = servicePricings.find(s => s.service.id === selectedService);

  if (!serviceData) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600">Please select a service to view pricing plans.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Service Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-4">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">{serviceData.service.name}</h2>
            <p className="text-lg text-gray-600 mt-2">{serviceData.service.description}</p>
          </div>
        </div>
      </motion.div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8">
        {serviceData.tiers.map((tier, index) => (
          <PricingCard
            key={tier.id}
            tier={tier}
            service={serviceData.service}
            index={index}
            onSelectPlan={onSelectPlan}
          />
        ))}
      </div>

      {/* Mobile Carousel */}
<div className="lg:hidden">
  <Slider {...sliderSettings}>
    {serviceData.tiers.map((tier, index) => (
      <div key={tier.id} className="p-2">
        <PricingCard
          tier={tier}
          service={serviceData.service}
          index={index}
          onSelectPlan={onSelectPlan}
        />
      </div>
    ))}
  </Slider>
</div>
    </div>
  );
}

function PricingCard({ tier, service, index, onSelectPlan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`card bg-white shadow-xl ${
        tier.popular ? 'ring-2 ring-[#FF0000] border-[#FF0000]' : ''
      } hover:shadow-2xl transition-all duration-300`}
    >
      {tier.popular && (
        <div className="badge p-2 bg-[#FF0000] absolute -top-2 left-1/2 transform -translate-x-1/2">
          Most Popular
        </div>
      )}
      
      <div className="card-body">
        <h3 className="card-title text-2xl font-bold justify-center">{tier.name}</h3>
        
        <div className="text-center my-6">
          <span className="text-5xl font-bold text-[#FF0000]">${tier.price}</span>
          <span className="text-gray-600">/project</span>
        </div>

        <ul className="space-y-3 mb-6">
          {tier.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center">
              <svg
                className="w-5 h-5 text-black mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="card-actions justify-end">
          <button
            onClick={() => onSelectPlan(service.id, service.name, tier.id, tier.name, tier.price)}
            className={`p-4 border-[#FF0000] border-2 w-full font-semibold ${
              tier.popular ? 'bg-[#FF0000] text-white' : ' bg-white text-black '
            } hover:scale-105 transition-all duration-300`}
          >
            Choose {tier.name}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

