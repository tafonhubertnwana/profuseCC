// pages/consultation.js
import { motion } from "framer-motion";
import { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaPaperPlane, FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const ContactForm = () => {
  // Initialize formData state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    // Validate phone number (ensure it's a valid 10-digit number)
    const phonePattern = /^\d{9,}$/;
    if (!phonePattern.test(formData.phone)) {
      setSubmitStatus({ success: false, message: 'Please enter a valid 10-digit phone number' });
      setIsSubmitting(false);
      return;
    }
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          message: ''
        });
      } else {
        setSubmitStatus({ success: false, message: data.message || 'Error submitting form' });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#FF0000] mb-4">How Can We Help You?</h1>
        <p className="text-gray-600 text-lg">
          Get in touch with your nearest local business sales executive.
        </p>
      </div>

      {/* Content Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center w-full max-w-6xl bg-white shadow-lg overflow-hidden">
        {/* Left Side - Image and Text Section */}
        <div className="w-full">
          {/* Image Section */}
          <Image
            src="/assets/contactimg.jpg"
            alt="Contact Us"
            width={400}
            height={400}
            className="w-full h-full lg:h-auto object-cover object-center"
          />

          {/* Text Section with red Background */}
          <div className="bg-[#FF0000] h-full flex justify-center p-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white"
            >
              <h2 className="text-2xl font-bold mb-4">We Are Here to Help</h2>
              <p className="text-lg mb-4">
                Our team is ready to assist you with any questions or concerns.
                Feel Free to Contact & Hire Us for Your Solution
              </p>
              <Link
                href="/aboutUs"
                className="inline-flex text-white hover:text-white transition duration-300 mb-6"
              >
                <span>Learn More</span>
                <FaArrowRight className="ml-2" />
              </Link>

              {/* Follow Us and Social Media Links */}
              <div className="mt-6">
                <p className="text-lg font-semibold mb-4">Follow Us:</p>
                <div className="flex space-x-4">
                  {/* Facebook */}
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-white transition duration-300 rounded-full p-2"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </Link>

                  {/* Instagram */}
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-white transition duration-300 rounded-full p-2"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </Link>

                  {/* LinkedIn */}
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black bg-white transition duration-300 rounded-full p-2"
                  >
                    <FaLinkedin className="w-6 h-6" />
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
          className="w-full p-8"
        >
          <div>
            <p className="text-2xl font-bold mb-4">Have any Consultation...?</p>
            <h2 className="text-gray-600 mb-4">
              We'd love to hear from you! Please fill out the form below and we'll get back to you shortly.
            </h2>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Grid for Name and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FF0000]" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name*"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FF0000]" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Number*"
                  pattern="\d{9,}"  // Add pattern for phone number validation
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
              </div>
            </div>

            {/* Grid for Email and Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Field */}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FF0000]" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your E-Mail*"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
                  required
                />
              </div>

              {/* Address Field */}
              <div className="relative">
                <FaLocationDot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FF0000]" />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your Address"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write A Message..."
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
              />
            </div>

            {/* Status Message */}
            {submitStatus && (
              <div className={`p-4 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#FF0000] text-white py-3 flex items-center justify-center space-x-2 hover:bg-red-700 transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Submit Message</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Additional Content */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          Need more information? Check out our{" "}
          <Link href="/page/faq" className="text-[#FF0000] hover:text-[#FF0000]">
            FAQ section
          </Link>
          .
        </p>
        <p className="text-gray-600">
          Or call us directly at{" "}
          <a href="tel:+1234567890" className="text-[#FF0000] hover:text-[#FF0000]">
            +1 (234) 567-890
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ContactForm;