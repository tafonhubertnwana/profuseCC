import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import Image from "next/image";
import faqsData from "@/utils/faqs.json"; // Adjust the path based on your structure

export default function ITServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container xl:max-w-6xl my-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
  <h4 className="text-[#FF0000] text-sm font-semibold">AI-Powered Cloud Solutions</h4>
  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
    Intelligent Cloud Services for Digital Transformation
  </h1>
  <p className="text-gray-600 mt-3 text-sm sm:text-base">
    ProfuseCC delivers cutting-edge AI solutions on cloud infrastructure to accelerate your business growth.
  </p>

  {/* Image Section */}
  <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
    <Image src="/assets/faqs-1.jpg" alt="AI Cloud Infrastructure" width={300} height={300} className="w-full sm:w-1/2 shadow-md" />
    <Image src="/assets/faqs-2.jpg" alt="Machine Learning Models" width={300} height={300} className="w-full sm:w-1/2 shadow-md" />
  </div>

  <div className="mt-8 flex items-start space-x-4">
    {/* Icon */}
    <div className="relative z-10 w-16 h-16 flex items-center justify-center rounded-full border-2 border-[#FF0000]  text-[#FF0000]  text-3xl">
      <BsFillPatchQuestionFill />
    </div>

    {/* Description */}
    <div className="flex-1">
      <p className="text-gray-800">
        ProfuseCC specializes in AI-driven cloud solutions including generative AI platforms, 
        machine learning operations (MLOps), intelligent data analytics, and cloud-native 
        application development. Our enterprise-grade AI services help businesses automate 
        processes, gain predictive insights, and transform operations through cutting-edge 
        artificial intelligence deployed on scalable cloud infrastructure.
      </p>
    </div>
  </div>
</div>
        {/* FAQ Section */}
        <div>
          {faqsData.faqs.map((faq, index) => (
            <div key={index} className="my-4 cursor-pointer">
              <div
                className={`border border-gray-100 p-2 flex justify-between items-center transition-colors duration-200 ${
                  openIndex === index ? "bg-[#FF0000]  text-white" : "hover:bg-[#FF0000]  hover:text-white"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium flex items-center">
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#FF0000]  text-[#FF0000]  text-3xl">
                    <BsFillPatchQuestionFill size={24} className={`${openIndex === index ? "text-white" : "text-[#FF0000] "}`} />
                  </div>
                  <span className="ml-3 text-sm sm:text-base">{faq.question}</span>
                </span>
                {openIndex === index ? <FaMinus className="text-white" /> : <FaPlus />}
              </div>
              {openIndex === index && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-black bg-white p-4 border border-gray-100 text-sm sm:text-base">
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
