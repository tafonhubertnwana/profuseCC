import HowWeHelpSection from "@/components/customized/howWeHelpSection";

const SuccessStoriesPage = () => {
 const successCards = [
  {
    title: "Streamlining Core",
    subtitle: "Banking Operations with Automation",
    description: "Our solutions optimize transaction processing, customer data management, and regulatory compliance for enhanced efficiency in financial institutions.",
    category: "BANKING",
    imageUrl: "/industry/fin-34.webp",
  },
  {
    title: "Empowering Clients For A",
    subtitle: "Secure Financial Future",
    description: "Robust wealth management platforms that deliver personalized investment advice, portfolio tracking, and real-time financial analytics.",
    category: "WEALTH-MANAGEMENT",
    imageUrl: "/industry/fin-34.webp",
  },
  {
    title: "Making Financial Literacy",
    subtitle: "Accessible Through Digital Platforms",
    description: "Interactive online tools and courses that help users understand budgeting, credit, and investments for long-term financial wellness.",
    category: "FINANCIAL-EDUCATION",
    imageUrl: "/industry/fin-34.webp",
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