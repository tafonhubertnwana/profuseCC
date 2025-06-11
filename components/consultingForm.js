'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { toast } from "react-hot-toast"; 
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { databases } from "@/lib/appwrite";
import { Client, Databases, ID } from "appwrite";

const ConsultationFormModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [phoneValue, setPhoneValue] = useState('');
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset form when opening
      setSelectedDate(null);
      setSelectedTime(null);
      setIsSuccess(false);
      setError(null);
      setFormErrors({});
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validateForm = (formData) => {
    const errors = {};
    
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!phoneValue) errors.phoneNumber = 'Phone number is required';
    if (!formData.interest) errors.interest = 'Please select an area of interest';
    if (!selectedDate) errors.date = 'Please select a date';
    if (!selectedTime) errors.time = 'Please select a time';
    
    return errors;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError(null);
  
  const formData = {
    firstName: e.target.firstName.value,
    lastName: e.target.lastName.value,
    email: e.target.email.value,
    company: e.target.company.value,
    interest: e.target.interest.value,
    comments: e.target.comments.value
  };
  
  const errors = validateForm(formData);
  setFormErrors(errors);
  
  if (Object.keys(errors).length > 0) {
    setIsSubmitting(false);
    toast.error("Please fill all required fields");
    return;
  }

  try {
    // First save to Appwrite
    const response = await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_CONSULTATION_FORM_ID,
      ID.unique(),
      {
        ...formData,
        phoneNumber: phoneValue,
        date: selectedDate?.toISOString().split('T')[0],
        time: selectedTime?.toTimeString().substring(0, 5),
        status: 'pending'
      }
    );

    // Then send email
   const emailResponse = await fetch('/api/consultation', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phoneNumber: phoneValue,
    company: formData.company,
    interest: formData.interest,
    date: selectedDate?.toISOString().split('T')[0],
    time: selectedTime?.toTimeString().substring(0, 5),
    comments: formData.comments
  }),
});
    if (!emailResponse.ok) {
      throw new Error('Failed to send email notification');
    }

    setIsSuccess(true);
    toast.success("Consultation submitted successfully!");
  } catch (error) {
    console.error('Submission error:', error);
    setError(error.message || 'An unexpected error occurred');
    toast.error(error.message || "Failed to submit consultation");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200 p-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12">
              <Image
                src="/assets/profuse.jpg"
                alt="Company Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <h2 id="modal-title" className="text-2xl font-bold text-gray-900">
              Consultation Request
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-4">Your consultation request has been successfully submitted.</p>
              <p className="text-gray-600">Our team will review your information and contact you within 24-48 hours to confirm your appointment.</p>
              <button
                onClick={() => {
                  onClose();
                  setIsSuccess(false);
                }}
                className="mt-6 px-6 py-2 bg-[#FF0000] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`block w-full px-4 py-2 border ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900`}
                    required
                  />
                  {formErrors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`block w-full px-4 py-2 border ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900`}
                    required
                  />
                  {formErrors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`block w-full px-4 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900`}
                    required
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <div className={`relative border ${formErrors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}>
                    <PhoneInput
                      id="phoneNumber"
                      name="phoneNumber"
                      defaultCountry="US"
                      value={phoneValue}
                      onChange={setPhoneValue}
                      international={true}
                      countryCallingCodeEditable={false}
                      className="w-full px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      required
                    />
                  </div>
                  {formErrors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.phoneNumber}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                  Area of Interest <span className="text-red-600">*</span>
                </label>
                <select
                  id="interest"
                  name="interest"
                  className={`block w-full px-4 py-2 border ${formErrors.interest ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900`}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="AWS Cloud Service">Cloud Computing Services</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Generative AI">Generative AI</option>
                  <option value="Data and Analysis">Data and Analysis</option>
                </select>
                {formErrors.interest && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.interest}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date <span className="text-red-600">*</span>
                  </label>
                  <div className={`border ${formErrors.date ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      minDate={new Date()}
                      className="block w-full px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      placeholderText="Select a date"
                      required
                    />
                  </div>
                  {formErrors.date && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.date}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time <span className="text-red-600">*</span>
                  </label>
                  <div className={`border ${formErrors.time ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}>
                    <DatePicker
                      selected={selectedTime}
                      onChange={(time) => setSelectedTime(time)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      className="block w-full px-4 py-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      placeholderText="Select a time"
                      required
                    />
                  </div>
                  {formErrors.time && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.time}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>

              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2 border border-transparent rounded-md shadow-sm text-white bg-[#FF0000] hover:bg-[#FF0000] focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConsultationFormModal;