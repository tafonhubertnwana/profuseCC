'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaPaperPlane, FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { databases, ID } from '@/lib/appwrite'; // Adjust the path as needed
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import GoogleReviewButton from "./googleReviewButton";
import { useEffect } from "react";


const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage('');

  try {
    // Save to Appwrite first
    await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_CONTACT_FORM_ID,
      ID.unique(),
      formData
    );

    // Then send email
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        message: formData.message
      }),
    });

    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      throw new Error(`Unexpected response: ${text.substring(0, 100)}`);
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to send email');
    }

    setSubmitMessage('Message sent successfully!');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      message: ''
    });

  } catch (error) {
    console.error('Submission error:', error);
    setSubmitMessage(error.message.includes('Unexpected response') 
      ? 'Server error occurred' 
      : error.message);
  } finally {
    setIsSubmitting(false);
  }
};

useEffect(() => {
  if (submitMessage.includes('successfully')) {
    const timeout = setTimeout(() => {
      setSubmitMessage('');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
    }, 30000); // 30 seconds

    return () => clearTimeout(timeout); // Cleanup if component unmounts
  }
}, [submitMessage]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-[#FF0000] mb-4">Contact Our Team</h1>
        <p className="text-gray-600 text-lg">
          Reach out to our dedicated professionals who are ready to assist you with your needs.
        </p>
      </div>

      {/* Content Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Image and Text Section */}
        <div className="w-full h-full flex flex-col">
          {/* Image Section */}
          <div className="relative h-64 lg:h-96">
            <Image
              src="/assets/contactimg.jpg"
              alt="Professional team meeting"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Text Section with red Background */}
          <div className="bg-[#FF0000] flex-1 flex justify-center p-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white flex flex-col"
            >
              <h2 className="text-2xl font-bold mb-4">Our Contact Information</h2>
              <div className="space-y-4 mb-6">
                <p className="flex items-center">
                  <FaPhone className="mr-3" /> +1 646-509-9274
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="mr-3" /> tabehisaac@gmail.com
                </p>
                <p className="flex items-center">
                  <FaLocationDot className="mr-3" /> Austin,Texas, 78701, USA
                </p>
              </div>

              <div className="mt-auto">
                <p className="text-lg font-semibold mb-4">Connect With Us</p>
                <div className="flex space-x-4">
                  <Link
                     href="https://www.facebook.com/share/1KTQg7oDM7/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-white transition duration-300 rounded-full p-2 hover:bg-gray-100"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </Link>

                  <Link
                    href="https://www.instagram.com/profuse_cc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-white transition duration-300 rounded-full p-2 hover:bg-gray-100"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/company/profuscc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-white transition duration-300 rounded-full p-2 hover:bg-gray-100"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </Link>

                  
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
          className="w-full p-8 md:p-10"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
            <p className="text-gray-600">
              Complete the form below and our team will respond within 24 business hours.
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Grid for Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="relative">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FF0000]" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FF0000]" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Grid for Phone and Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Field */}
              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FF0000] z-10" />
                  <PhoneInput
                    id="phone"
                    international
                    defaultCountry="US"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="(201) 555-0123"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Address Field */}
              <div className="relative">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <div className="relative">
                  <FaLocationDot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FF0000]" />
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main St, City, State"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we assist you today?"
                rows="4"
                className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                required
              />
            </div>

            {/* Status Message */}
            {submitMessage && (
  <div className="space-y-4">
    <div className={`p-4 rounded ${
      submitMessage.includes('successfully') 
        ? 'bg-green-100 text-green-800 border border-green-200' 
        : 'bg-red-100 text-[#FF0000] border border-red-200'
    }`}>
      {submitMessage}
    </div>

    {/* Conditionally render the Google Review button if message was successful */}
    {submitMessage.includes('successfully') && (
      <GoogleReviewButton />
    )}
  </div>
)}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#FF0000] text-white py-3 px-6 flex items-center justify-center space-x-2 rounded hover:bg-red-700 transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Additional Content */}
      <div className="mt-12 text-center max-w-3xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Other Ways to Reach Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
          <div>
            <h4 className="font-medium mb-2 text-[#FF0000]">Support</h4>
            <p>info@profusecc.ai</p>
            <p>+1 512-944-0077</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-2 text-[#FF0000]">Visit Us</h4>
            
            <p>Austin,Texas, 78701, USA </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;