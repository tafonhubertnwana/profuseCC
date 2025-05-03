'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { toast } from "react-hot-toast"; 
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const ConsultationFormModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!recaptchaValue) {
      setError("Please verify that you're not a robot.");
      setIsSubmitting(false);
      return;
    }

    data.recaptchaToken = recaptchaValue;

    try {
      const res = await axios.post("/api/consultation", data);
      if (res.status !== 200) throw new Error("Failed to submit form.");

      setIsSuccess(true);
      toast.success("Consultation request sent successfully!");

      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setRecaptchaValue(null);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error.response?.data?.message || "Error submitting form.");
      toast.error("Error sending consultation request!");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white p-4 sm:p-6 md:p-8 shadow-lg rounded-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full relative mx-auto max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
          <Image
            src="/assets/profuse.jpg"
            alt="Company Logo"
            width={50}
            height={50}
            className="mb-4 sm:mb-0 sm:mr-4"
            priority
          />
          <h2 id="modal-title" className="text-xl sm:text-2xl uppercase font-bold text-gray-800 text-center sm:text-left">
            Client Consultation Form
          </h2>
        </div>
        { isSuccess ? (
          <div className="text-center text-green-500">
            <p>Consultation request sent successfully!</p>
          </div>
        ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm sm:text-base font-medium text-gray-900">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="mt-1 block w-full p-2 border border-black  shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm sm:text-base font-medium text-gray-900">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="mt-1 block w-full p-2 border border-black  shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phoneNumber" className="block text-sm sm:text-base font-medium text-gray-900">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                className="mt-1 block w-full p-2 border border-black  shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="mt-1 block w-full p-2 border border-black  shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm sm:text-base font-medium text-gray-900">
              Company or Organization Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company or Organization Name"
              className="mt-1 block w-full p-2 border border-black  shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="interest" className="block text-sm sm:text-base font-medium text-gray-900">
              Area of Interest
            </label>
            <select
              id="interest"
              name="interest"
              className="mt-1 text-gray-900 block w-full p-2 border border-black  shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option>AWS cloud Service</option>
              <option>Software Development</option>
              <option>Generative AI</option>
              <option>Data and Analysis</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm sm:text-base font-medium text-gray-900">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="mt-1 text-gray-900 block w-full p-2 border border-black  shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm sm:text-base font-medium text-gray-900">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="mt-1  text-gray-900 block w-full p-2 border border-black  shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

          </div>
          <div>
            <label htmlFor="comments" className="block text-sm sm:text-base font-medium text-gray-900">
              Additional Information/Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              placeholder="Additional Information/Comments"
              className="mt-1 text-gray-900 block w-full p-2 border border-black  shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              rows="4"
            ></textarea>
          </div>
          <ReCAPTCHA
              sitekey="6LfWNi0rAAAAAJizhMyYJpVZQpWpupsQrG5sQpqs"
              onChange={(value) => setRecaptchaValue(value)}
            />          {error && (
              <div className="text-black text-sm text-center">
                {error}
              </div>
            )}
             <div className="flex justify-end space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 text-gray-900 hover:bg-gray-400"
              >
                Close
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting || !recaptchaValue}
                className={`px-4 py-2 text-white ${!recaptchaValue ? 'bg-gray-400' : 'bg-[#FF0000] hover:bg-[#FF0000]'}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </motion.button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default ConsultationFormModal;