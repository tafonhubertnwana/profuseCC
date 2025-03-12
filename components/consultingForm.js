'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ConsultationFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert('Form submitted successfully!');
        onClose();
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-2xl w-full relative">
        <div className="flex items-center mb-6">
          <Image src="/path-to-your-logo.png" alt="Company Logo" width={50} height={50} className="mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">Client Consultation Form</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder="First Name" className="input" required />
            <input type="text" name="lastName" placeholder="Last Name" className="input" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="tel" name="phoneNumber" placeholder="Phone Number" className="input" required />
            <input type="email" name="email" placeholder="Email" className="input" required />
          </div>
          <input type="text" name="company" placeholder="Company or Organization Name" className="input w-full" />
          <select name="interest" className="input w-full">
            <option>Network Solutions</option>
            <option>Software Development</option>
            <option>IT Consultation</option>
          </select>
          <div className="grid grid-cols-2 gap-4">
            <input type="date" name="date" className="input" required />
            <input type="time" name="time" className="input" required />
          </div>
          <textarea name="comments" placeholder="Additional Information/Comments" className="input w-full" rows="4"></textarea>
          <div className="flex justify-end space-x-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="button" onClick={onClose} className="button-gray">
              Close
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="button-blue">
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ConsultationFormModal;