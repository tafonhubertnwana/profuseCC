import HowWeHelpSection from "@/components/customized/howWeHelpSection";

const SuccessStoriesPage = () => {
  const successCards = [
  {
    title: "Optimizing Transport",
    subtitle: "Operations Through Automation",
    description: "We streamline fleet management, route planning, and delivery tracking with AI-powered automation for improved operational efficiency and customer satisfaction.",
    category: "TRANSPORT & LOGISTICS",
    imageUrl: "/industry/log-30.webp",
  },
  {
    title: "Expanding Delivery",
    subtitle: "Networks in Remote Areas",
    description: "Our scalable logistics solutions help companies reach rural and hard-to-access regions, enhancing last-mile delivery and bridging the logistics gap.",
    category: "SUPPLY CHAIN",
    imageUrl: "/industry/log-31.webp",
  },
  {
    title: "Enhancing Logistics",
    subtitle: "Security and Reliability",
    description: "Implementing advanced tracking systems and secure data protocols to ensure safe, timely, and transparent transport of goods across the supply chain.",
    category: "TRANSPORT & LOGISTICS",
    imageUrl: "/industry/log-32.webp",
  },
];


  return (
    <div>
      <HowWeHelpSection 
        heading="See how ProfuseCC help in Enterprises success" 
        cards={successCards} 
      />
    </div>
  );
};

export default SuccessStoriesPage;