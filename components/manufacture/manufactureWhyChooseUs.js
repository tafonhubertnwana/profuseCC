import WhyChooseUs from '@/components/customized/WhyChooseUs';

export default function WhyChooseUsPage() {
  const features = [
    {
      title: "Mobile and Web App Development",
      description: "Unfold the digital in the swiftest way, by gaining our web and mobile advantages on leading platforms. We give you your business the digital powers to use mobile and web channels to perform and track your business manufacturing cycle to give you a mobile first approach.",
      icon: "/industry/manu-14.png",
    },
    {
      title: "Cloud Infrastructure Consulting & Services",
      description: "We help you to manufacture efficient IT infrastructure to streamline your operations, automate your processes and modernize your legal processes using cloud technology.",
      icon: "/industry/manu-15.png",
    },
    
    {
      title: "Field Services Management",
      description: "Technology solutions that allow you to manage your operations while providing you business advantages to effectively improve your efficiency and staff management for better results.",
      icon: "/industry/manu-17.png",
    }
  ];

  return (
    <main>
      <WhyChooseUs 
        title="Why Choose Us?"
        subtitle=""
        features={features}
      />
    </main>
  );
}