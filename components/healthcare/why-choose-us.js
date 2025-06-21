import WhyChooseUs from '@/components/customized/WhyChooseUs';

export default function WhyChooseUsPage() {
  const features = [
    {
      title: "All-in-One Solution",
      description: "Healthcare portal development with features that allow you to manage and monitor all your organizations activities in one go.",
      icon: "/assets/api.png",
    },
    {
      title: "Data Collection and Privacy",
      description: "Security, scalability and the agility in your work management and service provision, give you cutting edge technologies that allow you to install IoT, smart devices, healthcare application development solutions into your internal processes.",
      icon: "/assets/api.png",
    },
    
    {
      title: "Wearable Technology and Cloud",
      description: "Security, scalability and the agility in your work management and service provision, give you cutting edge technologies that allow you to install IoT, smart devices, healthcare application development solutions into your internal processes.",
      icon: "/assets/api.png",
    },
    {
      title: "Patient Personalized Solutions",
      description: "Our healthcare application development and software solutions allow you to manage your patient's critical data to give them personalized and user-friendly solutions on mobile applications and web portals.",
      icon: "/assets/api.png",
    },
  ];

  return (
    <main>
      <WhyChooseUs 
        title="Why Choose Us?"
        subtitle="Discover what makes us different"
        features={features}
      />
    </main>
  );
}