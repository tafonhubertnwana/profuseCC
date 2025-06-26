'use client'

import HowWeHelpSection from "@/components/customized/howWeHelpSection";

const SuccessStoriesPage = () => {
  const successCards = [
  
  {
    title: "Streamlining Retail",
    subtitle: "Store Management Systems",
    description: "Digitized workflows and inventory automation tools that boost operational efficiency and enhance the in-store and online shopping experience.",
    category: "Retail Technology",
    imageUrl: "/industry/whole-25.webp",
  },
  {
    title: "Empowering Retail Teams",
    subtitle: "Skills for the Digital Marketplace",
    description: "Training programs designed to equip retail staff with modern e-commerce tools, digital marketing techniques, and customer service best practices.",
    category: "Retail Workforce",
    imageUrl: "/industry/whole-26.webp",
  },
  {
    title: "Making Online Shopping",
    subtitle: "More Accessible & Engaging",
    description: "User-friendly e-commerce platforms that provide seamless navigation, personalized recommendations, and multiple payment options to enhance customer satisfaction.",
    category: "E-Commerce Solutions",
    imageUrl: "/industry/whole-27.jpeg",
  },
];



  return (
    <div>
      <HowWeHelpSection 
        heading="See how we help in Enterprises success" 
        cards={successCards} 
      />
    </div>
  );
};

export default SuccessStoriesPage;