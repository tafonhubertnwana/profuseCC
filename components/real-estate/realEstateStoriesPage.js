import HowWeHelpSection from "@/components/customized/howWeHelpSection";

const SuccessStoriesPage = () => {
  const successCards = [
  {
    title: "Streamlining Property",
    subtitle: "Management Operations",
    description: "Integrated solutions to simplify lease tracking, tenant communication, and maintenance management across properties.",
    category: "REAL ESTATE MANAGEMENT",
    imageUrl: "/industry/real-22.jpg",
  },
  {
    title: "Empowering Agents With",
    subtitle: "Smart Sales Tools",
    description: "Advanced CRM and analytics platforms that help real estate professionals close deals faster and manage leads efficiently.",
    category: "SALES & MARKETING",
    imageUrl: "/industry/real-23.webp",
  },
  {
    title: "Making Real Estate",
    subtitle: "Education More Accessible",
    description: "Online certification programs and training portals for agents and brokers to stay compliant and competitive.",
    category: "EDUCATION",
    imageUrl: "/industry/real-24.jpg",
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