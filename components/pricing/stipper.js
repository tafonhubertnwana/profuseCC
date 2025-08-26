'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, CreditCard } from 'lucide-react';

const steps = [
  { id: 1, name: 'Pricing', icon: CheckCircle },
  { id: 2, name: 'Payment Form', icon: FileText },
  { id: 3, name: 'Credit Card Payment', icon: CreditCard },
];

export default function Stepper({ currentStep }) {
  return (
    <div className="w-full container xl:max-w-7xl mx-auto mb-12">
      <div className="flex items-center justify-between relative">
        {/* Base gray line */}
        <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 rounded-full" />

        {/* Dynamic line */}
        <motion.div
          className="absolute top-6 left-0 h-1 rounded-full"
          initial={{ width: 0 }}
          animate={{
            width:
              currentStep === 1
                ? '0%'
                : currentStep === 2
                ? '50%'
                : '100%',
            backgroundColor:
              currentStep < 3 ? '#FF0000' : '#22c55e', // blue until last step, green when finished
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />

        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center w-1/3"
            >
              <motion.div
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md border-2 transition-all
                  ${
                    isCompleted
                      ? 'bg-green-500 border-green-500 text-white'
                      : isActive
                      ? 'bg-[#FF0000] border-[#FF0000] text-white scale-110'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                <step.icon className="w-6 h-6" />
              </motion.div>
              <span className="mt-3 text-sm font-medium text-gray-700">
                {step.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
