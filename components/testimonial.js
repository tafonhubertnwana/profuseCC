// components/Testimonials.js
import { useState, useEffect } from 'react';
import { databases } from '@/lib/appwrite';
import { ID, Query } from 'appwrite';
import TestimonialForm from './TestimonialForm';
import TestimonialList from './TestimoniaList';


const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID;
const collectionId = process.env.NEXT_PUBLIC_TESTIMONIAL_FORM_ID;
export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await databases.listDocuments(
        databaseId,
        collectionId
      );
      setTestimonials(response.documents);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className="py-10">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div>
          <div className="flex flex-col lg:flex-row lg:justify-between items-center text-center lg:text-left">
            <div>
              <h6 className="text-center lg:text-left text-[#FF0000]">Testimonial</h6>
              <h1 className="text-3xl font-bold mb-10">What say our Valuable Clients</h1>
            </div>

            <div className="hidden lg:flex">
              <button
                onClick={() => setShowModal(true)}
                className="bg-[#FF0000] text-white px-6 py-2 rounded hover:bg-[#FF0000] transition duration-300"
              >
                Add Testimonial
              </button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-10">Loading testimonials...</div>
        ) : testimonials.length > 0 ? (
          <TestimonialList testimonials={testimonials} />
        ) : (
          <div className="text-center py-10">No testimonials yet. Be the first to add one!</div>
        )}

        {/* Mobile Add Testimonial Button
        <div className="lg:hidden flex justify-center mt-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#FF0000] text-white px-6 py-2 rounded hover:bg-[#FF0000] transition duration-300"
          >
            Add Testimonial
          </button> */}
        {/* </div> */}

        {/* Testimonial Form Modal */}
        {showModal && (
          <TestimonialForm
            showModal={showModal}
            setShowModal={setShowModal}
            onTestimonialAdded={fetchTestimonials}
          />
        )}
      </div>
    </div>
  );
}