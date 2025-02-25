import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaMinus, FaPlus } from "react-icons/fa";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import Image from "next/image";

const faqs = [
  {
    question: "Project Horizon Redevelopment?",
    answer:
      "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high.",
  },
  {
    question: "What is your professional passion?",
    answer: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high.",
  },
  {
    question: "Service Horizon Business low?",
    answer: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high.",
  },
  {
    question: "Business Solution Redevelopment?",
    answer: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high.",
  },
  {
    question: "Do you have any custom services?",
    answer: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high.",
  },
];

export default function ITServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          {/* Heading Section */}
          <h4 className="text-blue-600 text-sm font-semibold">IT Support For Business</h4>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
            Ensuring Your Success Trusted IT Services Source
          </h1>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Business tailored IT design, management & support services needs to be
            business agency elit, sed do eiusmod tempor proved.
          </p>

          {/* Image Section */}
          <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
            <Image 
              src="/assets/slide2.jpg" 
              alt="First Image" 
              width={300}
              height={300}
              className="w-full sm:w-1/2 shadow-md "
            />
            <Image 
              src="/assets/slide2.jpg" 
              alt="Second Image" 
              width={300}
              height={300}
              className="w-full sm:w-1/2 shadow-md "
            />
          </div>

          {/* Icon and Description Section */}
          <div className="mt-8 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Icon */}
            <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full border-2 border-orange-500 text-orange-500 text-3xl">
              <BsFillPatchQuestionFill />
            </div>

            {/* Description */}
            <div className="flex-1">
              <p className="text-gray-800 text-sm sm:text-base">
                Business tailored IT design, management & support services business agency elit sed do eiusmod tempor proved business task state of the art infrastructures for you.
              </p>
            </div>
          </div>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="my-4 cursor-pointer">
              <div
                className={`border border-gray-100 p-2 transition-colors duration-200 flex justify-between items-center ${
                  openIndex === index
                    ? "bg-orange-500 text-white"
                    : "hover:bg-orange-500 hover:text-white"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium flex items-center">
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full border-2 border-orange-500 text-orange-500 text-3xl transition-colors duration-200">
                    <BsFillPatchQuestionFill size={24} className={`${openIndex === index ? "text-white" : "text-orange-500"}`} />
                  </div>
                  <span className="ml-3 text-sm sm:text-base">{faq.question}</span>
                </span>
                {openIndex === index ? (
                  <FaMinus className="transition-colors duration-200 text-white" />
                ) : (
                  <FaPlus className="transition-colors duration-200 group-hover:text-white" />
                )}
              </div>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-black bg-white p-4 border border-gray-100 text-sm sm:text-base"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}