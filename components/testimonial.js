import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft, FaQuoteRight, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import axios from "axios";


export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [file, setFile] = useState(null);

  // Fetch testimonials on component mount
  useEffect(() => {
    axios.get("/api/testimonials").then((res) => setTestimonials(res.data));
  }, []);

  const handleFileChange = (e) => setFile(e.target.files[0]);
  // Handle form submission
  const addTestimonial = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", e.target.name.value);
    formData.append("position", e.target.position.value);
    formData.append("company", e.target.company.value);
    formData.append("review", e.target.review.value);
    formData.append("rating", rating);
    
    await axios.post("/api/testimonials", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setShowModal(false);
    setRating(0);
    setFile(null);
    axios.get("/api/testimonials").then((res) => setTestimonials(res.data));
  };

  // Handle rating selection
  const handleRating = (value) => {
    setRating(value);
  };

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show two testimonials at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
        },
      },
    ],
  };
  

  return (
    <div className=" py-10">
      <div className="container xl:max-w-6xl mx-auto px-4">
      <div>
  <div className="flex flex-col lg:flex-row lg:justify-between items-center text-center lg:text-left">
    {/* Centered on mobile, left-aligned on lg screens */}
    <div>
      <h6 className="text-center lg:text-left text-[#FF0000]">Testimonial</h6>
      <h1 className="text-4xl font-bold mb-10">What say our Valuable Clients</h1>
    </div>

    {/* Hidden on small screens, visible on lg screens */}
    <div className="hidden lg:flex">
      <button
        onClick={() => setShowModal(true)}
        className="bg-[#FF0000] text-white px-6 py-2  hover:bg-[#FF0000] transition duration-300"
      >
        Add Testimonial
      </button>
    </div>
  </div>
</div>

<Slider {...carouselSettings}>
  {testimonials.map((testimonial) => (
    <div key={testimonial._id} className="px-2 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className=" p-8 rounded-xl shadow-xl relative overflow-hidden bg-white flex flex-col"
      >
        <FaQuoteLeft className="text-4xl text-[#FF0000]  absolute top-4 left-4" />
        
        {/* Testimonial text */}
        <div className="flex-grow flex items-center">
          <p className="text-lg italic text-center">{testimonial.review}</p>
        </div>
        
        {/* Centered profile section */}
        <div className="flex flex-col items-center mt-auto">
          <div className="w-20 h-20 rounded-full border-4 shadow-md overflow-hidden relative ">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={80}
              height={80}
              className="object-cover"
              onError={() => setImageError(true)}
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">{testimonial.name}</h2>
            <p className="text-sm text-gray-600">{testimonial.position} at {testimonial.company}</p>
            <div className="flex justify-center mt-1 space-x-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${
                    i < testimonial.rating ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <FaQuoteRight className="text-4xl text-[#FF0000]  absolute bottom-4 right-4" />
      </motion.div>
    </div>
  ))}
</Slider>

        {/* Modal for Adding Testimonial */}
        <AnimatePresence>
  {showModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
      onClick={() => setShowModal(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white p-6  shadow-lg max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Flex container for Logo and Title */}
        <div className="flex items-center justify-between mb-4">
          {/* Company Logo */}
          <img
            src="/assets/aclogo.png" // Replace with your actual logo path
            alt="Company Logo"
            className="w-12 h-12 object-contain"
          />
          {/* Title */}
          <h2 className="text-2xl font-bold">Add Your Testimonial</h2>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes className="text-2xl" />
        </button>
        <form onSubmit={addTestimonial}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 border border-black  focus:ring-1 focus:ring-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Company</label>
            <input
              type="text"
              name="company"
              placeholder="Company"
              required
              className="w-full px-4 py-2 border border-black  focus:ring-1 focus:ring-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Position</label>
            <input
              type="text"
              name="position"
              placeholder="Position"
              required
              className="w-full px-4 py-2 border border-black  focus:ring-1 focus:ring-black"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 ">Image</label>
            <input
              type="file"
              name="image"
              required
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-black focus:ring-1 focus:ring-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Review</label>
            <textarea
              name="review"
              placeholder="Review"
              required
              className="w-full px-4 py-2 border border-black focus:ring-1 focus:ring-black "
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Rating</label>
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setRating(i + 1)}
                  className={`text-2xl ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#FF0000] text-white px-6 py-2  hover:bg-[#FF0000] transition duration-300"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


      </div>
    </div>
  );
}