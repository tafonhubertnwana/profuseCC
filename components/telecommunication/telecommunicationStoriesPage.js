import HowWeHelpSection from "@/components/customized/howWeHelpSection";

const SuccessStoriesPage = () => {
  const successCards = [
  {
    title: "Transforming Telecom",
    subtitle: "Operations Through Automation",
    description: "We optimize network management, customer support, and billing systems with AI-driven automation for enhanced efficiency and service delivery.",
    category: "TELECOMMUNICATION",
    imageUrl: "/industry/tel-24.webp",
  },
  {
    title: "Expanding Internet",
    subtitle: "Access in Underserved Areas",
    description: "Our scalable infrastructure solutions enable telecom providers to deliver high-speed internet to rural and remote communities, bridging the digital divide.",
    category: "INTERNET CONNECTIVITY",
    imageUrl: "/industry/tel-25.webp",
  },
  {
    title: "Enhancing Telecommunication",
    subtitle: "Security and Reliability",
    description: "Implementing robust cybersecurity and network monitoring tools to ensure reliable and secure communication services across all platforms.",
    category: "TELECOMMUNICATION",
    imageUrl: "/industry/tel-26.webp",
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