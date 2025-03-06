import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "John Doe",
      image: "/assets/person-1.jpg",
      review: "Amazing service! The team was very professional and delivered beyond my expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "/assets/person-2.jpg",
      review: "I highly recommend this company. They are reliable and efficient.",
      rating: 4,
    },
    {
      id: 3,
      name: "Alice Johnson",
      image: "/assets/person-3.jpg",
      review: "Great experience working with them. Will definitely use their services again.",
      rating: 5,
    },
    {
      id: 4,
      name: "Bob Brown",
      image: "/assets/person-1.jpg",
      review: "Excellent customer support and high-quality work.",
      rating: 4,
    },
    {
      id: 5,
      name: "Charlie Davis",
      image: "/assets/person-2.jpg",
      review: "Very satisfied with the results. Thank you!",
      rating: 5,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);

  const addTestimonial = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTestimonial = {
      id: testimonials.length + 1,
      name: formData.get("name"),
      image: formData.get("image"),
      review: formData.get("review"),
      rating: rating,
    };
    setTestimonials([...testimonials, newTestimonial]);
    setShowModal(false);
    setRating(0);
  };

  const handleRating = (value) => {
    setRating(value);
  };

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">

        <h1 className="text-4xl font-bold text-center mb-10">Client Testimonials</h1>

          {/* Add Testimonial Button */}
          <div className="text-center mb-10">
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Add Testimonial
            </button>
          </div>
        </div>
        {/* Testimonials Carousel */}
        <Slider {...carouselSettings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-2"> {/* Add margin here */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-r h-56 from-indigo-500 to-purple-500 text-white p-8 rounded-xl shadow-xl relative overflow-hidden"
              >
                <FaQuoteLeft className="text-4xl text-white opacity-30 absolute top-4 left-4" />
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-4 border-white shadow-md"
                  />
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold">{testimonial.name}</h2>
                    <div className="flex mt-1 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xl ${
                            i < testimonial.rating ? "text-yellow-300" : "text-gray-400"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-lg italic">{testimonial.review}</p>
                <FaQuoteRight className="text-4xl text-white opacity-30 absolute bottom-4 right-4" />
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
              className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center p-4"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold mb-4">Add Your Testimonial</h2>
                <form onSubmit={addTestimonial}>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Image URL</label>
                    <input
                      type="url"
                      name="image"
                      required
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Review</label>
                    <textarea
                      name="review"
                      required
                      className="w-full px-4 py-2 border rounded-lg"
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
                          onClick={() => handleRating(i + 1)}
                          className={`text-2xl ${
                            i < rating ? "text-yellow-500" : "text-gray-300"
                          }`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
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