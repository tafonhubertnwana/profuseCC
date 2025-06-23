import HowWeHelpSection from "@/components/customized/howWeHelpSection";

const SuccessStoriesPage = () => {
  const successCards = [
    {
      title: "Simplifying Various",
      subtitle: "School Management Processes",
      description: "Our solutions streamline administrative tasks, attendance tracking, and communication for educational institutions.",
      category: "EDUCATION",
      imageUrl: "/industry/edu-23.jpg",
    },
    {
      title: "Preparing People For A",
      subtitle: "Successful Career",
      description: "Comprehensive career development programs that equip individuals with in-demand skills and certifications.",
      category: "CAREER-DEVELOPMENT",
      imageUrl: "/industry/edu-24.jpg",
    },
    {
      title: "Making Remedial",
      subtitle: "Driving Courses Easily Accessible Online",
      description: "Digital platforms that provide accessible remedial courses for drivers needing license renewal or improvement.",
      category: "EDUCATION",
      imageUrl: "/industry/edu-25.webp",
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