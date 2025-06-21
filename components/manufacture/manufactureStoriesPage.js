import HowWeHelpSection from "@/components/customized/howWeHelpSection";

const SuccessStoriesPage = () => {
  const successCards = [
    {
      title: "Simplifying Various",
      subtitle: "School Management Processes",
      description: "Wealth of information about Middle Eastern financial markets",
      category: "Finance & Market",
      imageUrl: "/images/education-management.jpg",
    },
    {
      title: "Preparing People For A",
      subtitle: "Successful Career",
      description: "Comprehensive career development programs that equip individuals with in-demand skills and certifications.",
      category: "CAREER-DEVELOPMENT",
      imageUrl: "/images/career-development.jpg",
    },
    {
      title: "Making Remedial",
      subtitle: "Driving Courses Easily Accessible Online",
      description: "Digital platforms that provide accessible remedial courses for drivers needing license renewal or improvement.",
      category: "EDUCATION",
      imageUrl: "/images/driving-courses.jpg",
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