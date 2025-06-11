// components/TestimonialForm.js
import { useState, useRef } from 'react';
import { FaTimes, FaUpload, FaTrash, FaStar, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { databases, storage } from '@/lib/appwrite';

import { ID, Permission, Role } from 'appwrite';

export default function TestimonialForm({ showModal, setShowModal, onTestimonialAdded }) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    name: '',
    review: '',
    position: '',
    company: '',
    rating: 0,
  });

  const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID;
  const collectionId = process.env.NEXT_PUBLIC_TESTIMONIAL_FORM_ID;
  const bucketId = process.env.NEXT_PUBLIC_STORAGE_BUCKET_ID;

  if (!databaseId || !collectionId || !bucketId) {
    console.error("Missing Appwrite config");
    return null;
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    const fileExtension = selectedFile.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      alert('Only JPG, PNG, GIF, or WEBP files are allowed!');
      e.target.value = '';
      return;
    }

    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  };

  const removeImage = () => {
    setFile(null);
    setPreviewUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (value) => {
    setForm({ ...form, rating: value });
  };

  const resetForm = () => {
    setForm({
      name: '',
      review: '',
      position: '',
      company: '',
      rating: 0,
    });
    setFile(null);
    setPreviewUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setUploading(true);

  try {
    if (!file) {
      alert('Please upload a profile image');
      setUploading(false);
      return;
    }

    // Upload the file to Appwrite Storage
    const uploadedFile = await storage.createFile(
      bucketId,
      ID.unique(),
      file,
      [Permission.read(Role.any())]
    );

    // Get the file URL
    const fileUrl = storage.getFileView(bucketId, uploadedFile.$id);
    
    // Create the testimonial document
    await databases.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      {
        ...form,
        imageUrl: fileUrl.toString(),
      }
    );
    
    // Send email notification
    await fetch('/api/testimonial', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email || 'no-email-provided@example.com',
        review: form.review,
        rating: form.rating,
        position: form.position,
        company: form.company
      }),
    });
    
    setSubmitted(true);
    onTestimonialAdded(); // Refresh the testimonials list
  } catch (err) {
    console.error('Error submitting testimonial:', err);
    alert('Error submitting testimonial. Please try again.');
  } finally {
    setUploading(false);
  }
};
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => {
            resetForm();
            setShowModal(false);
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'spring', damping: 25 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl mx-auto my-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  {submitted ? 'Thank You!' : 'Share Your Experience'}
                </h2>
                <button
                  onClick={() => {
                    resetForm();
                    setShowModal(false);
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="flex justify-center mb-6">
                    <FaCheckCircle className="text-green-500 text-6xl" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    Testimonial Submitted Successfully!
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Thank you for sharing your experience with us. Your feedback is valuable and will be reviewed shortly.
                  </p>
                  <button
                    onClick={() => {
                      resetForm();
                      setShowModal(false);
                    }}
                    className="bg-[#FF0000] text-white px-6 py-3 rounded-lg hover:bg-[#FF0000]/90 transition duration-300 font-medium shadow-md"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company*</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Inc."
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Position*</label>
                        <input
                          type="text"
                          name="position"
                          value={form.position}
                          onChange={handleChange}
                          placeholder="Marketing Director"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image*</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-gray-400 transition">
                        {previewUrl ? (
                          <div className="relative group">
                            <img 
                              src={previewUrl} 
                              alt="Preview" 
                              className="h-40 w-40 mx-auto object-cover rounded-full border-4 border-white shadow-md"
                            />
                            <button
                              type="button"
                              onClick={removeImage}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition transform group-hover:scale-110"
                            >
                              <FaTrash className="text-sm" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center space-y-3">
                            <div className="p-4 bg-gray-100 rounded-full">
                              <FaUpload className="text-2xl text-gray-500" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Upload a professional headshot</p>
                              <p className="text-xs text-gray-400">JPG, PNG or WEBP (Max 5MB)</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => fileInputRef.current.click()}
                              className="mt-2 bg-blue-50 hover:bg-blue-100 text-[#FF0000] px-4 py-2 rounded-lg text-sm transition font-medium"
                            >
                              Select Image
                            </button>
                            <input
                              type="file"
                              ref={fileInputRef}
                              onChange={handleFileChange}
                              accept="image/*"
                              className="hidden"
                              required
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="label">
                        <span className="label-text text-gray-700">Your Rating*</span>
                      </label>
                      <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((value) => (
                          <button
                            type="button"
                            key={value}
                            onClick={() => handleRatingChange(value)}
                            className={`text-2xl ${
                              value <= form.rating ? "text-yellow-500" : "text-gray-300"
                            } hover:text-yellow-400 transition`}
                          >
                            <FaStar />
                          </button>
                        ))}
                        <span className="ml-2 text-sm text-gray-500">
                          {form.rating > 0 ? `${form.rating} star${form.rating !== 1 ? 's' : ''}` : 'Not rated'}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Testimonial*</label>
                      <textarea
                        name="review"
                        value={form.review}
                        onChange={handleChange}
                        placeholder="Share your experience working with us..."
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-100 transition h-40"
                        rows="5"
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={uploading}
                        className="w-full bg-[#FF0000] text-white px-6 py-3 rounded-lg hover:bg-[#FF0000]/90 transition duration-300 disabled:opacity-70 flex items-center justify-center font-medium shadow-md"
                      >
                        {uploading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : 'Submit Testimonial'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}