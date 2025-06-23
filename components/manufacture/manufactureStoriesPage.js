import HowWeHelpSection from "@/components/customized/howWeHelpSection";

const SuccessStoriesPage = () => {
 const successCards = [
  {
    title: "Streamlining",
    subtitle: "Manufacturing Operations",
    description:
      "Implemented intelligent automation systems to optimize production lines, reduce downtime, and enhance efficiency across facilities.",
    category: "Operational Efficiency",
    imageUrl: "/industry/manu-18.webp",
  },
  {
    title: "Empowering Workforce Through",
    subtitle: "Industrial Training Programs",
    description:
      "Delivered targeted upskilling programs and certifications for factory personnel, enhancing safety, productivity, and equipment handling.",
    category: "Workforce Development",
    imageUrl: "/industry/manu-19.webp",
  },
  {
    title: "Digitizing Quality Control",
    subtitle: "With Smart Inspection Systems",
    description:
      "Leveraged AI-powered visual inspection tools to ensure product consistency, reduce defects, and maintain industry compliance.",
    category: "Smart Manufacturing",
    imageUrl: "/industry/manu-20.webp",
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