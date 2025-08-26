'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicePricings } from '@/data/services';

export default function ServiceSelector({ selectedService, onServiceSelect }) {
  const [open, setOpen] = useState(false);

  const selected = servicePricings.find(
    (s) => s.service.id === selectedService
  );

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
            className={`p-4 border-2 border-[#FF0000] font-semibold rounded-lg ${
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
      <div className="lg:hidden mb-8 relative w-full">
        {/* Dropdown Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full border-2 border-[#FF0000] bg-[#FF0000] text-white px-4 py-3 rounded-lg text-left"
        >
          <span className="flex items-center">
            {selected ? (
              <>
                <span className="text-xl mr-2">{selected.service.icon}</span>
                {selected.service.name}
              </>
            ) : (
              'Select a Service'
            )}
          </span>
          <svg
            className={`fill-current transition-transform duration-200 ${
              open ? 'rotate-180' : 'rotate-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="m7 10 5 5 5-5z" />
          </svg>
        </button>

        {/* Dropdown Menu with Animation */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 mt-2 w-full bg-white text-[#FF0000] border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50"
            >
              {servicePricings.map((serviceData) => (
                <li key={serviceData.service.id}>
                  <button
                    onClick={() => {
                      onServiceSelect(serviceData.service.id);
                      setOpen(false);
                    }}
                    className="flex items-center w-full text-left px-4 py-2 hover:bg-[#FF0000] hover:text-white transition-colors duration-150"
                  >
                    <span className="mr-2">{serviceData.service.icon}</span>
                    {serviceData.service.name}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
