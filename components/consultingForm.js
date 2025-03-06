'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    company: '',
    interest: 'Network Solutions',
    date: '',
    time: '',
    comments: '',
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/consultation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert('Form submitted successfully!');
      setIsOpen(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Consultation Form
      </motion.button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 shadow-md rounded-md max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Client Consultation Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="firstName" placeholder="First" onChange={handleChange} className="border p-2 w-full" required />
                <input type="text" name="lastName" placeholder="Last" onChange={handleChange} className="border p-2 w-full" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} className="border p-2 w-full" required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full" required />
              </div>
              <input type="text" name="company" placeholder="Company or Organization Name" onChange={handleChange} className="border p-2 w-full" />
              <select name="interest" onChange={handleChange} className="border p-2 w-full">
                <option>Network Solutions</option>
                <option>Software Development</option>
                <option>IT Consultation</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input type="date" name="date" onChange={handleChange} className="border p-2 w-full" required />
                <input type="time" name="time" onChange={handleChange} className="border p-2 w-full" required />
              </div>
              <textarea name="comments" placeholder="Additional Information/Comments" onChange={handleChange} className="border p-2 w-full"></textarea>
              <div className="flex justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Close
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  );
}
