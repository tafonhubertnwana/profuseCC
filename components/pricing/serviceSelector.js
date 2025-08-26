'use client';

import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { servicePricings } from '@/data/services';

export default function ServiceSelector({ selectedService, onServiceSelect }) {
  useEffect(() => {
    if (!selectedService && servicePricings.length > 0) {
      onServiceSelect(servicePricings[0].service.id);
    }
  }, [selectedService, onServiceSelect]);
  return (
    <div className="w-full">
      {/* Desktop View - Buttons */}
      <div className="hidden lg:flex flex-wrap justify-center gap-4 mb-8">
        {servicePricings.map((serviceData, index) => (
          <motion.button
            key={serviceData.service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onServiceSelect(serviceData.service.id)}
            className={`p-4 border-[#FF0000] border-2 font-semibold ${
              selectedService === serviceData.service.id
                ? 'bg-[#FF0000] text-white'
                : 'bg-white text-black'
            } hover:scale-105 transition-all duration-300`}
          >
            
            {serviceData.service.name}
          </motion.button>
        ))}
      </div>

      {/* Mobile View - Dropdown */}
      <div className="lg:hidden mb-8">
        <div className="dropdown dropdown-bottom w-full">
          <label tabIndex={0} className="btn btn-outline btn-primary w-full justify-between">
            <span className="flex items-center">
              {selectedService ? (
                <>
                  <span className="text-xl mr-2">
                    {servicePricings.find(s => s.service.id === selectedService)?.service.icon}
                  </span>
                  {servicePricings.find(s => s.service.id === selectedService)?.service.name}
                </>
              ) : (
                'Select a Service'
              )}
            </span>
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="m7 10 5 5 5-5z"/>
            </svg>
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full">
            {servicePricings.map((serviceData) => (
              <li key={serviceData.service.id}>
                <button
                  onClick={() => onServiceSelect(serviceData.service.id)}
                  className="flex items-center justify-start w-full"
                >
                  {serviceData.service.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
