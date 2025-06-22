import HowWeHelpSection from "@/components/customized/howWeHelpSection";

const SuccessStoriesPage = () => {
  const successCards = [
  {
    title: "Streamlining Hospital",
    subtitle: "Management Systems",
    description: "Optimized administrative and clinical workflows to enhance patient care and operational efficiency.",
    category: "Healthcare IT",
    imageUrl: "/industry/heal-19.jpg",
  },
  {
    title: "Empowering Professionals",
    subtitle: "Thriving Healthcare Career",
    description: "Specialized training programs to upskill healthcare workers with certifications in modern medical technologies and practices.",
    category: "Healthcare Workforce",
    imageUrl: "/industry/heal-20.jpg",
  },
  {
    title: "Making Telemedicine",
    subtitle: "More Accessible to Communities",
    description: "User-friendly digital platforms that connect patients with certified healthcare providers for virtual consultations and follow-ups.",
    category: "Digital Health",
    imageUrl: "/industry/heal-21.webp",
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