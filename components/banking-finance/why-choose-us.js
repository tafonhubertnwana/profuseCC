import WhyChooseUs from '@/components/customized/WhyChooseUs';

export default function WhyChooseUsPage() {
  const features = [
    {
      title: "Business Transformation",
      description: "Streamline your business with unprecedented digital transformation, transform the organization's day-to-day activities, deliver precision in services, elevate customer experience, and reduce operational costs.",
      icon: "/assets/api.png",
    },
    {
      title: "Innovative Acceleration",
      description: "Our approach is for innovation, finding cutting-edge technologies and solutions for product designing, system architecture, and tech implementation to protect your business from the ever-changing dynamic of your business environment.",
      icon: "/assets/api.png",
    },
    {
      title: "Improved Security",
      description: "Finance of all industries has the biggest need for security in their operations, data, and information. At CIS, thus security is one of the most important parameters to keep your institute secure from any cyber threat.",
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